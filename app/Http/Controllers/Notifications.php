<?php

namespace App\Http\Controllers;

use App\Data\Repositories\Notifications as NotificationsRepository;

class Notifications extends Controller
{
    public function markAsReceivedAndDownloadFile($uuid, $filePath)
    {
        info(['markAsReceivedAndDownloadFile', $uuid, $filePath]);

        app(NotificationsRepository::class)->markAsReceived($uuid);

        $response = response()->make(
            file_get_contents(
                ($fileName = public_path(str_replace('|', '/', $filePath)))
            )
        );

        $response->header(
            'Content-Type',
            'image/' . pathinfo($fileName, PATHINFO_EXTENSION)
        );

        return $response;
    }

    public function status($status)
    {
        app(NotificationsRepository::class)->registerMessageStatus(
            $status,
            extract_info_from_mailgun_webhook(request()->all())
        );
    }
}
