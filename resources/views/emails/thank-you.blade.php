@component('mail::message')
{!! $invitation->getViewVariables()['thank_you_text'] !!}<img src="{{ route('notifications.received', [$notification->uuid, 'images|dummy.png']) }}" alt="">

@include('emails.signature')

@endcomponent
