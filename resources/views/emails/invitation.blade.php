@component('mail::message')
# Convite

{{ $invitation->personInstitution->title }} {{ $invitation->personInstitution->person->name }}, temos o imenso prazer fazer o convite para o Posse do Governador do Estado do Rio de Janeiro 2019.

@component('mail::button', ['url' => ''])
Aceitar
@endcomponent

@component('mail::button', ['url' => ''])
Declinar
@endcomponent

Obrigado,<br>
<br>
Cerimonial - Alerj
@endcomponent
