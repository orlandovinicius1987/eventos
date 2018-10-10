@extends('layouts.html')

@section('html-content')
    @include('layouts.partials.heading')

    @yield('content')

    @include('layouts.partials.footer')
@endsection
