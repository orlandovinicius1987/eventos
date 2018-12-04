<?php

namespace App\Http\Controllers;

use App\Data\Repositories\Notifications as NotificationsRepository;

class Notifications extends Controller
{
    public function markAsReceivedAndDownloadImage($uuid)
    {
        app(NotificationsRepository::class)->markAsReceived($uuid);

        return response()->download(public_path('images/dummy.png'));
    }

    public function status($status)
    {
        app(NotificationsRepository::class)->registerMessageStatus(
            $status,
            extract_info_from_mailgun_webhook(request()->all())
        );
    }
}
