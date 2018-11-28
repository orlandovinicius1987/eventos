<?php

namespace App\Providers;

use App\Events\InvitationRejected;
use App\Events\InvitationsChanged;
use App\Events\InvitationAccepted;
use App\Events\NewEmailActived;
use App\Listeners\SendAllInvitations;
use App\Listeners\SendCredential;
use App\Listeners\SendNewEmailActived;
use App\Listeners\SendRejection;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [SendEmailVerificationNotification::class],

        InvitationsChanged::class => [SendAllInvitations::class],

        InvitationAccepted::class => [SendCredential::class],

        InvitationRejected::class => [SendRejection::class],

        NewEmailActived::class => [SendNewEmailActived::class],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
