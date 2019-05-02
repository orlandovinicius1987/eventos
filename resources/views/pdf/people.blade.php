@extends('layouts.pdf')

@section('content')
    @foreach ($people as $person)
        <p style="page-break-inside: avoid;">
            <div style="color: gray; font-size: 0.7em;">
                {{ $person['name'] ?? 'N/C' }}
            </div>
        </p>

        <br>
    @endforeach
@stop
