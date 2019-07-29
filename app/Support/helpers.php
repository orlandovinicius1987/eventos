<?php

use App\Data\Repositories\Clients;
use Carbon\Carbon;
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
    return ($clientId = (int) Session::get('current_client_id'))
        ? $clientId
        : (auth()->user()
            ? auth()->user()->client_id
            : null);
}

function get_current_client_slug()
{
    if (!($current = Session::get('current_client'))) {
        $current = set_current_client_id(get_current_client_id());
    }

    return $current ? $current->slug : null;
}

function get_current_client()
{
    if (!($current = Session::get('current_client'))) {
        $current = set_current_client_id(get_current_client_id());
    }

    return $current;
}

function set_current_client_id($id)
{
    Session::put('current_client_id', $id);

    Session::put(
        'current_client',
        $client = app(Clients::class)->findById($id)
    );

    return $client;
}

function make_pdf_filename($baseName)
{
    return make_filename($baseName, 'pdf');
}

function make_filename($baseName, $extension)
{
    return str_slug($baseName . ' ' . now()->format('Y m d H i')) .
        ".{$extension}";
}

function extract_info_from_mailgun_webhook($data)
{
    return [
        'timestamp' => Carbon::createFromTimestamp(
            array_get($data, 'signature.timestamp')
        ),

        'message_id' => array_get(
            $data,
            'event-data.message.headers.message-id'
        ),
    ];
}

function current_user()
{
    return auth()->user();
}

function unnacent($string)
{
    $table = array(
        'Š' => 'S',
        'š' => 's',
        'Đ' => 'Dj',
        'đ' => 'dj',
        'Ž' => 'Z',
        'ž' => 'z',
        'Č' => 'C',
        'č' => 'c',
        'Ć' => 'C',
        'ć' => 'c',
        'À' => 'A',
        'Á' => 'A',
        'Â' => 'A',
        'Ã' => 'A',
        'Ä' => 'A',
        'Å' => 'A',
        'Æ' => 'A',
        'Ç' => 'C',
        'È' => 'E',
        'É' => 'E',
        'Ê' => 'E',
        'Ë' => 'E',
        'Ì' => 'I',
        'Í' => 'I',
        'Î' => 'I',
        'Ï' => 'I',
        'Ñ' => 'N',
        'Ò' => 'O',
        'Ó' => 'O',
        'Ô' => 'O',
        'Õ' => 'O',
        'Ö' => 'O',
        'Ø' => 'O',
        'Ù' => 'U',
        'Ú' => 'U',
        'Û' => 'U',
        'Ü' => 'U',
        'Ý' => 'Y',
        'Þ' => 'B',
        'ß' => 'Ss',
        'à' => 'a',
        'á' => 'a',
        'â' => 'a',
        'ã' => 'a',
        'ä' => 'a',
        'å' => 'a',
        'æ' => 'a',
        'ç' => 'c',
        'è' => 'e',
        'é' => 'e',
        'ê' => 'e',
        'ë' => 'e',
        'ì' => 'i',
        'í' => 'i',
        'î' => 'i',
        'ï' => 'i',
        'ð' => 'o',
        'ñ' => 'n',
        'ò' => 'o',
        'ó' => 'o',
        'ô' => 'o',
        'õ' => 'o',
        'ö' => 'o',
        'ø' => 'o',
        'ù' => 'u',
        'ú' => 'u',
        'û' => 'u',
        'ý' => 'y',
        'ý' => 'y',
        'þ' => 'b',
        'ÿ' => 'y',
        'Ŕ' => 'R',
        'ŕ' => 'r',
    );

    return strtr($string, $table);
}

function make_slug($string)
{
    return str_slug(unnacent($string));
}

function capitalizeBrazilian($name)
{
    $string = mb_convert_case($name, MB_CASE_TITLE);

    $string = trim(preg_replace('/\s\s+/', ' ', $string));

    collect(['de', 'da', 'do', 'das', 'dos', 'e'])->each(function (
        $exception
    ) use (&$string) {
        $exception = mb_convert_case($exception, MB_CASE_TITLE);

        $newCase = mb_convert_case($exception, MB_CASE_LOWER);

        $string = str_replace(" {$exception} ", " {$newCase} ", $string);

        preg_match_all('/(.\'.)/ui', $string, $matched);

        if (isset($matched[0])) {
            collect($matched[0])->each(function ($match) use (&$string) {
                $newCase = mb_convert_case($match, MB_CASE_UPPER);

                $string = str_replace(
                    substr($match, 1),
                    substr($newCase, 1),
                    $string
                );
            });
        }
    });

    return $string;
}

function permission_slug($string)
{
    $string = str_replace(':', $replace = 'xxxxxxxxxx', $string);

    return str_replace($replace, ':', str_slug($string));
}

function extract_client_and_permission($string)
{
    $data = collect(explode('-', $string))
        ->map(function ($value) {
            return permission_slug($value);
        })
        ->toArray();

    if (!isset($data[1])) {
        if (permission_slug($data[0]) === 'administrador') {
            $data[0] = 'all';
            $data[1] = 'administrador';
        } else {
            $data[1] = $data[0];
            $data[0] = 'none';
        }
    }

    return [$data[0], $data[1]];
}

function make_deep_path($nameHash, $length = 4)
{
    $deepPath = '';

    for ($i = 1; $i <= $length; $i++) {
        $deepPath =
            $deepPath . substr($nameHash, $i - 1, 1) . DIRECTORY_SEPARATOR;
    }

    return $deepPath;
}

class Timer
{
    public static $starttime;
    public static $endtime;
}
