@component('mail::message')
# Convite

{{ $invitation->personInstitution->title }} {{ $invitation->personInstitution->person->name }}, temos o imenso prazer fazer o convite para o Posse do Governador do Estado do Rio de Janeiro 2019.

@component('mail::button', ['url' => route('invitations.accept', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Aceitar
@endcomponent

@component('mail::button', ['url' => route('invitations.reject', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Declinar
@endcomponent

Obrigado,<br>
<br>
{{ $client_full_name }}<br>
Alerj
@endcomponent
