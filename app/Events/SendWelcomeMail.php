<?php

    namespace App\Events;

    use App\Events\Event;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

    class SendWelcomeMail extends Event {

        use SerializesModels;

        /**
         * Create a new event instance.
         * @param $name
         * @param $email
         * @param $code
         * @internal param $link
         */
        public function __construct($name, $email)
        {
            $this->name  = $name;
            $this->email = $email;
        }

        /**
         * Get the channels the event should be broadcast on.
         *
         * @return array
         */
        public function broadcastOn()
        {
            return [];
        }
    }
