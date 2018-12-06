<?php

namespace App\Providers;

use App\Listeners\SendRejection;
use App\Events\ContactCreated;
use App\Events\ContactUpdated;
use App\Events\InvitationRejected;
use App\Events\InvitationsChanged;
use App\Events\InvitationAccepted;
use App\Listeners\SendCredentials;
use App\Listeners\SendNotification;
use App\Events\InvitationCreated;
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

        ContactCreated::class => [SendNotificationsToContact::class],

        ContactUpdated::class => [SendNotificationsToContact::class],

        InvitationCreated::class => [SendNotification::class],

        MessageSending::class => [SetMailNotificationMessageInfo::class],
    ];
}
