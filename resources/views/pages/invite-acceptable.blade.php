@extends('layouts.simple-noauth')

@section('content')

    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{$invite->personInstitution->person->name}}</h2>
        </div>

        @if (isset($errors) && $errors->any())
            <div class="alert alert-danger">
                @foreach ($errors->all() as $error)
                    {{ $error }}
                @endforeach
            </div>
        @endif

        @if ($alerts = session('alerts'))
            @foreach($alerts as $alert)
                <div class="alert alert-{{ $alert['type'] }}">
                    {{ $alert['message'] }}
                </div>
            @endforeach
        @endif


        <div class="row justify-content-center">
            <form method="POST" action="{{ route('invitations.acceptable', [$eventId, $subEventId, $id]) }}" >
                <input type="hidden" name="eventId" value="{{$eventId}}"/>
                <input type="hidden" name="subEventId" value="{{$subEventId}}"/>
                <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">

                <h2>{{$msg}}</h2>

                <div>
                    @if (is_null(session('alerts')))
                        <h2>Confirme seu CPF</h2>
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
                    @endif
                </div>
            </form>
        </div>
    </div>
@stop
