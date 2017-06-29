<?php

    namespace App\Handlers\Events;

    use App\Events\SendActivationMail;
    use Illuminate\Queue\InteractsWithQueue;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendActivationMailHandler {

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
         * @param SendActivationMail|SendPasswordResetEmail $event
         */
        public function handle(SendActivationMail $event)
        {
            \Mail::send('email.verification',
                [
                    'name' => $event->name,
                    'link' => $event->code
                ],
                function ($message) use ($event)
                {
                    $message->to($event->email, $event->name)
                        ->from(env('MAIL_FROM'))
                        ->subject("Ideaing - Email Verification.");
                });

            // dd($event);
        }
    }
