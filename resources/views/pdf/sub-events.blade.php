@extends('layouts.pdf')

@section('content')
    @foreach ($invitations as $invitation)
        <p style="page-break-inside: avoid;">
            <span>
                {{ $invitation->personInstitution->person->name }}
            </span>

            <br>

            <div style="color: gray; font-size: 0.7em;">
                {{ $invitation->personInstitution->title }}

                -

                {{ $invitation->personInstitution->role->name }} / {{ $invitation->personInstitution->institution->name }}

                <br>

                {{ $invitation->subEvent->sector->name }}

                -

                @if ($invitation->sent_at)
                    enviado -
                @else
                    não enviado -
                @endif

                @if ($invitation->received_at)
                    recebido -
                @endif

                @if ($invitation->accepted_at)
                    aceito -
                @endif

                @if ($invitation->declined_at)
                    declinado -
                @endif

                @if ($invitation->credentials_received_at)
                    credenciais recebidas -
                @endif
            </div>
        </p>

        <br>
    @endforeach
@stop
