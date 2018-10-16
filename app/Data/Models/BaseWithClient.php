<?php

namespace App\Data\Models;

use App\Data\Concerns\SetCurrentClient;
use App\Data\Concerns\FilterCurrentClient;

abstract class BaseWithClient extends Base
{
    use FilterCurrentClient, SetCurrentClient;
}
