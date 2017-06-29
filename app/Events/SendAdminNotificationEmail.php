<?php

    namespace App\Events;

    use App\Events\Event;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

    class SendAdminNotificationEmail extends Event {

        use SerializesModels;

        /**
         * Create a new event instance.
         * @param $name
         * @param $email
         * @param $link
         */
        public function __construct($permalink,$email)
        {
            $this->email = $email;
            $this->link  = $permalink;
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
