@extends('layouts.simple')

@section('content')
    <div class="container d-flex h-80">
        <div class="row align-self-center w-100 text-center">
            <div class="col-md-8 col-lg-8 mx-auto">
                <div class="card p-5 bg-danger text-white">
                    <div class="py-2 text-center">
                        <h3 class="text-white">{{ $invitation->subEvent->event->name }}</h3>

                        <br><br>

                        <h1>As confirmações deste evento estão encerradas.</h1>

                        <br><br>

                        <h3>Por favor entre em contato com o Cerimonial Alerj para mais informações:</h3>

                        <br><br>

                        <h1>(21) 2588-1420</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
