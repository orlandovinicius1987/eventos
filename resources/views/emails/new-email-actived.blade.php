@component('mail::message')
    # Novo E-mail Adicionado e Ativado

    Prezado, identificamos que você foi convidado para o evento abaixo:
    Evento: {{$invitation->subEvent->event->name}}
    Sub-Evento: {{$invitation->subEvent->name}}

    Porém, seu convite foi enviado anteriormente para um outro e-mail cadastrado no sistema.
    Em breve enviaremos o Convite ou a sua Credencial para este novo e-mail.

    Obrigado,
    {{ $client_full_name }}
    Alerj
@endcomponent
