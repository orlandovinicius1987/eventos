<?php

namespace App\Data\Concerns;

use App\Data\Models\PersonInstitution as PersonInstitutionScope;
use App\Data\Scopes\CurrentClient as CurrentClientScope;

trait FilterCurrentClient
{
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new CurrentClientScope());
    }
}
