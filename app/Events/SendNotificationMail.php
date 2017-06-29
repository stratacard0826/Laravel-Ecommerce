<?php

    namespace App\Events;

    use App\Events\Event;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

    class SendNotificationMail extends Event {

        use SerializesModels;

        /**
         * Create a new event instance.
         * @param $name
         * @param $email
         * @param $type
         * @param $message
         * @internal param $code
         * @internal param $link
         */
        public function __construct($name, $email,$message)
        {
            $this->name  = $name;
            $this->email = $email;
            $this->message = $message;

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
