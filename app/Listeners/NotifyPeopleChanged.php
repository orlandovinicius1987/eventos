<?php

namespace App\Listeners;

use App\Events\PeopleChanged;

class NotifyPeopleChanged extends Listener
{
    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle()
    {
        event(new PeopleChanged());
    }
}
