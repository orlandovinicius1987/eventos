<?php

namespace App\Http\Controllers;

class Firewall extends Controller
{
    public function whitelist($ipAddress)
    {
        app('firewall')->whitelist($ipAddress);

        return "{$ipAddress} was whitelisted";
    }

    public function blacklist($ipAddress)
    {
        app('firewall')->whitelist($ipAddress);

        return "{$ipAddress} was blacklisted";
    }
}
