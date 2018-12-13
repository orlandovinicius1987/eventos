<html xml:lang="en" xmlns="http://www.w3.org/1999/xhtml" lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">

        <title>Eventos</title>

        <style type="text/css">
            @page {
                margin-top: 60px;
                margin-bottom: 0;
            }

            body {
                font-family: sans-serif;
                text-align: justify;
            }

            p {
                font-size: 0.8em;
                margin: 0;
            }

            #header {
                top: -40px;
                position: fixed;
                left: 0;
                right: 0;
                color: #aaa;
                font-size: 0.9em;
                border-bottom: 0.1pt solid #aaa;
            }

            #header table {
                width: 100%;
                border-collapse: collapse;
                border: none;
            }

            #header td {
                padding: 0;
                width: 50%;
            }

            hr {
                page-break-after: always;
                border: 0;
            }
        </style>
    </head>

    <body marginwidth="0" marginheight="0">
        <div id="header">
            <table>
                <tbody>
                    <tr>
                        <td>
                            {{ $heading }}

                            @if (isset($subHeading))
                                <br>
                                {{ $subHeading }}
                            @endif
                        </td>

                        <td style="text-align: right;">
                            {{ $date }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        {{--<div id="footer">--}}
            {{--<div class="page-number"></div>--}}
        {{--</div>--}}

        <h2>{{ $title }}</h2>

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
