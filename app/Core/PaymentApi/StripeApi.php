<?php
/**
 * Created by PhpStorm.
 * User: tanvir
 * Date: 6/26/16
 * Time: 6:31 PM
 */


namespace App\Core\PaymentApi;


use App\Models\Payment;
use App\Models\User;
use Stripe\Customer;
use Stripe\Stripe;


class StripeApi implements PaymentApiInterface
{
    public function __construct()
    {
        Stripe::setApiKey(env('STRIPE_PRIVATE'));
    }

    public function createUser($data)
    {
        //  dd('create user',$data);
        $userPaymentToken = $this->checkUserPaymentStatus($data['UserId']);

        if (empty($userPaymentToken)) {
            try {
                $customer = Customer::create([
                    'description' => $data['Email'],
                    'source' => $data['Token'],
                    'plan' => empty($data['Plan']) ? null : $data['Plan']
                ]);

                User::where('email', $data['Email'])
                    ->update([
                        'payment_token' => $customer->id
                    ]);

                return $customer->id;

            } catch (\Stripe\Error\Card $e) {
                // Since it's a decline, \Stripe\Error\Card will be caught
                $body = $e->getJsonBody();
                $err = $body['error'];
                return ['data' => $body, 'code' => $err['code']];

            } catch (\Stripe\Error\RateLimit $e) {
                // Too many requests made to the API too quickly
                $body = $e->getJsonBody();
                $err = $body['error'];
                return ['data' => $body, 'code' => $err['code']];

            } catch (\Stripe\Error\InvalidRequest $e) {
                // Invalid parameters were supplied to Stripe's API
                $body = $e->getJsonBody();
                $err = $body['error'];
                return ['data' => $body, 'code' => $err['code']];

            } catch (\Stripe\Error\Authentication $e) {
                // Authentication with Stripe's API failed
                $body = $e->getJsonBody();
                $err = $body['error'];
                return ['data' => $body, 'code' => $err['code']];

                // (maybe you changed API keys recently)
            } catch (\Stripe\Error\ApiConnection $e) {
                // Network communication with Stripe failed
                $body = $e->getJsonBody();
                $err = $body['error'];
                return ['data' => $body, 'code' => $err['code']];
            } catch (\Stripe\Error\Base $e) {
                // Display a very generic error to the user, and maybe send

                $body = empty($e->getJsonBody()) ? "" : $e->getJsonBody();
                // $err = $body['error'];
                return ['data' => $body, 'code' => '666'];
                // yourself an email
            } catch (\Exception $e) {

                return ['data' => '', 'code' => '777'];

            }

        } else {

            return $userPaymentToken;

        }

    }

    public function chargeUser($data)
    {
        //   dd('charge user',$data);
        $userToken = $this->createUser($data);

        if (!empty($userToken['code'])) {
            return $userToken;
        }

        try {

            $charge = \Stripe\Charge::create([

                "amount" => $data['Amount'] * 100,
                "currency" => "usd",
                "customer" => $userToken,
                //  "source" => $data['Token'],
                "description" => empty($data['Description']) ? "" : $data['Description']
            ]);

        } catch (\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

        } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

        } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

        } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

            // (maybe you changed API keys recently)
        } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];
        } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send

            $body = empty($e->getJsonBody()) ? "" : $e->getJsonBody();
            // $err = $body['error'];
            return ['data' => $body, 'code' => '666'];
            // yourself an email
        } catch (\Exception $e) {

            return ['data' => '', 'code' => '777'];
        }

        /*
        $payment = new Payment();


        // update user setting table and insert payment information

        $paymentUtilData = [
            'UserId' => $data['UserId'],
            'TransactionId' => $charge->id,
            'Title' => $data['Title'],
            'Description' => $data['Description'],
            'Response' => json_decode($charge)
        ];

        if($payment->updateUserMembership($paymentUtilData) == false)
        {
            return ['data' => 'User info update failed !', 'code' => '500'];
        }
*/
        return ['data' => $charge, 'code' => '200'];

    }

    public function checkUserPaymentStatus($data)
    {
        $user = new User();

        $user = $user->getUserById($data);

        return empty($user->payment_token) ? false : $user->payment_token;
    }

    public function subscribeUser($data)
    {

        //   dd('charge user',$data);
        $userToken = $this->createUser($data);

        if (!empty($userToken['code'])) {
            return $userToken;
        }

        try {

            $subscribe = \Stripe\Subscription::create([

                "customer" => $userToken,
                "plan" => $data['Plan']
            ]);

        } catch (\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

        } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => empty($err['code'])?'756':$err['code']];

        } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API

            $body = $e->getJsonBody();
            $err = $body['error'];
          //  dd($body);
            return ['data' => $body, 'code' => empty($err['code'])?'755':$err['code']];

        } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];

            // (maybe you changed API keys recently)
        } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
            $body = $e->getJsonBody();
            $err = $body['error'];
            return ['data' => $body, 'code' => $err['code']];
        } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send

            $body = empty($e->getJsonBody()) ? "" : $e->getJsonBody();
            // $err = $body['error'];
            return ['data' => $body, 'code' => '666'];
            // yourself an email
        } catch (\Exception $e) {

            return ['data' => '', 'code' => '777'];
        }

        return ['data' => $subscribe, 'code' => '200'];
    }

    public function cancelSubscribedUser($data)
    {
        try {

            $subscribe = \Stripe\Subscription::retrieve($data);

            $subscribe->cancel();

            return ['data' => $subscribe, 'code' => '200'];

        }catch(\Exception $e)
        {
            return ['data' => '', 'code' => '777'];
        }
    }
}