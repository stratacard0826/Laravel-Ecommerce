<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use App\Core\PaymentApi\PaymentStrategy;

class Payment extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'payments';

    protected $fillable = [
        'user_id',
        'transaction_id',
        'bill_title',
        'bill_description',
        'gateway_response',
        'active'
    ];

    protected $hidden = ['gateway_response','created_at', 'updated_at'];

    /**
     * Define Relationship
     */

    /**
     * @return media object
     */

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    // accessor for JSON decode
    public function getGatewayResponseAttribute($value)
    {
        return json_decode($value);
    }

    // Membership Payment

    public function updateUserMembership($data)
    {
        $status = $this->membershipSubscribe($data);

        if ($status['code'] != '200') {
            return $status;
        }

        try {
            UserSetting::where('user_id', $data['UserId'])->update(['membership_type' => $data['MembershipType']]);
        } catch (\Exception $e) {
            return false;
        }

        $result = $this->savePaymentInfo([
            'UserId' => $data['UserId'],
            'Active' => 1,
            'TransactionId' => $status['data']->id,
            'Title' => $data['Title'],
            'Description' => $data['Description'],
            'Response' => json_encode($status['data'])
        ]);

        return ['data' => $result, 'code' => '200'];
    }


    public function membershipSubscribe($data)
    {
        $plan = \Config::get('const.VIP-Membership');

        $payment = new PaymentStrategy();

        // avoid double membership

        $this->cancelMembershipSubscription(
            [
                'UserId' => $data['UserId'],
                'Title'=> $data['Title'],
                'Description'=> 'Cancel Membership',
                'MembershipType'=>''
            ]
        );

        $result = $payment->subscribeUser([
            'UserId' => $data['UserId'],
            'Email' => $data['Email'],
            'Token' => $data['Token'],
            'Plan' => $plan,
            'Description' => 'Membership'

        ]);



        //  dd($result);
        return $result;
    }

    public function cancelMembershipSubscription($data)
    {
        $paymentCollection = Payment::where('user_id', $data['UserId'])
            ->where('bill_title', $data['Title'])
            ->where('active',1);


        if ($paymentCollection->count()) {
            $payment = new PaymentStrategy();

            $id = $paymentCollection->get(['transaction_id'])[0]->transaction_id;

            $status = $payment->cancelSubscribedUser($id);

            if ($status['code'] != '200') {

                return $status;
            }

            try {
                UserSetting::where('user_id', $data['UserId'])->update(['membership_type' => empty($data['MembershipType'])?'':$data['MembershipType']]);

                // update the payment table to make it inactive
                $paymentCollection->update(['active'=>0]);
            } catch (\Exception $e) {
                return false;
            }

            $result = $this->savePaymentInfo([
                'UserId' => $data['UserId'],
                'Active' => 0,
                'TransactionId' => $status['data']->id,
                'Title' => $data['Title'],
                'Description' => $data['Description'],
                'Response' => json_encode($status['data'])
            ]);

            return ['data' => $result, 'code' => '200'];
        }

        return ['data' => 'No subscription information is available.', 'code' => '777'];

    }

    public function buyProduct($data)
    {
        $fees = \Config::get('const.VIP');

        $payment = new PaymentStrategy();

        $result = $payment->chargeUser([
            'UserId' => $data['UserId'],
            'Email' => $data['Email'],
            'Token' => $data['Token'],
            'Amount' => $fees,
            'Description' => 'Membership'

        ]);

        //  dd($result);
        return $result;
    }

    public function savePaymentInfo($data)
    {
        $payment = new Payment();

        $payment->user_id = $data['UserId'];
        $payment->active = empty($data['Active']) ? 0 : 1;
        $payment->transaction_id = $data['TransactionId'];
        $payment->bill_title = $data['Title'];
        $payment->bill_description = $data['Description'];
        $payment->gateway_response = $data['Response'];

        $payment->save();

        return $payment;
    }


    public function checkPaymentStatus($userId)
    {
        $userToken = User::where('id', $userId)->get(['payment_token']);

        return empty($userToken) ? "" : $userToken;

    }

    public function getSubscribedMembershipPaymentInfo($userId = null)
    {
        if($userId == null)
        {
            $result = Payment::with([
                'user' =>function($query){
                    $query->select('id','name','email');
                }
            ])->orderBy('updated_at','DESC')->get();
        }
        else
        {
            $result = Payment::where('user_id',$userId)->get();
        }

        return $result;
    }


}
