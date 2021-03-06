@extends('layouts.simple')

@section('content')
    <div class="container d-flex h-80 logo-alerj">
        <div class="row align-self-center w-100">
            <div class="col-md-8 col-lg-8 mx-auto">
                <div class="card p-5">
                    <div class="py-2 text-center">
                        <h2>{{$invitation->subEvent->event->name}}</h2>
                        <h2>{{$invitation->subEvent->name}}</h2>
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
                                <h4 class="mb-3">Digite seu CPF para aceitar o convite</h4>
                                <div class="row mb-3 mt-3">
                                    <div class="col-12">
                                        {{--<label for="cpf">CPF</label>--}}
                                        <input
                                            name="cpf"
                                            id="cpf"
                                            required="true"
                                            type="text"
                                            placeholder="CPF"
                                            class="form-control"
                                        />
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-12">
                                        <button class="btn btn-success btn-block" type="submit">
                                            Clique para aceitar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
