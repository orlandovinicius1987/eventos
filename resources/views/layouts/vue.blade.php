@extends('layouts.html')

@section('html-content')
    <div id="vue-app">
        @include('layouts.partials.heading')

        <div class="container-fluid">
            <router-view></router-view>
        </div>

        @include('layouts.partials.footer')
    </div>
@endsection
