<?php

namespace App\Events;

class ContactCreated extends Event
{
    public $contact;

    /**
     * Create a new event instance.
     *
     * @param $contact
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }
}
