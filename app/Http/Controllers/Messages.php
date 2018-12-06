<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Messages extends Controller
{
    public function show(Request $request)
    {
        return view('messages.common')->with([
            'message' => $request->input('message'),
        ]);
    }
}
