@component('mail::message')
{!! $invitation->getViewVariables()['rejection_text'] !!}<img src="{{ route('notifications.received', [$notification->uuid, 'images|dummy.png']) }}" alt="">

@include('emails.signature')

@endcomponent
