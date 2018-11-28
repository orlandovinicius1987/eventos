<?php

namespace App\Http\Controllers;

//TEST
use App\Services\QrCode\Service as QrCode;
use App\Data\Repositories\Invitations as InvitationsRepository;
//TEST

class Home extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect()->route('admin.index');
    }

    public function test()
    {
        //        $qrCode = app(QrCode::class);
        //        $fileName = 'qrcode.png';
        //        $relativePath = 'qr-codes/';
        //        $text = 'https://github.com/Bacon/BaconQrCode';
        //
        //        $qrCode->generateFile($fileName, $relativePath, $text);
        $invitationsRepository = app(InvitationsRepository::class);
        $invitationsRepository->generateQrCodeFor(17);
    }
}
