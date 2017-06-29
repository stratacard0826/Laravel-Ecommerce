<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\UserSetting;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;


class PaymentController extends ApiController
{
    /**
     * Display a listing of the resource.
     *
     */

    public function __construct()
    {
        //check user authentication and get user basic information

        $this->authCheck = $this->RequestAuthentication(array('admin', 'editor', 'user'));

        $this->payment = new Payment();
        $this->userSettings = new UserSetting();

        $this->clearTemporarySessionData();
    }

    public function index($param = 'membership')
    {

        if ($this->authCheck['method-status'] == 'success-with-http') {
            $userData = $this->authCheck['user-data'];

            $invoiceData = \Config::get('const.VIP');

            // filtering input

            switch ($param) {
                case 'membership':
                    $paymentType = 'membership';
                    break;
                case 'payment':
                    $paymentType = 'payment';
                    break;
                default:
                    $paymentType = 'membership';
            }

            $payment = New Payment();

            $clientToken = $payment->checkPaymentStatus($userData['id']);

            return view('payment.payment-info')
                ->with('userData', $userData)
                ->with('invoiceData', $invoiceData)
                ->with('paymentType', $paymentType)
                ->with('clientToken', empty($clientToken[0]['payment_token']) ? 0 : 1);

        } else {

            MetaTag::set('title', 'Log In | Ideaing');

            return view('user.signup')->with('tab', 'login');

        }
    }

    public function paymentProcess()
    {
        $inputData = \Input::all();

        if ($inputData['payment-type'] == 'membership') {
            $amount = \Config::get('const.VIP');
        }

        if (!empty($amount)) {
            $userData = $this->authCheck['user-data'];

            $result = $this->payment->updateUserMembership([
                'UserId' => $userData['id'],
                'Email' => $userData['email'],
                'Plan' => 'TEST',
                'Token' => $inputData['stripeToken'],
                'MembershipType' => 'VIP',
                'Title' => 'Membership Payment',
                'Description' => 'No Description'
            ]);

            if ($result['code'] != 200) {
                \Session::flash('payment-error-message', 'Transaction Failed !');

                $this->index('membership');
            } else {
                \Session::flash('payment-error-message', 'Subscription successfully completed !');

                return view('payment.payment-success')->with('userData', $userData);
            }
        }

    }

    public function cancelMembership()
    {
        $userData = $this->authCheck['user-data'];

        $result = $this->payment->cancelMembershipSubscription([
            'UserId' => $userData['id'],
            'Email' => $userData['email'],
            'Plan' => 'TEST',

            'MembershipType' => '',
            'Title' => 'Membership Payment',
            'Description' => 'Cancel Membership'
        ]);

        if ($result['code'] != 200) {
            \Session::flash('payment-error-message', 'Transaction Failed !');

            $this->index('membership');

            return $this->setStatusCode(\Config::get("const.api-status.system-fail"))
                        ->makeResponseWithError("System Failure !", $result['code']);
        }

        if ($result['code'] == 200) {
            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse('');
        } else {
            return $this->setStatusCode(\Config::get("const.api-status.membership-cancellation-fail"))
                        ->makeResponse('');
        }

    }

    public function checkMembership()
    {
        try {
            $userData = $this->authCheck['user-data'];

            $data = $this->userSettings->checkUserProfile(['UserId' => $userData['id']]);

            $result = empty($data['membership_type']) ? '' : $data['membership_type'];

            return $this->setStatusCode(\Config::get("const.api-status.success"))
                        ->makeResponse($result);

        } catch (\Exception $e) {
            return $this->setStatusCode(\Config::get("const.api-status.app-failure"))
                        ->makeResponse($e);
        }


    }

    public function subscribedMembershipPaymentInfo($userId = null)
    {
        $result = $this->payment->getSubscribedMembershipPaymentInfo($userId);

        return $this->setStatusCode(\Config::get("const.api-status.success"))
                    ->makeResponse($result);

    }

    private function clearTemporarySessionData()
    {
        if (!empty(session('page.source.giveaway'))) {
            session(['page.source.giveaway' => null]);
        }
    }

}
