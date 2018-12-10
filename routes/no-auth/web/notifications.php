<?php

// ESTA ROTA ESTÁ ERRADA, MAS AGORA VAI TER QUE FICAR AQUI ATÉ TERMINAR O EVENTO
Route::get(
    '/notifications{uuid}/received/{filePath}',
    'Notifications@markAsReceivedAndDownloadFile'
)->name('notifications.received');

// DEPOIS QUE TERMINAR O EVENTO, DELETAR A DE CIMA E MANTER ESTA AQUI
//Route::get(
//    '/notifications/{uuid}/received/{filePath}',
//    'Notifications@markAsReceivedAndDownloadFile'
//)->name('notifications.received');
