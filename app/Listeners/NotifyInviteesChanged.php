<?php

namespace App\Listeners;

use App\Events\InviteesChanged;

class NotifyInviteesChanged
{
    /**
     * Handle the event.
     *
     * @return void
     */
    public function handle()
    {
        event(new InviteesChanged());
    }
}
