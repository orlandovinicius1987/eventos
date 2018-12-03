<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

        <title>Printed document</title>

        <style type="text/css">
            @page {
                margin: 20px;
            }

            body {
                /*position: relative;*/
                margin: 0 ;
                font-family: Helvetica;
                font-size: 14px;
                text-align: center;
                background: #ffffff;
                height: 300px;
                display: block;
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
            }

            .invited-sector {
                color: #FFFFFF;
                padding: 10px 0 10px 0;
                font-size: 115%;
            }

            .invited-sector-place {
                text-transform: uppercase;
                font-size: 11px;
                margin-top: 3px;
            }


            .event-name {
                background: #082953;
                color: #8C9D45;
                padding: 11px 15px 11px 15px;
                font-family: "Times New Roman";
                font-weight: bold;
                font-size: 14px;
                text-transform: uppercase;
                margin-bottom: 0px;

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
                padding: 10px 30px 12px ;
                font-weight: 500;
                font-size: 90%;
                margin: 0px;
            }


            .bg-qrcode-top {
                background: #8C9D45;
                height: 40px;
                margin-top: 0px;
                margin-top: -2px;
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
                font-size: 75%;
                text-transform: uppercase;
                font-weight: 500;

            }

            .info01 {
                padding-top: 10px;
                border-top: 1px solid #8C9D45;
            }

            .info01 .data {
                margin-bottom: 0px;
            }

            .info02 {
                border-top: 1px solid #819193;
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

/*            .qrcode-block {
                !*position: relative;*!
                border-bottom: 1px solid #8C9D45;
                padding-bottom: 5px;
                margin-bottom: 0px;
                padding-bottom: 5px;
            }

            */

            .qrcode {
                margin-top: -35px;
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
            @include('pdf.invitations.invitation-detail', ['invitation' => $invitation, 'lastId' => $invitations->pluck('id')->last()])
        @endforeach
    </body>
</html>

