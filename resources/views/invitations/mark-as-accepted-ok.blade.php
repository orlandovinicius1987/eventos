@extends('layouts.simple-noauth')

@section('content')

    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{$invitation->personInstitution->person->name}}</h2>
        </div>

        <div class="alert alert-success">
            Muito obrigado por confirmar presença no evento, em breve enviaremos a sua credencial para acesso ao evento.
        </div>
    </div>

@stop
