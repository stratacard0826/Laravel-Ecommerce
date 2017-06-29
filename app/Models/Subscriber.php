<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'subscribers';

    protected $fillable = ['email', 'status'];

    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Define Relationship
     * /
     *
     * /*
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // Custom functions

    public function isASubscriber($email)
    {
        try {


            $subscriber = Subscriber::where('email', $email)->first();

            if ($subscriber) {
                $subscriber->isUser = User::where('email', $email)->count();
            }

            return $subscriber;

        } catch (\Exception $ex) {
            return false;
        }

    }

    /**
     * @param $userData
     * @return bool
     */
    public function subscribeUser($data)
    {
        $existingEmail = Subscriber::where('email', $data['Email']);

        if (!empty($data['UserFrom']))
            $data['Source'] = $data['UserFrom'];

        if ($existingEmail->count() == 0) {
            $subscriber = new Subscriber();
            $subscriber->email = $data['Email'];
            $subscriber->source = empty($data['Source']) ? '' : $data['Source'];

            $subscriber->status = 'Subscribed';

            $subs = $subscriber->save();

            return $subs;
        } else {
            return $existingEmail->first();
        }
    }

    /**
     * @param $settings
     * @return mixed
     * @internal param $subscriberList
     */
    public function subscribersList($settings)
    {
        $inactiveUsers = $this->inactiveUserEmail();

        $skip = $settings['limit'] * ($settings['page'] - 1);
        $subscriberList['result'] = Subscriber::whereNotIn('email', $inactiveUsers)
                                              ->groupBy('email')
                                              ->take($settings['limit'])
                                              ->offset($skip)
                                              ->orderBy('created_at', 'desc')
                                              ->get();

        $subscriberList['count'] = Subscriber::whereNotIn('email', $inactiveUsers)->get()->count();
        //  dd($subscriberList['count']);
        return $subscriberList;
    }

    public function totalSubscriberBySource($data)
    {

        if (empty($data['Source'])) {
            $query = new Subscriber();
        } else {
            $query = new Subscriber();
            $query = $query->where('source', $data['Source']);
        }

        $subscriberCount = $query->groupBy('email')
                                 ->orderBy('created_at', 'desc')
                                 ->get()
                                 ->count();
        // dd($subscriberList);
        return $subscriberCount;

    }


    public function allSubscribers()
    {

        $inactiveUsers = $this->inactiveUserEmail();

        return Subscriber::whereNotIn('email', $inactiveUsers)
                         ->groupBy('email')
                         ->orderBy('email')
                         ->get(['email']);

        //return $subscriberModel->all(['email']);
    }

    public function allSubscribersDownload()
    {

        // $inactiveUsers = $this->inactiveUserEmail();

        $data = \DB::table('subscribers')
                   ->leftJoin('users', 'subscribers.email', '=', 'users.email')
                   ->groupBy('subscribers.email')
                   ->select('users.name', 'subscribers.email')->get();


        return $data;
        // dd($data);
    }

    /**
     * @param bool $status
     * @return mixed if parameter is false then it will return all an empty array which
     * if parameter is false then it will return all an empty array which
     * will not filter any data where this function will be called.
     */

    private function inactiveUserEmail($status = true)
    {
        if ($status == true)
            $inactiveUsers = User::where('status', 'Inactive')->get(['email']);
        else
            $inactiveUsers = [];
        return $inactiveUsers;
    }


}
