@component('mail::message')
{!! $invitation->getViewVariables()['confirmation_text'] !!}
@foreach ($credentials as $credential)
<h2 style="text-align: center;">{{$credential->subEvent->name}}</h2>
**Endereço**<br>
{{$credential->variables['endereco_completo']}},<br>
<a href="{{ $credential->variables['google_maps_link_url'] }}">Link para o Mapa no Google</a><br>
<img src="{{ $credential->variables['google_maps_image_url'] }}" alt="mapa">
<br>
@if (!$credential->subEvent->associated_subevent_id)
**Traje**<br>
{{$credential->variables['traje_nome']}}: {{$credential->variables['traje_descricao']}},<br>
@endif
@if (!$loop->last)
<hr>
@endif
@endforeach
Obrigado,<br>
<br>
{{ $client_full_name }}<br>
Alerj
@endcomponent
