@component('mail::message')
# Credencial para acesso ao evento
{!! $invitation->getViewVariables()['confirmation_text'] !!}

Para acesso ao evento {{$invitation->subEvent->event->name}}, seguem os endereços e as credenciais em anexo para
@foreach($credential as $credentials)
        @if(!$loop->first)
                @if($loop->last)
                        e
                @else
                        ,
                @endIf
        @endIf
        {{$credential->subEvent->name}}
@endforeach

Endereços:
@foreach($credential as $credentials)
        <br>{{$credential->variables['full_address']}},
        <br><a href="{{ $credential->variables['google_maps_link'] }}">Link para o Mapa no Google</a>
@endforeach
<br>
Obrigado,<br>
<br>
{{ $client_full_name }}<br>
Alerj
@endcomponent
