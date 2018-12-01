@component('mail::message')
{!! $invitation->getViewVariables()['credentials_text'] !!}
@foreach ($credentials as $credential)
<h2 style="text-align: center;">{{$credential->subEvent->name}}</h2>
**Endereço**<br>
{{$credential->variables['endereco_completo']}},<br>
<a href="{{ $credential->variables['google_maps_link_url'] }}">Link para o Mapa no Google</a><br>
<img src="{{ $credential->variables['google_maps_image_url'] }}" alt="mapa">
<br>
@if (!$credential->subEvent->associated_subevent_id)
**Traje: {{$credential->variables['traje_nome']}}** <br>
{{$credential->variables['traje_descricao']}},<br>
@endif
@if (!$loop->last)
<hr>
@endif
@endforeach

<br><br>
<table>
<tr>
<td>
<p>Para solicitar a desconfirmação da sua presença de forma eletrônica, clique no botão abaixo:</p>
@component('mail::button', ['color' => 'error', 'url' => route('invitations.reject', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Desconfirmar presença
@endcomponent
</td>
</tr>
</table>

@include('emails.signature')

@endcomponent
