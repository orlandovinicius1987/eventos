@component('mail::message')
    # Novo E-mail Adicionado e Ativado

    Prezado, identificamos que você foi convidado para o evento abaixo:
    Evento: {{$invitation->subEvent->event->name}}
    Sub-Evento: {{$invitation->subEvent->name}}

    Porém, seu convite foi enviado para um outro e-mail cadastrado no sistema.
    Entre em contato com equipe do Cerimonial da Alerj.

    Obrigado,
    {{ $client_full_name }}
    Alerj
@endcomponent
