<?php

namespace App\Http\Controllers;


use Aws\CloudFront\Exception\Exception;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Giveaway;
use App\Models\User;
use App\Models\Media;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Support\Facades\Redirect;
use Storage;
use Folklore\Image\Facades;
use Carbon\Carbon;
use DB;
use PageHelper;
use Cookie;


class GiveawayController extends ApiController
{

    public function __construct()
    {
        //check user authentication and get user basic information

        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));
    }

    //Giveaway List for API
    public function getGiveawayList()
    {
//            if ($this->authCheck['method-status'] == 'success-with-http')
//            {
        $giveaways = Giveaway::all();

        return json_encode($giveaways);

//            } elseif ($this->authCheck['method-status'] == 'fail-with-http')
//            {
//                return \Redirect::to('login');
//            }
    }

    public function enterUser(Request $request)
    {

        $inputData = \Input::all();
        $loggedIn = $this->authCheck['method-status'] == 'success-with-ajax';

        if ($loggedIn) {
            $validUser = $this->authCheck['user-data'];
            //  $validUser['Email'] = $userData['Email'];
            //  $validUser['Password'] = $userData['Password'];
        } else {
            $user = new User;
            $validUser = $user->IsAuthorizedUser($inputData);
        }

        // print_r($inputData); die();

        if ($validUser) {
            try {
                $authController = new AuthenticateController();

                if (!DB::table('giveaway_users')->where(
                    [
                        'user_id' => $validUser->id,
                        'giveaway_id' => $inputData['giveaway_id'],
                    ]
                )->count()
                ) {
                    DB::table('giveaway_users')->insert(
                        [
                            'user_id' => $validUser->id,
                            'giveaway_id' => $inputData['giveaway_id'],
                        ]
                    );

                    if (!$loggedIn) {
                        $authController->authenticate($request);
                    }


                   // return ['success' => 'Congratulations, you have entered!'];
                    return $this->setStatusCode(\Config::get("const.api-status.success"))
                                ->makeResponse("Congratulations, you have entered!");
                } else {

                    if (!$loggedIn) {
                        $authController->authenticate($request);


                    }
                    //return ['error' => 'You have already entered this Giveaway'];
                    return $this->setStatusCode(\Config::get("const.api-status.success-with-variation"))
                                ->makeResponse("You have already entered this Giveaway");
                }

            } catch (Exception $ex) {

                return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                            ->makeResponse("System Failure !");
            }


        } else {

            // Flash message.
            session()->flash('giveaway_flash', 'That’s a new Email address! Register with Ideaing first.');

            //return ['error' => 'Incorrect email or password'];
            return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                        ->makeResponse("That’s a new Email address! Register with Ideaing first.");
        }
    }

    public function addGiveaway(Request $request)
    {
        try {
            $inputData = \Input::all();
            if ($inputData['goes_live']) {
                $inputData['goes_live'] = date('Y-m-d', strtotime($inputData['goes_live']));
            }
            if ($inputData['ends']) {
                $inputData['ends'] = date('Y-m-d', strtotime($inputData['ends']));
            }
            $newGiveaway = Giveaway::create($inputData);

            $ImageResult = $this->addMediaForGiveaway($request, 'giveaway_image', $newGiveaway->id);
            if ($ImageResult['status_code'] == 200) {
                $newGiveaway->giveaway_image = $ImageResult['result'];
                $newGiveaway->giveaway_status = 1;
            }
            $newGiveaway->save();
            return Redirect::to('/admin/giveaway-edit/' . $newGiveaway->id)->with('id', $newGiveaway->id);
        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function updateGiveaway(Request $request)
    {
        try {
            $inputData = \Input::all();
            $editGiveaway = Giveaway::find($inputData['giveaway_id']);
            if ($inputData['goes_live']) {
                $inputData['goes_live'] = date('Y-m-d', strtotime($inputData['goes_live']));
            }
            if ($inputData['ends']) {
                $inputData['ends'] = date('Y-m-d', strtotime($inputData['ends']));
            }
            $editGiveaway->update($inputData);

            $ImageResult = $this->addMediaForGiveaway($request, 'giveaway_image', $editGiveaway->id);
            if ($ImageResult['status_code'] == 200) {
                $editGiveaway->giveaway_image = $ImageResult['result'];
            }


            $MobileImageResult = $this->addMediaForGiveaway($request, 'giveaway_mobile_image', $editGiveaway->id);
            if ($MobileImageResult['status_code'] == 200) {
                $editGiveaway->giveaway_mobile_image = $MobileImageResult['result'];
            }

            $editGiveaway->save();
            return Redirect::to('/admin/giveaway-edit/' . $editGiveaway->id)->with('id', $editGiveaway->id);

        } catch (Exception $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function addMediaForGiveaway(Request $request, $filename, $Giveaway_id)
    {
        $fileResponse = [];

        if (!$request->hasFile($filename)) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;

        } else if (!$request->file($filename)->isValid()) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if (!in_array($request->file($filename)->guessClientExtension(), array("jpeg", "jpg", "bmp", "png", "mp4", "avi", "mkv"))) {
            $fileResponse['result'] = \Config::get("const.file.file-invalid");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if ($request->file($filename)->getClientSize() > \Config::get("const.file.file-max-size")) {
            $fileResponse['result'] = \Config::get("const.file.file-max-limit-exit");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else {
            $fileName = 'giveaway-image-' . uniqid() . '-' . $request->file($filename)->getClientOriginalName();

            // pointing filesystem to AWS S3
            $s3 = Storage::disk('s3');
            $destinationPath = 'giveaway/' . $Giveaway_id . '/';
            $directory = $s3->makeDirectory($destinationPath);
            // Thumbnail creation and uploading to AWS S3
            if (in_array($request->file($filename)->guessClientExtension(), array("jpeg", "jpg", "bmp", "png"))) {
                // $thumb = \Image::make($request->file('file'))->crop(100,100);
                $thumb = \Image::make($request->file($filename))
                               ->resize(90, null, function ($constraint) {
                                   $constraint->aspectRatio();
                               });

                $thumb = $thumb->stream();
                $thumbFileName = 'thumb-' . $fileName;

                // Set expiration time

                $carbonTime = Carbon::now()->addDays(7);
                $expireTime = 'Expires, ' . $carbonTime->toRfc2822String(); // 'Expires, Fri, 30 Oct 1998 14:19:41 GMT'

                $s3->put($destinationPath . $thumbFileName, $thumb->__toString(), 'public', ['Expires' => $expireTime]);
            }


            if ($s3->put($destinationPath . $fileName, file_get_contents($request->file($filename)), 'public', ['Expires' => $expireTime])) {
                $fileResponse['result'] = \Config::get("const.file.s3-path") . $destinationPath . $fileName;
                $fileResponse['status_code'] = \Config::get("const.api-status.success");

                return $fileResponse;
            }
        }

    }

    public function deleteGiveaway()
    {
        $id = \Input::get('GiveawayId');
        $Giveaway = Giveaway::find($id);
        if ($Giveaway == null)
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("No data available !");
        $Giveaway->delete();
        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse("Data deleted Successfully");
    }

    public function getCurrentGiveaway($noPopup = false)
    {
        return json_encode(PageHelper::getCurrentGiveaway($noPopup));
    }
}