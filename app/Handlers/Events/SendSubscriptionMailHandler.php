<?php

    namespace App\Handlers\Events;

    use App\Events\SendSubscriptionMail;
    use Illuminate\Queue\InteractsWithQueue;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendSubscriptionMailHandler {

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
         * @param SendSubscriptionMail|SendResetEmail $event
         */
        public function handle(SendSubscriptionMail $event)
        {
            $userId = explode("@",$event->email)[0];
            \Mail::send('email.subscription',
                [
                    'email' => $event->email
                ],
                function ($message) use ($event,$userId)
                {
                    $message->to($event->email, $userId)
                        ->from('help@ideaing.com', 'Nicole from Ideaing')
                        ->subject('Welcome to Ideaing Exclusive Email');
                });
        }
    }
