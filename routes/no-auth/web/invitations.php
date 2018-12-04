<?php

Route::get('/invitations/{uuid}/qrcode', 'Invitations@showViaQRCode')->name(
    'invitations.show-via-qrcode'
);
