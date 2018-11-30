<?php

namespace App\Http\Controllers;

class Messages extends Controller
{
    public function show()
    {
        return view('message.message')->with([
            'message' => session()->pull('message'),
        ]);
    }
}
