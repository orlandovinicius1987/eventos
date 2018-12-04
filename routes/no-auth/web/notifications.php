<?php

Route::get(
    '/notifications{uuid}/received/{filePath}',
    'Notifications@markAsReceivedAndDownloadFile'
)->name('notifications.received');
