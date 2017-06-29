<?php

    namespace App\Events;

    use App\Events\Event;
    use Illuminate\Queue\SerializesModels;
    use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

    class SendActivationMail extends Event {

        use SerializesModels;

        /**
         * Create a new event instance.
         * @param $name
         * @param $email
         * @param $code
         * @internal param $link
         */
        public function __construct($name, $email, $code)
        {
            $this->name  = $name;
            $this->email = $email;
            $this->code  = $code;
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
