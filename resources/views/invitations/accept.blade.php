@extends('layouts.simple-noauth')

@section('content')


    <style>
        html {
            height: 100%;
        }

        body {
            height: 100%;
            background-image: url("/images/alerj-logo-sotexto-op20.png") ;
            background-repeat: no-repeat ;
            background-position: bottom 100px center;
            background-size: 300px;
        }

        .container-fluid {
            display: none !important;
        }
    </style>


    <div class="container d-flex h-80">
        <div class="row align-self-center w-100">
            <div class="col-md-8 col-lg-8 mx-auto">

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

                <div class="row justify-content-center text-center">
                    <form method="POST" action="{{ route('invitations.mark-as-accepted', [$eventId, $subEventId, $invitationId]) }}" >
                        <input type="hidden" name="eventId" value="{{$eventId}}"/>
                        <input type="hidden" name="subEventId" value="{{$subEventId}}"/>
                        <input type="hidden" name="invitationId" value="{{$invitationId}}"/>
                        <input type="hidden" name="_token" id="token" value="{{ csrf_token() }}">

                        <div>
                            <h3>Confirme seu CPF para confirmar seu Convite</h3>
                            <div class="row mb-3 mt-3 ">
                                <div class="col-12">
                                    {{--<label for="cpf">CPF</label>--}}
                                    <input
                                            name="cpf"
                                            id="cpf"
                                            required="true"
                                            type="text"
                                            placeholder="CPF"
                                    />
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col-12">
                                    <button class="btn btn-outline-secondary" type="submit">gravar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>


@stop
