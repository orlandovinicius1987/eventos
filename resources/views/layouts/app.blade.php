<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <script src="{{ mix('/js/app.js') }}" defer></script>

        <link rel="dns-prefetch" href="https://fonts.gstatic.com">

        <link href="/css/app.css" rel="stylesheet">

        @include('partials.environment')
    </head>

    <body>
        <div id="vue-app">
            @include('layouts.partials.heading')

            @yield('content')
        </div>

        @include('partials.google-analytics')

        @include('partials.livereload')
    </body>
</html>
