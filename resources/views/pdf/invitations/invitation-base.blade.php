<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

        <title>Printed document</title>

        <style type="text/css">
            @page {margin: 20px}

            body {
                position: relative;
                margin: 0 ;
                font-family: Helvetica;
                font-size: 14px;
                text-align: center;
            }

            p {
                display: block;
                margin-block-start: 0em;
                margin-block-end: 0em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
            }

            header {
                background: #082953;
                border-bottom: #E4E7E8 1px solid;
            }

            .invited-sector {
                color: #FFFFFF;
                padding: 10px 0 10px 0;
                font-size: 115%;
            }


            .event-name {
                background: #082953;
                /*border-bottom: #E4E7E8 2px solid;*/
                color: #8C9D45;
                padding: 11px 15px 11px 15px;
                font-family: "Times New Roman";
                font-weight: bold;
                height: 38px;
                font-size: 16px;

            }


            .bg-green {
                background: #609928;
            }

            .bg-brown {
                background: #A8730E;
            }

            .bg-blue {
                background: #004695;
            }


            .invited-name {
                color: #082953;
                background: #8C9D45;
                padding: 10px 30px 25px ;
                font-weight: 500;
                font-size: 90%;
                height: 80px;
            }

            .notice {
                text-align: center;
                background: #B9C1C2;
                padding: 12px 10px;
                display: block;
                font-size: 63%;
                font-weight: 500;
            }

            .label{
                color: #819193;
                font-size: 80%;
                text-transform: uppercase;
                font-weight: 500;

            }

            .data-height {
                height: 13px;
            }

            .info01 {
                padding-top: 10px;
            }

            .info01 .data {
                margin-bottom: 0px;
            }

            .info02 {
                border-bottom: 1px solid #819193;
                border-top: 1px solid #819193;
                width: 100% ;
                clear: both;
                padding: 10px 0;
            }

            .info03 {
                border-bottom: 1px solid #819193;
                width: 100% ;
                clear: both;
                padding: 10px 0;
            }

            footer {
                background: #ffffff;
                margin: 0;
                padding: 4px 0 0 0;
            }

            .logo-alerj-footer {
                padding-top: 0px;
                border-bottom: 2px #8C9D45 solid;
            }

            .logo-alerj-footer img {
                width: 50%;
            }

            .qrcode-block {
                /*position: relative;*/
                border-bottom: 1px solid #8C9D45;
                padding-bottom: 5px;
                margin-bottom: 0px;
                padding-bottom: 5px;
            }
            .qrcode {
                margin-top: -15px;
                width: 50%;
                margin-bottom: 7px;
            }
            .qrcode-number {
                margin-bottom: 7px;
                font-size: 16px;
            }

            .bg-grey {
                background: #E4E7E8;
            }
        </style>

    </head>

    <body>
        @foreach ($invitations as $invitation)
            @include('pdf.invitations.invitation-detail', ['invitation' => $invitation])
        @endforeach
    </body>
</html>

