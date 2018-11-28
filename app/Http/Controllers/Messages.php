<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;

class Messages extends Controller
{
    public function show()
    {
        return view('message.message')->with(['message' => session('message')]);
    }
}
