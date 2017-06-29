<?php

    namespace App\Handlers\Events;

    use App\Events\SendWelcomeMail;
    use Illuminate\Queue\InteractsWithQueue;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendWelcomeMailHandler {

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
        public function handle(SendWelcomeMail $event)
        {
            \Mail::send('email.welcome',
                [
                    'name' => $event->name,
                ],
                function ($message) use ($event)
                {
                    $message->to($event->email, $event->name)
                        ->from(env('MAIL_FROM'))
                        ->subject("Ideaing - Welcome to Ideaing");
                });

            // dd($event);
        }
    }
