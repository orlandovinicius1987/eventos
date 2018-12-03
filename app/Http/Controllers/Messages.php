<?php

namespace App\Http\Controllers;

class Messages extends Controller
{
    public function show()
    {
        return view('messages.common')->with([
            'message' => session()->pull('message'),
        ]);
    }
}
