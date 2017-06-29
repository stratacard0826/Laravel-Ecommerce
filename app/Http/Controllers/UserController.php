<?php

namespace App\Http\Controllers;

use App\Events\SendSubscriptionMail;
use App\Events\SendContactUsMail;

use App\Models\Comment;
use App\Models\Subscriber;
use App\Models\User;
use App\Models\Role;
use App\Models\Media;
use App\Models\Contact;

use App\Http\Requests;

use Illuminate\Database\Eloquent\Collection;
//use Illuminate\Support\Collection;
use Illuminate\Http\Response as IlluminateResponse;
use JWTAuth;

use Carbon\Carbon;
use MetaTag;

class UserController extends ApiController
{

    public function __construct()
    {

        $this->subscriber = new Subscriber();
        $this->user = new User();
        $this->roleModel = new Role();
        $this->media = new Media();
        $this->comment = new Comment();
        // $this->contact = new Contact();

        //check user authentication and get user basic information
        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));

    }

    /*
     * Return user list as per given settings in pagging order
     * */

    public function userList()
    {

        try {
            $userData = \Input::all();

            $settings['limit'] = $userData['limit'];
            $settings['page'] = $userData['page'];
            $settings['FilterItem'] = isset($userData['FilterItem']) ? $userData['FilterItem'] : '';
            $settings['FilterValue'] = isset($userData['FilterValue']) ? $userData['FilterValue'] : '';
            //    $settings['']

            $userList = $this->user->getUserList($settings);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse(array_merge($userList, $settings));
        } catch (Excpetion $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }

    /*
     * Return email list of subscriber as per given settings in pagging order
     * */

    public function subscriberList()
    {

        try {
            $emailData = \Input::all();

            $settings['limit'] = $emailData['limit'];
            $settings['page'] = $emailData['page'];

            $emailList = $this->user->getSubscriberList($settings);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse(array_merge($emailList, $settings));
        } catch (Excpetion $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }


    // used in Admin. Get user information by id with user role
    public function getUserById($id)
    {

        try {

            $totalRoleCollection = $this->roleModel->get(array('id', 'name', 'display_name'));

            $user = $this->user->where('id', '=', $id)->first();

            $userRoles = $this->user->getUserRolesByEmail($user->email);

            $roleCollection = array();

            foreach ($userRoles as $role) {
                array_push($roleCollection, $role['name']);
            }

            $user['Roles'] = $roleCollection;
            $user['RoleCollection'] = $totalRoleCollection;

            //$userList = $this->user->getUserList($settings);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($user);
        } catch (Excpetion $ex) {
            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $ex);
        }

    }

    public function getWpUsers()
    {
        $data = $this->user->syncWpAdmin();
        dd($data);
    }

    // send user info and admin role status
    public function getUserByEmail()
    {
        $email = base64_decode(\Input::get('_wptk'));

        $userInfo['user-data'] = $this->user->IsEmailAvailable($email);
        $userInfo['user-data']['login'] = true;
        $isAdmin = $userInfo['user-data']->hasRole('admin');
        $userInfo['user-data'] = $userInfo['user-data']->toArray();

        $result = base64_encode(serialize(['data' => $userInfo, 'IsAdmin' => $isAdmin]));

        // Decode process from WP end , check returning $decode
        // $result = unserialize(base64_decode($result));
        return $result;
    }

    public function getUserByEmailRaw($email)
    {
        $data = $this->user->IsEmailAvailable($email);
        return $data == false ? "false" : $data;

        // return serialize(['data' => $data]);
    }

    // Email subscription
    /**
     * @return mixed
     */
    public function emailSubscription()
    {

        $userData = \Input::all();
        $validationRules = [

            'rules' => [
                'Email' => isset($userData['Email']) ? 'required | email' : '',
            ],
            'values' => [
                'Email' => isset($userData['Email']) ? $userData['Email'] : null,
            ]
        ];

        list($userData, $validator) = $this->inputValidation($userData, $validationRules);

        if ($validator->fails()) {
            // return with the failed reason and field's information
            return $this->setStatusCode(IlluminateResponse::HTTP_NOT_ACCEPTABLE)
                        ->makeResponseWithError("Invalid Input Data :" . $validator->messages());
        }

        $subs = $this->subscriber->isASubscriber($userData['Email']);

        if ($subs != null) {
            return $this->setStatusCode(\Config::get("const.api-status.success-with-variation"))
                        ->makeResponse($subs);
        } else {
            $subs = $this->subscriber->subscribeUser($userData);
            \Event::fire(new SendSubscriptionMail(
                $userData['Email']
            ));

            // set cookie to hide popup
            $this->setCookie('hide-signup', 'true', 9999999);

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($subs);
        }

    }

    public function userProfile($permalink = "")
    {
        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];

            $data = array(
                'userData' => $userData,
                'userProfileData' => $userData,
                'activity' => $this->comment->getCommentsAndHeatByUserId($userData['id'], 10),
                'profile' => ($userData->medias[0]->media_link == '') ? \Config::get("const.user-image") : $userData->medias[0]->media_link,
                'userPermalink' => $userData->permalink,
                'fullname' => $userData->name,
                'address' => $userData->userProfile->address,
                'personalInfo' => $userData->userProfile->personal_info,
                 'permalink' => $permalink,
                'permalink' => empty($permalink) ? $userData['permalink'] : $permalink,
                'isAdmin' => $userData->hasRole('admin') || $userData->hasRole('editor'),
                'showEditOption' => true

            );

            MetaTag::set('title', 'Ideaing | My profile');

            return view('user.user-profile', $data);

        } elseif ($this->authCheck['method-status'] == 'fail-with-http') {
            return \Redirect::to('login');
        }
    }


    //show public profile as per given permalink

    public function viewPublicProfile($permalink)
    {

        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        $userProfileData = $this->user->checkUserByPermalink($permalink);

        $userProfileData = $userProfileData != false ? $userProfileData : $userData;

        $data = array(
            'userData' => empty($userData) ? null : $userData,
            'userProfileData' => $userProfileData,
            'activity' => $this->comment->getCommentsAndHeatByUserId($userProfileData['id'], 10),
            'profile' => ($userProfileData->medias[0]->media_link == '') ? \Config::get("const.user-image") : $userProfileData->medias[0]->media_link,
            'fullname' => $userProfileData->name,
            'address' => $userProfileData->userProfile->address,
            'personalInfo' => $userProfileData->userProfile->personal_info,
            //'permalink' => $permalink,
            'permalink' => empty($permalink) ? $userData['permalink'] : $permalink,
            'isAdmin' => empty($userData) ? null : ($userData->hasRole('admin') || $userData->hasRole('editor')),
            'showEditOption' => false,
            'notificationPanel' => false

        );

        MetaTag::set('title', $userProfileData->name . ' | Ideaing');

        // dd($data);
        return view('user.user-profile', $data);
    }

    public function modalTest(){
        return view('user.parts.edit-modal');
    }

    public function viewPublicProfileNotice()
    {

        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        } else {
            return \Redirect::to('login');
        }

        //$userProfileData = $this->user->checkUserByPermalink($permalink);

        $userProfileData = $userData;

        $this->user->notificationMarkReadAll($userData['id']);

        $data = array(
            'userData' => empty($userData) ? null : $userData,
            'userProfileData' => $userProfileData,
             'activity' => $this->comment->getCommentsAndHeatByUserId($userProfileData['id'], 10),
            'profile' => ($userProfileData->medias[0]->media_link == '') ? \Config::get("const.user-image") : $userProfileData->medias[0]->media_link,
            'fullname' => $userProfileData->name,
            'address' => $userProfileData->userProfile->address,
            'personalInfo' => $userProfileData->userProfile->personal_info,
            //'permalink' => $permalink,
            'permalink' => empty($permalink) ? $userData['permalink'] : $permalink,
            'isAdmin' => empty($userData) ? null : ($userData->hasRole('admin') || $userData->hasRole('editor')),
            'showEditOption' => false,
            'notification' => true,
            'contents'=> $this->user->getNotificationForUser($userData->id)['NoticeNotRead']
        );

        MetaTag::set('title', $userProfileData->name . ' | Ideaing');

        // dd($data);
        return view('user.user-profile', $data);
    }

    public function userPostView($permalink)
    {
        // $this->getStoriesByAuthor(0,'Nicole');

        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];
        }

        $userProfileData = $this->user->checkUserByPermalink($permalink);

        $userProfileData = $userProfileData != false ? $userProfileData : $userData;

        $data = array(
            'userData' => empty($userData) ? null : $userData,
            'userProfileData' => $userProfileData,
            'activity' => $this->comment->getCommentsAndHeatByUserId($userProfileData['id'], 10),
            'profile' => ($userProfileData->medias[0]->media_link == '') ? \Config::get("const.user-image") : $userProfileData->medias[0]->media_link,
            'fullname' => $userProfileData->name,
            'address' => $userProfileData->userProfile->address,
            'personalInfo' => $userProfileData->userProfile->personal_info,
            'permalink' => $permalink,
            'isAdmin' => empty($userData) ? null : ($userData->hasRole('admin') || $userData->hasRole('editor')),
            'showEditOption' => false,
            'showProfilePosts' => true,
            'notificationPanel' => false

        );

        MetaTag::set('title', $userProfileData->name . ' | Ideaing');

        // dd($data);
        return view('user.user-profile', $data);
    }

    public function test()
    {
        $this->getStoriesByAuthor(0, 'Nicole');
    }

    public function getStoriesByAuthor()
    {
        $inputData = \Input::all();


        $data = $this->user->ideasAuthorPost($inputData);

        //dd($data);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($data);
    }

    public function getOrdersByAuthor()
    {
        $inputData = \Input::all();

        $data = $this->user->getMyOrders($inputData);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($data);
    }

    public function hideSignup()
    {
        $this->setCookie('hide-signup', 'true', 1440);
        return json_encode(['success' => 'Hidden successfully!']);

    }

    // Fetch notification for current user
    public function notification($uid, $limit = null)
    {
//            $this->user->userNotification();
        $data = $this->user->getNotificationForUser($uid, $limit);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($data);

    }

    // Mark all notice as read
    public function notificationReadAll($uid)
    {
        $result = $this->user->notificationMarkReadAll($uid);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    // Mark single notice as read
    public function singleNotificationRead()
    {
        $inputData = \Input::all();
        //dd($inputData);
        $result = $this->user->markNotificationAsRead($inputData);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    // Contact us

    public function postContactUsInfo()
    {
        $inputData = \Input::all();
        $validationRules = [

            'rules' => [
                'Email' => isset($inputData['Email']) ? 'required | email' : '',
                //  'g-recaptcha-response' => 'required|recaptcha',
            ],
            'values' => [
                'Email' => isset($inputData['Email']) ? $inputData['Email'] : null,
            ]
        ];

        list($inputData, $validator) = $this->inputValidation($inputData, $validationRules);

        if ($validator->fails()) {

            // return with the failed reason and field's information

            return $this->setStatusCode(IlluminateResponse::HTTP_NOT_ACCEPTABLE)
                        ->makeResponseWithError("Please provide valid email" . $validator->messages());
        }

        \Event::fire(new SendContactUsMail(
            $inputData['Name'],
            $inputData['Email'],
            $inputData['Type'],
            $inputData['Message']

        ));

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse('Request successfully submitted.');
    }

    // Track User Activity

    public function getUserActivity()
    {
        $inputData = \Input::all();

        $activityCount = $inputData['ActivityCount'];

        $userId = User::where('permalink', $inputData['UserId'])
                      ->first()->id;

        // gather comment activities


        $activityWithHumanTime = $this->comment->getCommentsAndHeatByUserId($userId, $activityCount);

        //  dd($userId,$activityCount,$activityWithHumanTime);


        //return $activityWithHumanTime;

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($activityWithHumanTime);

    }

    // download the list of subscribed user
    public function downloadSubscribersList()
    {

        $userList = $this->subscriber->allSubscribersDownload();

        $csv = \League\Csv\Writer::createFromFileObject(new \SplTempFileObject());

        $csv->insertOne(['name', 'email']);

        $filename = 'subscribers.csv';

        foreach ($userList as $item) {
            $item = [0=> $item->name, 1=> $item->email];
            //dd($item'name']);
            $csv->insertOne($item);
        }

        $csv->output($filename);


    }

    public function downloadRegisteredUserList()
    {
        $list = $this->user->all(['name', 'email'])->toArray();//User::all()->toArray();


        $filename = 'registered-user.csv';
        list($headers, $callback) = $this->writeToFile($filename, $list);

        //    dd($callback);
        return response()->stream($callback, 200, $headers);

    }

    private function getSubscribersCountBySource($data)
    {
        $result = $this->subscriber->totalSubscriberBySource($data);

        return $result;
    }

    private function getRegisteredUserCountBySource($data)
    {
        $result = $this->user->registerBySourceCount($data);

        return $result;
    }

    // Fetch all subscriber and registered users data for admin to show the different types of count.
    public function getSubscribedUserAndRegistrationReport()
    {
        $result['subscribe-popup'] = $this->getSubscribersCountBySource(['Source' => 'popup']);
        $result['subscribe-popup-notice'] = $this->getSubscribersCountBySource(['Source' => 'popup-notice']);
        $result['subscribe-ideas'] = $this->getSubscribersCountBySource(['Source' => 'ideas']);
        $result['subscribe-footer'] = $this->getSubscribersCountBySource(['Source' => 'footer']);
        $result['subscribe-home'] = $this->getSubscribersCountBySource(['Source' => 'home']);
        $result['subscribe-giveaway'] = $this->getSubscribersCountBySource(['Source' => 'giveaway']);
        $result['subscribe-total'] = $this->getSubscribersCountBySource(['Source' => '']);

        $result['register-direct'] = $this->getRegisteredUserCountBySource(['Source' => 'registration']);
        $result['register-facebook'] = $this->getRegisteredUserCountBySource(['Source' => 'facebook']);
        $result['register-giveaway'] = $this->getRegisteredUserCountBySource(['Source' => 'giveaway']);
        $result['register-others'] = $this->getRegisteredUserCountBySource(['Source' => 'others']);
        $result['register-total'] = $this->getRegisteredUserCountBySource(['Source' => '']);


        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);
    }

    public function getUserProfileSettingsById($userId)
    {
        $result = $this->user->getUserProfileSettings($userId);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    public function setDailyEmail()
    {
        $inputData = \Input::all();
        $result = $this->user->setDailyEmail($inputData['UserId'], $inputData['Status']);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    public function sendActivityMailToUsers()
    {
        $data = $this->user->sendActivityMail();

        // dd($data);

        //  return view('email.notification')
        //    ->with('content',$data);
    }

    /**
     * @param $filename
     * @param $list
     * @return array
     */
    public function writeToFile($filename, $list)
    {
        $headers = [
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Content-type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename=' . $filename,
            'Expires' => '0',
            'Pragma' => 'public',
        ];


        # add headers for each column in the CSV download
        array_unshift($list, array_keys($list[0]));

        $callback = function () use ($list) {
            $FH = fopen('php://output', 'w');
            foreach ($list as $row) {
                fputcsv($FH, $row);
            }
            fclose($FH);
        };
        return array($headers, $callback);
    }

}
