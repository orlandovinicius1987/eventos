@component('mail::message')
# Credencial para acesso ao evento

{{ $invitation->personInstitution->title }} {{ $invitation->personInstitution->person->name }}, segue a sua credencial para acesso ao evento Posse do Governador do Estado do Rio de Janeiro 2019.

Obrigado,<br>
<br>
{{ $client_full_name }}<br>
Alerj
@endcomponent
