@extends('layouts.pdf')

@section('content')
    @php
        $currentInstitutionId = null
    @endphp

    @foreach ($invitations as $invitation)
        @if ($currentInstitutionId != $invitation->personInstitution->institution->id)
            @php
                $currentInstitutionId = $invitation->personInstitution->institution->id
            @endphp

            <h5>
                {{ $invitation->personInstitution->institution->name }}
            </h5>
        @endif

        <p>
            <span style="color: gray;">
                {{ $invitation->personInstitution->title }}
            </span>

            <span>
                {{ $invitation->personInstitution->person->name }}
            </span>

            <span style="color: gray;">
                ({{ $invitation->personInstitution->role->name }})
            </span>
        </p>
    @endforeach
@stop
