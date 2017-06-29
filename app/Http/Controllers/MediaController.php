<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Approached\LaravelImageOptimizer\ImageOptimizer;
use Aws\CloudFront\Exception\Exception;
use Illuminate\Http\Request;

use App\Http\Requests;


use Illuminate\Contracts\Filesystem\Factory;
use Storage;
use Folklore\Image\Facades;
use Carbon\Carbon;
use PageHelper;

class MediaController extends ApiController
{

    public function __construct()
    {
        // Apply the jwt.auth middleware to all methods in this controller
        $this->middleware('jwt.auth',
            ['except' => [
                'addMediaContent', 'updateMediaContent', 'fileUploader', 'deleteMediaContent'
            ]]);
        $this->media = new Media();
    }


    public function updateMediaContent()
    {
        $inputData = \Input::all();

         // dd($inputData);
        $data = array(
            "media_name" => $inputData['MediaTitle'],
            "sequence" => $inputData['MediaSequence'],
            "media_type" => $inputData['MediaType'],
            "media_link" => $inputData['MediaLink'],
            "is_hero_item" => $inputData['IsHeroItem'],
            "is_main_item" => $inputData['IsMainItem']
        );

        $media = Media::where('id', '=', $inputData['MediaId'])->first();

        if($media->mediable_type == 'App\Models\Product' && $media->mediable){
        	PageHelper::deleteFromRedis('product-details-'.$media->mediable->product_permalink);
        }

        return Media::where('id', '=', $inputData['MediaId'])->update($data);

    }

    public function fileUploader(Request $request)
    {
        $isProfilePage = $request->get('isProfilePage');

        $fileResponse = [];

        if (!$request->hasFile('file')) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;

        } else if (!$request->file('file')->isValid()) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if (!in_array($request->file('file')->guessClientExtension(), array("jpeg", "jpg", "bmp", "png", "mp4", "avi", "mkv"))) {
            $fileResponse['result'] = \Config::get("const.file.file-invalid");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if ($request->file('file')->getClientSize() > \Config::get("const.file.file-max-size")) {
            $fileResponse['result'] = \Config::get("const.file.file-max-limit-exit");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else {
            $fileName = 'product-' . uniqid() . '-' . $request->file('file')->getClientOriginalName();

            // pointing filesystem to AWS S3
            $s3 = Storage::disk('s3');

            $fileObject = $this->optimizeImage($request);


            if ($s3->put($fileName, $fileObject, 'public')) {
                if (!$isProfilePage) {
                    $fileResponse['result'] = \Config::get("const.file.s3-path") . $fileName;
                    $fileResponse['status_code'] = \Config::get("const.api-status.success");
                }
            }

            // Thumbnail creation and uploading to AWS S3
            if (in_array($request->file('file')->guessClientExtension(), array("jpeg", "jpg", "bmp", "png"))) {
                // $thumb = \Image::make($request->file('file'))->crop(100,100);
                $thumb = \Image::make($request->file('file'))
                               ->resize(90, null, function ($constraint) {
                                   $constraint->aspectRatio();
                               });

                $thumb = $thumb->stream();
                $thumbFileName = 'thumb-' . $fileName;

                // Set expiration time

                $carbonTime = Carbon::now()->addDays(7);
                $expireTime = 'Expires, '.$carbonTime->toRfc2822String(); // 'Expires, Fri, 30 Oct 1998 14:19:41 GMT'


                $s3->put($thumbFileName, $thumb->__toString(), 'public', ['Expires' => $expireTime]);
//                     $thumb = \Image::make($request->file('file'))->crop(120,120);

                if ($isProfilePage) {
                    $thumb = \Image::make($request->file('file'))
                                   ->resize(120, 120, function ($constraint) {
                                       $constraint->aspectRatio();
                                   })
                                   ->crop(120, 120);

                    $thumb = $thumb->stream();
                    $thumbFileName = '120-' . $fileName;
                    $s3->put($thumbFileName, $thumb->__toString(), 'public', ['Expires' => $expireTime]);
                    $fileResponse['result'] = \Config::get("const.file.s3-path") . $thumbFileName;
                    $fileResponse['status_code'] = \Config::get("const.api-status.success");
                }
            }
            return $fileResponse;

        }
    }


    public function deleteMediaContent()
    {
        $id = \Input::get('id');
        $this->media->deleteMediaItem($id);

    }

    /**
     * @param Request $request
     * @return array|null|string|\Symfony\Component\HttpFoundation\File\UploadedFile
     */
    private function optimizeImage(Request $request)
    {
        $fileObject = $request->file('file');

        // optimizaing image
        $imageOptimizer = new ImageOptimizer();
        $imageOptimizer->optimizeUploadedImageFile($fileObject);

        $fileObject = \File::get($fileObject);
        return $fileObject;
    }


}
