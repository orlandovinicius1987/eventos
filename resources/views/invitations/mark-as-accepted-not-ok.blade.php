@extends('layouts.simple-noauth')

@section('content')

    <div>
        <div class="py-2 mb-4 text-center">
            <h2>{{$invitation->personInstitution->person->name}}</h2>
        </div>

        <div class="alert alert-danger">
            Parece que há algo errado com a seu convite, por favor entre em contato com o Cerimonial Alerj.
        </div>

    </div>

@stop
