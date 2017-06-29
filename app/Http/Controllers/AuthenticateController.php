<?php

namespace App\Http\Controllers;

use App\Events\SendActivationMail;
use App\Events\SendResetEmail;
use App\Events\SendWelcomeMail;

use App\Models\Subscriber;
use App\Models\WpUser;
use Crypt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
//use Laravel\Socialite\Contracts\Factory as Socialite;
use App\Http\Requests;
use Illuminate\Http\Response as IlluminateResponse;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Models\User;
use Carbon\Carbon;

use CustomAppException;
use Illuminate\Contracts\Hashing\Hasher;
use Cookie;

class AuthenticateController extends ApiController
{

    public function __construct()
    {
        $this->user = new User();
        $this->subscriber = new Subscriber();

    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(new \Exception());
        try {
            $this->user->throwExc();
        } catch (CustomAppException $ex) {
            return $ex;
        }

        // $currentTime = \Carbon::now();

        $userData['Email'] = 'tanvir@carbon51.com';

        // $validTill = \Carbon::now()->addHours(env('PASSWORD_RESET_TTL_HOUR'));

        $data = [
            'Email' => $userData['Email'],
            'TTL' => Carbon::now()->addHours(env('PASSWORD_RESET_TTL_HOUR'))
        ];

        $code = Crypt::encrypt($data);
        $dcode = Crypt::decrypt($code);
        dd($code, $dcode);

        // \Log::error('inside index');
        return "inside non secure area";
    }

    public function passwordResetForm($code)
    {
        return view('user.password-reset')->with('code', $code);
    }

    public function securePage()
    {
        // echo "inside secure page !";
        // $user = JWTAuth::parseToken()->authenticate();

        //  dd($user);

        // return "inside secure area";
        $newToken = JWTAuth::parseToken()->refresh();

        return $this->setStatusCode("200")
                    ->setAuthToken($newToken)
                    ->makeResponse(session('auth.token'));
    }

    public function logOut()
    {
        // reset the token
        $this->setCookie('hide-signup', '', 1440);
        $this->setCookie('auth-token', null);

        // expire email in cookie for WP use.
        // setcookie('_wptk','',time() - (86400 * 14));
        setcookie('_wptk', null, -1, '/');

        // get token form input or session
        $tokenValue = session('auth.token');

        if ($tokenValue == null) {
            $tokenValue = \Input::get('token');
        }

        //$tokenValue = \Input::all();
        $message = "";

        // if a authenticated user request for logout then Token will be rest and session will set to null
        try {
            if (isset($tokenValue['token']))
                JWTAuth::parseToken()->refresh();
        } catch (\Exception $ex) {
            $message = "Invalid token provided";
        }
        session(['auth.token' => null]);

        if (\Input::ajax()) {
            return $this->setStatusCode(IlluminateResponse::HTTP_OK)
                        ->makeResponse('successfully LogOut.' . $message);
        } else {
            return back();
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->only('Email', 'Password');

        if ($faled = filter_var($credentials['Email'], FILTER_VALIDATE_EMAIL) === false) {
            return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                        ->makeResponseWithError('Please enter a valid email');
        }

        try {

            $authUser = $this->isValidUser($credentials);

            if (isset($authUser['error'])) {

                if ($this->subscriber->isASubscriber($credentials['Email']) == false) {
                    return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                                ->makeResponseWithError($authUser['error']);
                } else {
                    return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                                ->makeResponseWithError($authUser['error']);
                }

            } else {
                $token = JWTAuth::fromUser($authUser);
            }


        } catch (JWTException $ex) {
            // something went wrong
            \Log::error($ex);

            return $this->setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR)
                        ->makeResponseWithError('Token creation failed!');

        }

        // Check if the user is email verified or not
        try {
            $user = $this->user->IsEmailAvailable($credentials['Email'])->first();
            if ($user->status != 'Active') {
                return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                            ->makeResponseWithError('User status not active.');
            }
        } catch (\Exception $ex) {
            return $this->setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR)
                        ->makeResponseWithError('Internal Server Error!' . $ex);

        }

        // if no errors are encountered jwt token returned

        $rolesCollection = $user->getUserRolesByEmail($credentials['Email']);

        $roles = array();
        foreach ($rolesCollection as $role) {
            array_push($roles, $role['name']);
        }

        $response['message'] = "Successfully authenticated";
        $response['roles'] = $roles;

        if ($request['RememberMe'] == true) {
            $this->setCookie('auth-token', $token);
        }

        return $this->setStatusCode(\Config::get("const.api-status.success-redirect"))
                    ->setAuthToken($token)
                    ->makeResponse($response);
    }


    public function giveawayFbCheck(Request $request)
    {
        //dd($request);

        //  session(['page.source' => 'giveaway']);

        $this->fbLogin($request);

    }

    /**
     * @param Request $request
     * @return mixed
     * @throws \Exception
     *//**/
    public function fbLogin(Request $request)
    {

        $isGiveaway = $request->has('vlu');
        if (!empty($isGiveaway) && $request['vlu'] == 'giveaway') {
            $link = 'giveaway/' . $request['pl'];
            session(['page.source.giveaway' => $link]);

            $source = 'giveaway';
        }


        $hasCode = $request->has('code');

        // check if the user is authenticated or not.
        if (!$hasCode)
            return \Socialite::driver('facebook')->redirect();
        else
            $fbUser = \Socialite::driver('facebook')->user();

        /*
        If a user is authenticated then check whether the user is
        registered in our system or not.
        */

        $userInfo = $this->user->FindOrCreateUser($fbUser,$source = null);

        // send welcome mail to new user
        if (!empty($userInfo['NewUser']) && ($userInfo['NewUser'] == true)) {
            \Event::fire(new SendWelcomeMail
            (
                $userInfo['name'],
                $userInfo['email']
            ));
        }

        /*
        Set authentication code and pass JSON data in API response.
        */
        $token = JWTAuth::fromUser($userInfo);
        session(['auth.token' => isset($token) ? $token : null]);

        if (isset($token)) {
            $this->setCookie('auth-token', $token);
        }

        if (!empty(session('page.source.giveaway'))) {
            return redirect(session('page.source.giveaway'));
            //return redirect()->action('PageController@giveaway');
        } else
            return redirect()->action('UserController@userProfile');

    }


    /** register a user through name,email and password
     * @return mixed
     */
    public function registerUser()
    {
        try {
            /*
            Validate user input first before processing data.
            */

            $inputData = \Input::all();

            $validationRules = [

                'rules' => [
                    'FullName' => 'required | max: 25',
                    'Email' => 'required | email',
                    'Password' => 'required | min: 6 '
                ],
                'values' => [
                    'FullName' => isset($inputData['FullName']) ? $inputData['FullName'] : null,
                    'Email' => isset($inputData['Email']) ? $inputData['Email'] : null,
                    'Password' => isset($inputData['Password']) ? $inputData['Password'] : null
                ]
            ];

            // Validate through global validator in api-controller
            list($userData, $validator) = $this->inputValidation($inputData, $validationRules);

            if ($validator->fails()) {
                // return with the failed reason and field's information
                return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                            ->makeResponseWithError(array('Validation failed', $validator->messages()));
            } elseif ($validator->passes()) {
                if ($this->user->IsEmailAvailable($userData['Email']) == false) {

                    /*
                     * After successfully register the user data send JSON response if email is available.
                     * */

                    $userData['UserFrom'] = empty($inputData['Source']) ? null : $inputData['Source'];

                    if ($this->user->SaveUserInformation($userData)) {
                        // Assign role for the user
                        $this->user->assignRole($userData['Email'], array('user'));

                        // Email subscription.

                        $this->subscriber->subscribeUser($userData);

                        // for a subscribed user need not to confirm email for the second time.
                        if (isset($inputData['Valid']) && $inputData['Valid'] == true) {
                            $this->user = $this->user->IsEmailAvailable($userData['Email']);
                            $this->user->status = 'Active';
                            $this->user->save();

                            // send welcome mail to new user

                            \Event::fire(new SendWelcomeMail
                            (
                                $userData['FullName'],
                                $userData['Email']
                            ));

                            return $this->setStatusCode(IlluminateResponse::HTTP_OK)
                                        ->makeResponse('Registration completed successfully');
                        } else {
                            // On successful user registration an email will be send through Event to verify email id.
                            \Event::fire(new SendActivationMail(
                                $userData['FullName'],
                                $userData['Email'],
                                Crypt::encrypt($userData['Email'])
                            ));


                            return $this->setStatusCode(\Config::get("const.api-status.success"))
                                        ->makeResponse('Registration completed successfully, please  verify your email');
                        }
                    }
                } else {
                    return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                                ->makeResponseWithError('This email already exists, please login');
                }
            }
        } catch (\Exception $ex) {
//              dd($ex);
            \Log::error($ex);

            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError('Internal Server Error!', $ex);
        }

    }

    public function changeProfile()
    {
        try {

            $input = \Input::all();//array('FullName');
            $userRoles = \Input::get('UserRoles');

            unset($input['UserRoles']);
            $userData = $input;//\Input::all();

//            print_r($input); die();


            // $user = $this->isEmailValidate(JWTAuth::parseToken()->authenticate()->email);
            $user = $this->isEmailValidate($userData['Email']);

            $validationRules = [

                'rules' => [
                    'FullName' => (isset($userData['FullName']) && ($userData['FullName'] != "")) ? 'required | max: 25' : '',

                    'Password' => (isset($userData['Password']) && ($userData['Password'] != "")) ? 'required | min: 6 ' : '',
                    'RecoveryEmail' => (isset($userData['RecoveryEmail']) && ($userData['RecoveryEmail'] != "")) ? 'email' : '',
                ],
                'values' => [
                    'FullName' => (isset($userData['FullName']) && ($userData['FullName'] != "")) ? $userData['FullName'] : null,
                    'Password' => (isset($userData['Password']) && ($userData['Password'] != "")) ? $userData['Password'] : null,
                    'RecoveryEmail' => (isset($userData['RecoveryEmail']) && ($userData['RecoveryEmail'] != "")) ? $userData['RecoveryEmail'] : null
                ]
            ];

            list($userData, $validator) = $this->inputValidation($userData, $validationRules);

            if ($validator->fails()) {
                // return with the failed reason and field's information
                return $this->setStatusCode(\Config::get("const.api-status.validation-fail"))
                            ->makeResponseWithError("Invalid Input Data :" . $validator->messages());
            } elseif ($validator->passes()) {
                // Assign role for the user

                if (isset($userRoles) && ($userRoles != "")) {
                    $this->user->assignRole($userData['Email'], $userRoles);
                }

                // Add a user as blog user from admin panel
                //



                if (isset($userData['IsBlogUser'])) {
                    $user->is_blog_user = $userData['IsBlogUser'] == 'true' ? 'true' : '';
                }

                if (isset($userData['FullName']) && ($userData['FullName'] != "")) {
                    $user->name = $userData['FullName'];
                }
                if (isset($userData['LastName']) && ($userData['LastName'] != "")) {
                    $user->last_name = $userData['LastName'];
                }
                if (isset($userData['RecoveryEmail']) && ($userData['RecoveryEmail'] != "")) {
                    $user->recovery_email = $userData['RecoveryEmail'];
                }


                if (isset($userData['Password']) && ($userData['Password'] != "")) {
                    //  $user->password = \Hash::make($userData['Password']);
                    $user->password = hash('md5', $userData['Password']);
                }

                if (isset($userData['UserStatus']) && ($userData['UserStatus'] != "")) {
                    $user->status = $input['UserStatus'];
                }

                if (isset($userData['FacebookLink']) && ($userData['FacebookLink'] != "")) {
                    $user->userProfile()->update(['facebook_link' => $input['FacebookLink']]);
                }
                if (isset($userData['TwitterLink']) && ($userData['TwitterLink'] != "")) {
                    $user->userProfile()->update(['twitter_link' => $input['TwitterLink']]);
                }

                if (isset($userData['PersonalInfo']) && ($userData['PersonalInfo'] != "")) {
                    $user->userProfile()->update(['personal_info' => $input['PersonalInfo']]);
                }
                if (isset($userData['Address']) && ($userData['Address'] != "")) {
                    $user->userProfile()->update(['address' => $input['Address']]);
                }
                if (isset($userData['City']) && ($userData['City'] != "")) {
                    $user->userProfile()->update(['city' => $input['City']]);
                }
                if (isset($userData['Apartment']) && ($userData['Apartment'] != "")) {
                    $user->userProfile()->update(['apartment' => $input['Apartment']]);
                }
                if (isset($userData['Street']) && ($userData['Street'] != "")) {
                    $user->userProfile()->update(['street' => $input['Street']]);
                }
                if (isset($userData['Country']) && ($userData['Country'] != "")) {
                    $user->userProfile()->update(['country' => $input['Country']]);
                }
                if (isset($userData['State']) && ($userData['State'] != "")) {
                    $user->userProfile()->update(['state' => $input['State']]);
                }
                if (isset($userData['Zip']) && ($userData['Zip'] != "")) {
                    $user->userProfile()->update(['zip' => $input['Zip']]);
                }

                if (isset($userData['Permalink']) && ($userData['Permalink'] != "")) {
                    // $user->userProfile()->update(['permalink' => $input['Permalink']]);
                    // $user->permalink = $input['Permalink'];

                    $user->permalink = $this->user->generatePermalink(['Permalink' => $input['Permalink'], 'Email' => $userData['Email']]);
                }

                if (isset($userData['MediaLink']) && ($userData['MediaLink'] != "")) {
                    /*$this->media->media_name = $userData['name'];
                    $this->media->media_type = 'img-upload';
                    $this->media->media_link = $userData['MediaLink'];

                    $result = $user->medias()->update($this->media);*/

                    $user->medias()->update([
                        'media_name' => $userData['FullName'],

                        'media_link' => $input['MediaLink'],
                    ]);
                }


                $user->save();

                // Sync wp user if profile is eligible
                if ($user->is_blog_user == "true") {
                    $this->user->syncWpAdmin($user->id);
                } else {
                    $this->user->syncWpAdmin($user->id, false);
                }

                return $this->setStatusCode(\Config::get("const.api-status.success"))
                            ->makeResponse('Successfully profile information changed');

            }
        } catch (\Exception $ex) {
            \Log::error($ex);

            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError('Internal Server Error!', $ex);
        }

        //  dd($user);

        // return "inside secure area";
    }


    /**
     * Verify a user from the email
     * @param $code
     * @return string
     */
    public function verifyEmail($code)
    {
        try {
            $email = \Crypt::decrypt(trim($code));

            $user = $this->user->IsEmailAvailable($email);

            if ($user != null) {
                $user->status = "Active";
                $user->save();


                // send welcome mail to new user

                \Event::fire(new SendWelcomeMail
                (
                    $user['name'],
                    $user['email']
                ));


                return redirect('user/profile'); //->withFlashMessage('Email verification complete.');

                // $message = "Thanks " . $user->name . " for verify your email";

                // return Redirect::to('login')->withFlashMessage('Email verification complete.');

            } else {
                $message = "verification Failed";
            }
        } catch (\Exception $ex) {
            \Log::error($ex);
            $message = "Verification Failed !!";
        }

        return $message;

    }

    /** Send password rest request mail for a valid registered user.
     * @param $email
     * @return mixed
     */
    public function sendPasswordResetEmail($email)
    {

        // Check for valid email, if email found the "user" object returned
        $isValidation = $this->isEmailValidate($email);

        if (!$isValidation) {
            return $this->setStatusCode(\Config::get("const.api-status.success-with-variation"))
                        ->makeResponse("User not available with " . $email);

        } else {
            // make encrypted code with email and TTL time set in .env file,which will expire after the TTL
            $data = [
                'Email' => $email,
                'TTL' => \Carbon::now()->addHours(env('PASSWORD_RESET_TTL_HOUR'))
            ];

            $link = Crypt::encrypt($data);

            \Event::fire(new SendResetEmail($isValidation->name, $email, $link));

            return $this->setStatusCode(IlluminateResponse::HTTP_OK)
                        ->makeResponse('Password reset link sent.');
        }

    }

    /**
     * Reset password from user provided data and valid token
     */
    public function passwordReset()
    {
        try {
            $info = \Input::all();

            $userData = Crypt::decrypt($info['Code']);

            // making datetime object from provided token
            $validTill = Carbon::create(
                $userData['TTL']->year,
                $userData['TTL']->month,
                $userData['TTL']->day,
                $userData['TTL']->hour,
                $userData['TTL']->minute,
                $userData['TTL']->second
            );

            $currentTime = Carbon::now();

            // check if the toke valid time is expired or not
            $isExpiredToken = $validTill->diffInHours($currentTime) > 0 ? false : true;
            if ($isExpiredToken) {
                return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                            ->makeResponseWithError('Token time expired,please reset password again!');
            }

            // getting the user object to change password and make the user active from valid email
            $user = $this->isEmailValidate($userData['Email']);

            if (!$user) {
                return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                            ->makeResponseWithError('No such user with provided email');
            } else {
                //$user->password = \Hash::make($info['Password']);
                $user->password = hash('md5', $info['Password']);

                $user->status = "Active";
                $user->save();

                return $this->setStatusCode(IlluminateResponse::HTTP_OK)
                            ->makeResponse("Successfully password reset");
            }

        } catch (\Exception $ex) {
            return $this->setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED)
                        ->makeResponseWithError('Invalid Token!');
        }


    }

    public function authCheckApi()
    {
        //check user authentication and get user basic information
        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));

        return $this->setStatusCode(IlluminateResponse::HTTP_OK)
                    ->makeResponse($this->authCheck);

    }


    /**
     * return valid user object as per provided credentials or else return false
     * @param $userData
     * @return bool
     * @throws \Exception
     */
    private function isValidUser($userData)
    {
        $email = isset($userData['Email']) ? $userData['Email'] : null;
        $password = isset($userData['Password']) ? $userData['Password'] : null;

        if (is_null($email)) {
            return ['error' => 'Please enter email'];
        } elseif (is_null($password)) {
            return ['error' => 'Please enter password'];
        } else {
            return $this->user->IsAuthorizedUser($userData);
        }
    }

    /**  Check valid email id, if found return the user object or return false
     * @param $email
     * @return \Illuminate\Validation\Validator
     */
    private function isEmailValidate($email)
    {
        $validationRules = [

            'rules' => [
                'Email' => 'required | email'
            ],
            'values' => [
                'Email' => isset($email) ? $email : null
            ]
        ];

        $validator = \Validator::make($validationRules['values'], $validationRules['rules']);

        if ($validator->passes()) {
            $user = $this->user->IsEmailAvailable($email);
            if ($user != false) {
                return $user;
            } else
                return false;
        }

        return false;
    }

}
