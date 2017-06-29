<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Response as IlluminateResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Filesystem\Factory;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use FeedParser;
use Cookie;

class ApiController extends Controller
{

    protected $httpStatus = array('code' => IlluminateResponse::HTTP_OK, 'message' => 'success');
    protected $authToken = "";

    public function __construct()
    {
        //  $this->middleware('jwt.auth', ['except' => ['mediaUpload']]);

        // $this->role = new Role();

        $this->userModel = new User();
    }

    /**
     * Return the custom status code and message
     * @return array
     */

    public function getStatusCode()
    {
        return $this->httpStatus;
    }


    /**
     * Set the custom status code and message
     *
     * @param $status
     * @return $this
     */
    public function setStatusCode($status)
    {
        $this->httpStatus = $status;

        return $this;
    }

    /**
     * Get JWT Auth toke for authenticated user
     * @return string
     */
    public function getAuthToken()
    {
        return $this->authToken == null ? "" : $this->authToken;

    }

    /**
     * Set JWT Auth toke for authenticated user
     * @param $toke
     * @return $this
     */
    public function setAuthToken($token = null)
    {
        // set token in cookie for WP use.
       // setcookie('_wptk',$token,time() + (86400 * 14));
       // \PlainCookie::queue('_wptk',$token);

        session(['auth.token' => isset($token) ? $token : null]);

        $this->authToken = $token;


        return $this;
    }


    /**
     * Create an API Response
     * @param $data
     * @param array $headers
     * @return mixed
     */
    public function makeResponse($data, $headers = [])
    {
        $authToken = $this->getAuthToken();
        if ($authToken != "") {
            $data = array_merge(['data' => $data], [
                'token' => $this->getAuthToken(),
                'status_code' => $this->getStatusCode()

            ]);
        } else {
            $data = [
                'data' => $data,
                'status_code' => $this->getStatusCode()
            ];
        }

        return response()->json($data);

    }


    /**
     * Create an API Response with Error code & message
     * @param $message
     * @param null $log
     * @return mixed
     */
    public function makeResponseWithError($message, $log = null)
    {
        Log::error($log);

        return $this->makeResponse([
            'error' => [
                'message' => $message,
            ]
        ]);

    }


    /**
     * Create an API Response
     * @param Paginator $modelData
     * @param $data
     * @return mixed
     */
    public function responseWithPagination(Paginator $modelData, $data)
    {

        $data = array_merge($data, [
            'paginator' => [
                'total_count' => $modelData->getTotal(),
                'total_pages' => ceil($modelData->getTotal() / $modelData->getPerPage()),
                'current_page' => $modelData->getCurrentPage(),
                'limit' => $modelData->getPerPage()
            ]
        ]);

        return $this->makeResponse($data);
    }

    // upload media content to S3
    public function mediaUpload(\Request $request)
    {
        $fileResponse = [];
        if (!$request->hasFile('file')) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;

        } else if (!$request->file('file')->isValid()) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if (in_array($request->file('file')->guessClientExtension(), array("jpeg", "jpg", "bmp", "png", "mp4", "avi", "mkv"))) {
            $fileResponse['result'] = \Config::get("const.file.file-not-exist");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else if ($request->file('file')->getClientSize() > \Config::get("const.file.file-max-size")) {
            $fileResponse['result'] = \Config::get("const.file.file-max-limit-exit");
            $fileResponse['status_code'] = \Config::get("const.api-status.validation-fail");

            return $fileResponse;
        } else {
            $fileName = 'product-' . $request->file('file')->getClientOriginalName() . uniqid() . $request->file('file')->getClientOriginalExtension();

            // pointing filesystem to AWS S3
            $s3 = Storage::disk('s3');

            if ($s3->put($fileName, file_get_contents($request->file('file')), 'public')) {
                $fileResponse['result'] = \Config::get("const.file.s3-path") . $fileName;
                $fileResponse['status_code'] = \Config::get("const.api-status.success");

                return $fileResponse;
            }
        }
    }


    /**
     * User input validation
     * @param $inputData
     * @param $validationRules
     * @return array
     */
    protected function inputValidation($inputData, $validationRules)
    {
        // Trim blank spaces from

        \Input::merge(array_map('trim', $inputData));

        $cleanData = \Input::all();

        $validator = \Validator::make($validationRules['values'], $validationRules['rules']);

        return array($cleanData, $validator);
    }

    // Check and return Cookie
    public function getCookie($cookieName = '')
    {
        // 'hide-signup'
        return \Request::cookie($cookieName);
    }

    public function setCookie($name, $value, $expireMinuet = null)
    {
        if ($expireMinuet == null)
            Cookie::queue(Cookie::make($name,$value,2147483647));
        else
            Cookie::queue(Cookie::make($name,$value,$expireMinuet));
    }



    /** Authenticate a user
     * @return mixed
     */
    public function RequestAuthentication($roles = null)
    {
        // initializing response variables

      //  $initVariables = $this->initHeaderSettings();

        $response['status-code'] = '';
        $response['status-message'] = '';
        $response['user-data'] = '';
        $response['profile-picture'] = '';
        $response['toke'] = '';
        $response['role-authorized'] = false;
        $response['user-data']['hide-signup'] = $this->getCookie('hide-signup');//$initVariables['hide-signup'];

        // get token form input or session

        $token = session('auth.token');

        if (empty($token)) {
            $token = \Input::get('token');

            // check token from cookie (Remember Me)
            if(empty($token))
               $token = $this->getCookie('auth-token');
        }

        // check authentication and catch exception
        try {
            $user = JWTAuth::authenticate($token);
            if (!$user) {
                $response['status-code'] = '900';
                $response['status-message'] = 'No user Found';
            } else {

                $userModel = new User();

                $response['user-data'] = $userModel->IsEmailAvailable($user['email']);
                $response['user-data']['login'] = true;
                // $response['profile-picture'] = isset($response['user-data']->medias[0]->media_link)?$response['user-data']->medias[0]->media_link:'';
                // User::find($response['user-data']['id'])->medias->first();


                $newToken = JWTAuth::refresh($token);
                $this->setAuthToken($newToken);
                //    $response['token'] = $newToken;

                // set email in cookie for WP use.
                 setcookie('_wptk',base64_encode($user['email']),time() + (86400 * 14), '/');

                $response['status-code'] = '200';
                $response['status-message'] = 'User Validated';

                if ($roles != null) {
                    $roleStatus = $user->hasRole($roles);
                    if ($roleStatus == false) {
                        $response['status-code'] = '940';
                        $response['status-message'] = 'User Not Authorized';
                    }

                }
            }

        } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            \Log::error($e);
            $response['status-code'] = '910';
            $response['status-message'] = 'Token Expired';
        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            \Log::error($e);

            $response['status-code'] = '920';
            $response['status-message'] = 'Token Invalid';
        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
            \Log::error($e);

            $response['status-code'] = '930';
            $response['status-message'] = 'Token Not Provided';
        }

        // check for method type and error
        if (in_array($response['status-code'], array(900, 910, 920, 930, 940))) {
            if (\Input::ajax()) {
                $response['method-status'] = 'fail-with-ajax';

            } else {
                $response['method-status'] = 'fail-with-http';
            }
        } else {

            if (\Input::ajax()) {
                $response['method-status'] = 'success-with-ajax';

            } else {
                $response['method-status'] = 'success-with-http';
            }
        }

        return $response;
    }

}
