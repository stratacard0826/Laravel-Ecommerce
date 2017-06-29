<?php

namespace App\Models;

use App\Events\SendNotificationMail;
use Fenos\Notifynder\Builder\NotifynderBuilder;
use Fenos\Notifynder\Facades\Notifynder;
use Illuminate\Database\Eloquent\Model;
//use App\Models\UserProfile;
use App\Models\Media;
use App\Models\WpUser;
use App\Models\Notification;
use App\Models\Subscriber;
use App\Models\UserSetting;
use App\Models\Comment as appComment;


use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Support\Collection;
use Mockery\CountValidator\Exception;
use PhpParser\Comment as pharComment;
use Zizaco\Entrust\Traits\EntrustUserTrait;
use Fenos\Notifynder\Notifable;
use Carbon\Carbon;
use PageHelper;
use URL;

//use CustomAppException;


class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract
{


    use Notifable, Authenticatable, Authorizable, CanResetPassword,
        EntrustUserTrait {
        EntrustUserTrait::can insteadof Authorizable;
    }

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'last_name', 'email', 'recovery_email','facebook_link','twitter_link', 'password', 'status', 'street', 'apartment', 'city', 'country', 'state', 'zip',];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token', 'created_at', 'updated_at'];


    /**
     * Define Relationship
     * /
     *
     * /*
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function userProfile()
    {
        return $this->hasOne('App\Models\UserProfile');
    }

    public function userSetting()
    {
        return $this->hasOne('App\Models\UserSetting');
    }

    public function subscriber()
    {
        return $this->hasOne('App\Models\Subscriber');

    }

    public function medias()
    {
        return $this->morphMany('App\Models\Media', 'mediable');
    }

    public function productQueries()
    {
        return $this->hasMany('App\Models\ProductQuery');
    }

    public function payments()
    {
        return $this->hasMany('App\Models\Payment');
    }

    /**
     * Defile custom model method
     */

    public function getUserList($settings)
    {
        $userModel = $this;

        $filterText = $settings['FilterValue'];

        if ($settings['FilterItem'] == 'user-name-filter') {
            $userModel = $userModel->where("name", "like", "%$filterText%");
        }
        if ($settings['FilterItem'] == 'user-email-filter') {
            $userModel = $userModel->where("email", "like", "%$filterText%");
        }


        $skip = $settings['limit'] * ($settings['page'] - 1);
        $userList['result'] = $userModel
            ->with('userProfile')
            ->with('medias')
            ->take($settings['limit'])
            ->offset($skip)
            ->orderBy('created_at', 'desc')
            ->get();

        $userList['count'] = $userModel->get()->count();
        return $userList;
    }

    public function getSubscriberList($settings)
    {
        $subs = new Subscriber();
        return $subs->subscribersList($settings);

    }


    /**
     * Save user information
     * @param $data
     * @return bool
     * @throws \Exception
     */
    public function SaveUserInformation($data)
    {
        try {
            \DB::transaction(function () use ($data) {
                $user = new User();

                $user->name = $data['FullName'];
                $user->email = $data['Email'];
                $user->permalink = $this->generatePermalink($data);
                //$user->password = \Hash::make($data['Password']);
                $user->password = hash('md5', $data['Password']);
                $user->save();

                $userProfile = new UserProfile();

                if (!empty($data['UserFrom']))
                    $userProfile->user_from = $data['UserFrom'];
                else
                    $userProfile->user_from = "registration";

                $media = new Media();

                // $userProfile->full_name = $data['FullName'];
                // $userProfile->save();


                $media->media_name = $data['FullName'];
                $media->media_type = 'img-link';
                $media->media_link = (!empty($data['Picture'])) ? $data['Picture'] : \Config::get("const.user-image");

                // $result = $store->medias()->save($this->media);

                $user->userProfile()->save($userProfile);
                $user->medias()->save($media);

            });
        } catch (\Exception $ex) {
            \Log::error($ex);
            throw new \Exception($ex);
        }
        return true;
    }

    // Generate permalink for empty permalink or return given permalink
    public function generatePermalink($data)
    {
        if (empty($data['Permalink'])) {
            $charList = ['@', '.', '_', '-', ' '];
            $tmpPermalink = str_replace($charList, '-', $data['FullName']);

            while ($this->checkPermalink($tmpPermalink) != false) {
                $tmpPermalink = $tmpPermalink . '-' . random_int(0, 99);
            }

        } else {
            $tmpPermalink = $data['Permalink'];

            $charList = ['@', '.', '_', '-', ' '];
            $tmpPermalink = str_replace($charList, '-', $tmpPermalink);

            while ($this->checkPermalink($tmpPermalink) != false) {
                $tmpPermalink = $tmpPermalink . '-' . random_int(0, 99);
            }
        }

        return $tmpPermalink;
    }

    public function checkPermalink($permalink)
    {
        try {
            return User::where('permalink', $permalink)
                       ->firstOrFail();

        } catch (\Exception $ex) {
            return false;
        }

    }

    public function addContactUsInfo($data)
    {
        try {
            \DB::transaction(function () use ($data) {

                $contact = new appComment();
                $contact->type = $data['Type'];
                $contact->email = $data['Email'];
                $contact->name = $data['Name'];
                $contact->message = $data['Message'];

                $data = $contact->save();

                return $data;
            });

        } catch (\Exception $ex) {
            \Log::error($ex);
        }
    }

    public function IsEmailAvailable($email)
    {
        try {
            return User::with('userProfile')
                       ->with('medias')
                       ->where('email', $email)
                       ->firstOrFail();

        } catch (\Exception $ex) {
            return false;
        }
    }

    public function getUserById($id)
    {
        try {
            return User::with('userProfile')
                       ->with('medias')
                       ->where('id', $id)
                       ->firstOrFail();

        } catch (\Exception $ex) {
            return false;
        }
    }

    //todo need to implement permalink check feature

    public function checkUserByPermalink($permalink)
    {

        try {
            return User::with('userProfile')
                       ->with('medias')
                       ->where('permalink', $permalink)
                       ->firstOrFail();

        } catch (\Exception $ex) {
            return false;
        }
    }

    // assign role(s) to the user
    public function assignRole($email, $roles)
    {
        $user = $this->IsEmailAvailable($email);

        if ($user->roles()->count() > 0) {
            $user->detachRoles($user->roles);
        }

        foreach ($roles as $role) {
            $role = Role::where('name', '=', $role)->first();
            $user->attachRole($role);
        }
    }

    // get all assigned role of a user
    public function getUserRolesByEmail($email)
    {
        $user = $this->IsEmailAvailable($email);

        return $user->roles;
    }

    public function FindOrCreateUser($userData, $source = null)
    {
        try {
            $user = $this->IsEmailAvailable($userData->email);

            if ($user == false) {

                $user['FullName'] = $userData->name;
                $user['Email'] = $userData->email;
                $user['Password'] = env('FB_DEFAULT_PASSWORD');

                // Remove FB's attached width parameter from the image link
                //$user['Picture'] = explode("?", $userData->avatar_original)[0];

                $user['Picture'] = $userData->avatar_original;

                $user['UserFrom'] = empty($source) ? 'facebook' : $source;

                $this->SaveUserInformation($user);

                $user = $this->IsEmailAvailable($userData->email);

                $user->status = 'Active';
                $user->save();


                // Assign role for the user
                $this->assignRole($userData->email, array('user'));

                $subscriber = new Subscriber();

                // subscribes a user if not already subscribed
                if ($subscriber->isASubscriber($userData->email) == false) {
                    $subscriber->email = $userData->email;
                    $subscriber->status = 'Subscribed';

                    $subscriber->save();
                }

                // set true if the user is a new user.
                $user['NewUser'] = true;

                return $user;

            } else {
                return $user;
            }
        } catch (\Exception $ex) {
            \Log::error($ex);
            throw new \Exception($ex);
        }

    }

// Sync system user with blog (wordpress) user
    public function syncWpAdmin($id = 65, $makeUserActive = true)
    {
        $systemUser = $this->getUserById($id);

        $name = explode(" ", $systemUser['name']);
        $firstName = $name[0];
        $lastName = !empty($name[1]) ? $name[1] : '';

        $wpUser = new WpUser();

        $wpUserInfo = $wpUser->where('user_email', $systemUser['email'])->get();

        if (empty($wpUserInfo->count())) {
            $wpUser->user_login = $systemUser['email'];
            $wpUser->user_pass = $makeUserActive == true ? $systemUser['password'] : 'NO ACCESS';
            // $wpUser->user_nicename = $firstName;//$systemUser->personal_info->;
            $wpUser->user_nicename = $systemUser['permalink'];
            $wpUser->user_registered = $systemUser['created_at'];
            $wpUser->user_status = 0;//$systemUser['email'];
            $wpUser->display_name = $systemUser['name'];
            $wpUser->user_email = $systemUser['email'];

            $wpUser->save();

            // set wp-meta table info

            $data = [
                'firstName' => $firstName,
                'lastName' => $lastName,
                'id' => $wpUser->id
            ];

            $this->wpUserMetaAdd($data);

            // update the main user table info

            $this->updateUserStatusForWpUser($makeUserActive, $systemUser);
        } else {

            WpUser::where('user_login', $wpUserInfo[0]['user_login'])
                  ->update([
                      'user_login' => $systemUser['email'],
                      'user_pass' => $makeUserActive == true ? $systemUser['password'] : 'NO ACCESS',

                      //    'user_nicename' => $firstName,
                      'user_nicename' => $systemUser['permalink'],
                      'user_registered' => $systemUser['created_at'],
                      'user_status' => 0,//$systemUser['email'];
                      'display_name' => $systemUser['name'],
                      'user_email' => $systemUser['email']
                  ]);

            $data = [
                'firstName' => $firstName,
                'lastName' => $lastName,
                'id' => $wpUserInfo[0]['ID']
            ];

            // delete previous meta info and insert with the new info
            $wpUserMeta = \DB::connection('wpdb');//->table('usermeta');
            $wpUserMeta->delete('delete from wp_usermeta where user_id=' . $wpUserInfo[0]['ID']);

            $this->wpUserMetaAdd($data);

            // update the main user table info
            $this->updateUserStatusForWpUser($makeUserActive, $systemUser);


        }
    }

    /**
     * @param $data
     */
    private function wpUserMetaAdd($data)
    {
        $metaHead = [
            'nickname', 'first_name', 'last_name', 'description', 'rich_editing', 'comment_shortcuts', 'admin_color', 'use_ssl', 'show_admin_bar_front',
            'wp_capabilities', 'wp_user_level', 'wp_user_avatar', 'dismissed_wp_pointers', 'default_password_nag', 'session_tokens', 'wp_dashboard_quick_press_last_post_id'
        ];
        $metaInfo = [
            $data['firstName'], $data['firstName'], $data['lastName'], '', 'true', 'false', 'fresh', 0, 'true', 'a:1:{s:6:"editor";b:1;}', '7',
            '', '', '', 'a:1:{s:64:"165c21c817a63200b4e63661dcd00ca58ec0b5a5af81cd84f4f61657dcceb10f";a:4:{s:10:"expiration";i:1456954939;s:2:"ip";s:14:"67.164.191.103";s:2:"ua";s:121:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36";s:5:"login";i:1456782139;}}',
            '2147'
        ];

        $wpUserMeta = \DB::connection('wpdb');

        for ($i = 0; $i < count($metaHead); $i++) {
            $wpUserMeta->insert("insert into wp_usermeta (user_id,meta_key,meta_value) values (?,?,?)", array($data['id'], $metaHead[$i], $metaInfo[$i]));
        }
    }

    /**
     * @param $makeUserActive
     * @param $systemUser
     */
    private function updateUserStatusForWpUser($makeUserActive, $systemUser)
    {
        $systemUser = User::find($systemUser['id']);
        $systemUser->is_blog_user = $makeUserActive == true ? 'true' : '';
        $systemUser->save();
    }

    public function IsAuthorizedUser($userData)
    {
        try {
            $user = User::where('email', $userData['Email'])->first();

            if (!$user) {
                return ['error' => 'This user email doesn\'t exist, please sign up'];
            }

            //  return \Hash::check($userData['Password'], $user->password) ? $user : false;

            $password = hash('md5', $userData['Password']);

            return ($password == $user->password) ? $user : ['error' => 'Incorrect password'];;

        } catch (\Exception $ex) {
            return ['error' => $ex];
        }
    }

    // Broadcast notification for new event.
    public function sendNotificationToUsers($info)
    {
        $PostTime = $info['PostTime'];

        $ItemTitle = $info['ItemTitle'];
        $Section = $info['Section'];

        if (count($info['Users']) != 0) {
            Notifynder::loop($info['Users'], function (NotifynderBuilder $builder, $user) use ($info, $PostTime, $ItemTitle, $Section) {

                $builder->category($info['Category'])
                        ->from($info['SenderId'])
                        ->to($user)
                        ->url($info['Permalink'])
                        ->extra(compact('PostTime', 'ItemTitle', 'Section'));

            })->send();

        }
    }

    // Notifications mark as read for a user
    public function notificationMarkReadAll($userId)
    {
        $user = User::find($userId);

        return $user->readAllNotifications();

    }

    // Single Notification mark as read for a single user
    public function markNotificationAsRead($data)
    {
        $notifications = Notification::where('to_id', $data['UserId'])
                                     ->where('read', 0)
                                     ->where('url', 'LIKE', '%' . $data['Permalink'] . '%')
                                     ->get();


        foreach ($notifications as $notification) {
            $notification->read = 1;
            $notification->save();
        }

        return $notifications;

    }


    // Wrapper for all type of notification (future implementation)
    public function getNotificationForUser($userId, $limit = 10)
    {

        $user = User::find($userId);

        $notification['NotReadNoticeCount'] = $user->countNotificationsNotRead();

        //  $notifications = $user->getNotificationsNotRead();

        $notifications = \Notifynder::getAll($userId, $limit);


        $noticeCollection = $this->notificationBuilder($notifications);

        $notification['NoticeNotRead'] = $noticeCollection;

        return $notification;
    }

    /** Build  user's information as per given notification data
     * to show a complete viewable data collection.
     *
     * @param $notifications
     * @return Collection
     * @internal param $data
     */
    private function notificationBuilder($notifications)
    {
        $userInfo = new User();

        // $product = new Product();

        $noticeCollection = new Collection();

        foreach ($notifications as $notice) {

            $userInfo = $userInfo->getUserById($notice['from_id']);

            $extraInfo = json_decode($notice['extra']);

            $data['UserId'] = $userInfo['id'];
            $data['UserName'] = $userInfo['name'];
            $data['UserPicture'] = $userInfo->medias[0]->media_link;
            $data['ItemTitle'] = $extraInfo->ItemTitle;
            $data['ItemLink'] = $notice['url'];
            $data['NoticeRead'] = $notice['read'];

            $data['Section'] = $extraInfo->Section;

            $data['ActualDateTime'] = $extraInfo->PostTime;
            $data['Time'] = Carbon::createFromTimestamp(strtotime($extraInfo->PostTime))->diffForHumans();


            $noticeCollection->push($data);
        }
        return $noticeCollection;
    }


    public function registerBySourceCount($data)
    {
        if (empty($data['Source'])) {
            $query = new UserProfile();
        } elseif ($data['Source'] == 'others') {
            $query = new UserProfile();
            $query = $query->whereNotIn('user_from', ['registration', 'facebook','giveaway']);
        } else {
            $query = new UserProfile();
            $query = $query->where('user_from', $data['Source']);
        }

        $result = $query->get()->count();

        return $result;
    }


    public function ideasAuthorPost($data)
    {
        $offset = 0;
        $permalink = $data['Permalink'];
        $limit = $data['PostCount'];


        $url = \URL::to('/') . '/ideas/feeds/index.php?count=' . $limit . '&offset=' . $offset . '&author_name=' . $permalink;
       //  $url = 'https://ideaing.com' . '/ideas/feeds/index.php?count=' . $limit . '&offset=' . $offset . '&author_name=' . $permalink;

       // dd($url);
        $json = \PageHelper::getFromCurl($url);
        $decode = json_decode($json);

        $ideaCollection = $decode->posts;

        $ideaCollection = empty($ideaCollection) ? [] : $ideaCollection;


        $ideaCollection = collect($ideaCollection);
        $ideas = new Collection();
        $comment = new appComment();
        $heart = new Heart();


        // dd($ideaCollection);

        foreach ($ideaCollection as $item) {

            if(empty($item->id))
                continue;

            $tmpCollection = collect([
                'id' => $item->id,
                'title' => $item->title,
                'content' => $item->content,
                'category' => $item->category,
                'category_all' => $item->category_all,
                'is_deal' => $item->is_deal,
                'url' => $item->url,
                'raw_creation_date' => $item->raw_creation_date,
                'creation_date' => $item->creation_date,
                'updated_at' => $item->updated_at,
                'image' => $item->image,
                'author' => $data['AuthorName'],
                'author_id' => $item->author_id,
                'authorlink' => $item->authorlink,
                'avator' => $data['AuthorPicture'],
                'type' => $item->type,
                'is_featured' => $item->is_featured,
                'feed_image' => $item->feed_image->sizes->thumbnail,
                'comment_count' => $comment->ideasCommentCounter($item->id),
                'heart_count' => $heart->findHeartCountForItem(['Section' => 'ideas', 'ItemId' => $item->id])->count()
            ]);

            $ideas->push($tmpCollection);

        }
        return $ideas;
    }

    public function getMyOrders()
    {
        $orderCollection = new Collection();

        $purchasesUrl = URL::to('/') . '/ideas/wp-admin/admin-ajax.php?action=account_orders';

        $data =  PageHelper::getArrayFromCurl($purchasesUrl);

        foreach ($data['data'] as $item) {
            $tmpCollection = new Collection();

//             print_r($item); die();

            $tmpCollection['Id'] = $item['order'];
            $tmpCollection['Link'] = $item['actions']['view']['url'];
            $tmpCollection['UpdateTime'] = $item['date'];
//            $tmpCollection['ProductCount'] = $item['qty'];
            $tmpCollection['Status'] = $item['status'];
            $tmpCollection['Total'] = strip_tags($item['total']);

//            print_r($tmpCollection); die();

            $orderCollection->push($tmpCollection);

        }

        return $orderCollection;
    }

    public function getUserProfileSettings($userId)
    {
        return UserSetting::where('user_id', $userId)->first();

    }

    public function setDailyEmail($userId, $status)
    {
        $settings = new UserSetting();
        $settings = $settings->where('user_id', $userId)->first();
        //dd($settings);
        $settings->email_notification = $status;
        $settings->save();

        return $settings;

    }

    public function sendActivityMail()
    {
        $settings = new UserSetting();

        $userCollection = User::all(['id', 'email', 'name']);

        //  dd($userCollection);

        //$activities = collect();

        foreach ($userCollection as $user) {
            //  dd($user['id']);

            $setting = $settings->checkUserProfile(['UserId' => $user['id']]);

            if (!empty($setting['email_notification'])) {

                $data = $this->getNotificationForUser($user['id'])['NotReadNoticeCount'];//['NoticeNotRead'];

                $name = explode(" ", $user['name'])[0];

                // Email count is "0" then no notification will be send.
                if ($data != 0) {
                    //  dd($name, $user['email'], $data);
                    \Event::fire(new SendNotificationMail($name, $user['email'], $data));
                }

            }
            //  return $data;
        }
    }


}

