@component('mail::message')
    # Confirmação de CANCELAMENTO do convite

    Evento: {{$invitation->subEvent->event->name}}
    Sub-Evento: {{$invitation->subEvent->name}}

    Nós sentimos muito pelo seu Cancelamento.

    Obrigado,
    {{ $client_full_name }}
    Alerj
@endcomponent
