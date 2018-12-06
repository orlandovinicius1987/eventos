<?php

namespace App\Providers;

use App\Listeners\SendRejection;
use App\Events\ContactWasCreated;
use App\Events\ContactWasUpdated;
use App\Events\InvitationRejected;
use App\Events\InvitationsChanged;
use App\Events\InvitationAccepted;
use App\Listeners\SendCredentials;
use App\Listeners\SendNotification;
use App\Events\InvitationWasCreated;
use Illuminate\Auth\Events\Registered;
use Illuminate\Mail\Events\MessageSending;
use App\Listeners\SendNotificationsToContact;
use App\Listeners\SetMailNotificationMessageInfo;
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

        InvitationsChanged::class => [],

        InvitationAccepted::class => [],

        InvitationRejected::class => [SendRejection::class],

        ContactWasCreated::class => [SendNotificationsToContact::class],

        ContactWasUpdated::class => [SendNotificationsToContact::class],

        InvitationWasCreated::class => [SendNotification::class],

        MessageSending::class => [SetMailNotificationMessageInfo::class],
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
