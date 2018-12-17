@extends('layouts.pdf')

@section('content')
    @foreach ($invitations as $invitation)
        <p style="page-break-inside: avoid;">
            <span>
                {{ $invitation->personInstitution->person->name ?? 'N/C' }}

                <span style="color: gray; font-size: 0.7em;">
                    ({{ $invitation->code }})
                </span>
            </span>

            <br>

            <div style="color: gray; font-size: 0.7em;">
                {{ $invitation->personInstitution->title ?? 'N/C' }}

                -

                {{ $invitation->personInstitution->role->name ?? 'N/C'}} / {{ $invitation->personInstitution->institution->name ?? 'N/C'}}

                <br>

                {{ $invitation->subEvent->sector->name ?? 'N/C'}}

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
