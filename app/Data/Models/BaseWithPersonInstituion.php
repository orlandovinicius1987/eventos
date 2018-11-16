<?php

namespace App\Data\Models;

use App\Data\Concerns\FilterPersonInstitution;

abstract class BaseWithPersonInstituion extends Base
{
    use FilterPersonInstitution;
}
