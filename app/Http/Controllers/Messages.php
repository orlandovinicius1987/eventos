<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class Messages extends Controller
{
    public function show()
    {
        return view(session('view'))
            ->with('invitation', session('invitation'))
            ->with('eventId', session('eventId'))
            ->with('subEventId', session('subEventId'))
            ->with('invitationId', session('invitationId'));
    }
}
