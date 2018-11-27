<?php

namespace App\Http\Controllers;

class Messages extends Controller
{
    public function show()
    {
        return view()->with('message', Session::get('messsage'));
    }
}
