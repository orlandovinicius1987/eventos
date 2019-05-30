<?php
namespace App\Providers;

use App\Events\ContactCreated;
use App\Events\ContactUpdated;
use App\Events\InvitationUpdated;
use App\Events\NotificationSent;
use App\Events\InviteeCheckedIn;
use App\Listeners\SendRejection;
use App\Events\InvitationCreated;
use App\Events\InvitationRejected;
use App\Events\InvitationsChanged;
use App\Events\InvitationAccepted;
use App\Listeners\SendNotification;
use App\Listeners\SendThankYouToInvitee;
use App\Listeners\NotifyPeopleChanged;
use App\Listeners\NotifyInviteesChanged;
use Illuminate\Auth\Events\Registered;
use App\Listeners\NotifySubEventsChanged;
use Illuminate\Mail\Events\MessageSending;
use App\Listeners\NotifyInvitationsChanged;
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
        InvitationsChanged::class => [NotifySubEventsChanged::class],
        InvitationAccepted::class => [NotifySubEventsChanged::class],
        InvitationRejected::class => [SendRejection::class],
        ContactCreated::class => [SendNotificationsToContact::class],
        ContactUpdated::class => [SendNotificationsToContact::class],
        MessageSending::class => [SetMailNotificationMessageInfo::class],
        InvitationUpdated::class => [
            NotifyInvitationsChanged::class,
            NotifySubEventsChanged::class,
        ],
        InvitationCreated::class => [SendNotification::class],
        PersonUpdated::class => [NotifyPeopleChanged::class],
        NotificationSent::class => [NotifySubEventsChanged::class],
        InviteeCheckedIn::class => [
            NotifyInviteesChanged::class,
            SendThankYouToInvitee::class,
        ],
    ];
}
