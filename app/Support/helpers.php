<?php
use Illuminate\Support\Facades\Auth;

function startTimer()
{
    Timer::$starttime = microtime(true);
}

function endTimer()
{
    Timer::$endtime = microtime(true);

    return Timer::$endtime - Timer::$starttime;
}

function toBoolean($boolean)
{
    return $boolean === 'true' ||
        $boolean === '1' ||
        $boolean === 1 ||
        $boolean === true;
}

function extract_credentials($request)
{
    $credentials = $request->only(['email', 'password']);

    $credentials['username'] = $credentials['email'];

    return $credentials;
}

function subsystem_is($subsystem)
{
    return \Session::get('subsystem') === $subsystem;
}

function is_administrator()
{
    if (!($user = Auth::user())) {
        return false;
    }

    return $user->is_administrator;
}

function only_numbers($string)
{
    return preg_replace('/\D/', '', $string);
}

function remove_punctuation($string)
{
    return preg_replace('/[^a-z0-9]+/i', '', $string);
}

function request_data()
{
    return coollect(request()->all());
}

function ld($info)
{
    info($info);
    die();
}

function get_current_client_id()
{
    return ($clientId = Session::get('current_client_id'))
        ? $clientId
        : (auth()->user()
            ? auth()->user()->client_id
            : null);
}

function set_current_client_id($id)
{
    return Session::put('current_client_id', $id);
}

function make_pdf_filename($baseName)
{
    return str_slug($baseName . ' ' . now()->format('Y m d H i')) . '.pdf';
}

class Timer
{
    public static $starttime;
    public static $endtime;
}
