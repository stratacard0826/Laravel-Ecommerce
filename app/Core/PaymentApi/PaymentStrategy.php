<?php
/**
 * Created by PhpStorm.
 * User: tanvir
 * Date: 7/2/16
 * Time: 11:52 AM
 */

namespace App\Core\PaymentApi;

use App\Core\PaymentApi\PaymentApiInterface;


class PaymentStrategy
{
    public function createUser($data, PayemntApiIterface $payment = null)
    {
        $paymentEngine = $payment ? $payment : new StripeApi();

        return $paymentEngine->createUser($data);
    }

    public function chargeUser($data, PayemntApiIterface $payment = null)
    {
        $paymentEngine = $payment ? $payment : new StripeApi();

        return $paymentEngine->chargeUser($data);
    }

    public function subscribeUser($data, PayemntApiIterface $payment = null)
    {
        $paymentEngine = $payment ? $payment : new StripeApi();

        return $paymentEngine->subscribeUser($data);
    }

    public function cancelSubscribedUser($data, PayemntApiIterface $payment = null)
    {
        $paymentEngine = $payment ? $payment : new StripeApi();

        return $paymentEngine->cancelSubscribedUser($data);
    }
}