<?php

    namespace App\Handlers\Events;

    use App\Events\SendAdminNotificationEmail;
    use Illuminate\Queue\InteractsWithQueue;
    use Illuminate\Contracts\Queue\ShouldQueue;

    class SendAdminNotificationEmailHandler {

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
         * @param  SendResetEmail $event
         * @return void
         */
        public function handle(SendAdminNotificationEmail $event)
        {
            $userId = explode("@",$event->email)[0];
            \Mail::send('email.admin-notification',
                [
                    'link' => $event->link,
                    'testdata' => 'dafa'
                ],
                function ($message) use ($event,$userId)
                {
                    $message->to($event->email, $userId)
                        ->from(env('MAIL_FROM'))
                        ->subject("Ideaing - User comments");
                });
        }
    }
