<?php

namespace App\Handlers\Events;

use App\Events\SendNotificationMail;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNotificationMailHandler
{

    /**
     * Create the event handler.
     *
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param SendContactUsMail|SendActivationMail|SendPasswordResetEmail $event
     */
    public function handle(SendNotificationMail $event)
    {
        \Mail::send('email.notification',
            [
                'name' => $event->name,
                'email' => $event->email,
                'content' => $event->message

            ],
            function ($message) use ($event) {

                $message->to($event->email, $event->name)
                        ->from(env('CONTACT_MAIL_FROM', 'help@ideaing.com'))
                        ->subject("Ideaing - Daily Notification");
            });

    }
}
