@extends('layouts.simple-noauth')

@section('content')

    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{$invitation->personInstitution->person->name}}</h2>
        </div>

        @if (isset($errors) && $errors->any())
            <div class="alert alert-danger">
                @foreach ($errors->all() as $error)
                    {{ $error }}
                @endforeach
            </div>
        @endif

        <div class="row justify-content-center">
            <form method="POST" action="{{ route('invitations.mark-as-accepted', [$eventId, $subEventId, $invitationId]) }}" >
                <input type="hidden" name="eventId" value="{{$eventId}}"/>
                <input type="hidden" name="subEventId" value="{{$subEventId}}"/>
                <input type="hidden" name="invitationId" value="{{$invitationId}}"/>
                <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">

                <div>
                    <h2>Confirme seu CPF para confirmar seu Convite</h2>
                    <div class="row">
                        <div class="col-12 mb-3">
                            <label for="cpf">CPF</label>
                            <input
                                name="cpf"
                                id="cpf"
                                required="true"
                                type="text"
                            />
                            <button class="btn btn-outline-secondary" type="submit">gravar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
@stop
