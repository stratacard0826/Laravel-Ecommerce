<?php

    namespace App\Handlers\Events;

    use App\Events\SendContactUsMail;
    use Illuminate\Queue\InteractsWithQueue;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendContactUsMailHandler {

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
        public function handle(SendContactUsMail $event)
        {
            \Mail::send('email.contact-us',
                [
                   'name' => $event->name,
                    'email' => $event->email,
                    'type' => $event->type,
                    'content' => $event->message

                ],
                function ($message) use ($event)
                {

                    $message->to(env('CONTACT_MAIL_TO'), $event->name)
                        ->from(env('CONTACT_MAIL_FROM','help@ideaing.com'))
                        ->subject("Ideaing - Contact Us (". $event->type .")-   From - ".$event->name);
                });

        }
    }
