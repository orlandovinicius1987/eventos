<?php

namespace App\Events;

class NotificationSent extends Event
{
    public $notification;

    /**
     * Create a new event instance.
     *
     * @param $notification
     */
    public function __construct($notification)
    {
        $this->notification = $notification;
    }
}
