@extends('layouts.simple-noauth')

@section('content')
    <div class="container d-flex h-80">
        <div class="row align-self-center w-100">
            <div class="col-md-8 col-lg-8 mx-auto">
                <div class="card p-5">
                    <div class="py-2 text-center">
                        <p>Você fez leitura de um QRCode de convite para o evento</p>

                        <h1>{{$invitation->subEvent->event->name}}</h1>
                        <h2>{{$invitation->subEvent->name}}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
