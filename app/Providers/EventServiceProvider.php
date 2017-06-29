<?php

    namespace App\Providers;

    use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
    use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
    use App\Events\SendActivationMail;
    use App\Handlers\Events\SendActivationMailHandler;
    use App\Events\SendResetEmail;
    use App\Handlers\Events\SendResetEmailHandler;
    use App\Events\SendSubscriptionMail;
    use App\Handlers\Events\SendSubscriptionMailHandler;
    use App\Events\SendWelcomeMail;
    use App\Handlers\Events\SendWelcomeMailHandler;
    use App\Events\SendContactUsMail;
    use App\Handlers\Events\SendContactUsMailHandler;
    use App\Events\SendNotificationMail;
    use App\Handlers\Events\SendNotificationMailHandler;

    use App\Events\SendAdminNotificationEmail;
    use App\Handlers\Events\SendAdminNotificationEmailHandler;


    class EventServiceProvider extends ServiceProvider {

        /**
         * The event listener mappings for the application.
         *
         * @var array
         */
        protected $listen = [
            'App\Events\SomeEvent'    => [
                'App\Listeners\EventListener',
            ],
            SendActivationMail::class => [
                SendActivationMailHandler::class
            ],
            SendResetEmail::class     => [
                SendResetEmailHandler::class
            ],

            SendSubscriptionMail::class => [
                SendSubscriptionMailHandler::class
            ],

            SendWelcomeMail::class => [
                SendWelcomeMailHandler::class
            ],

            SendContactUsMail::class => [
                SendContactUsMailHandler::class
            ],

            SendNotificationMail::class => [
                SendNotificationMailHandler::class
            ],

            SendAdminNotificationEmail::class => [
                SendAdminNotificationEmailHandler::class
            ],
        ];

        /**
         * Register any other events for your application.
         *
         * @param  \Illuminate\Contracts\Events\Dispatcher $events
         * @return void
         */
        public function boot(DispatcherContract $events)
        {
            parent::boot($events);

            //
        }
    }
