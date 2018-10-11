<?php

namespace App\Http\Controllers;

class Home extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return redirect()->route('admin.index');
    }
}
