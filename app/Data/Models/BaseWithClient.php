<?php

namespace App\Data\Models;

use App\Data\Concerns\FilterPersonInstitution;
use App\Data\Concerns\SetCurrentClient;
use App\Data\Concerns\FilterCurrentClient;
use App\Data\Concerns\SetPersonInstitution;

abstract class BaseWithClient extends Base
{
    use FilterCurrentClient, SetCurrentClient;
}
