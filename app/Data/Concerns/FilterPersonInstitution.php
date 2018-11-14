<?php

namespace App\Data\Concerns;

use App\Data\Scopes\PersonInstitution as PersonInstitutionScope;

trait FilterPersonInstitution
{
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new PersonInstitutionScope());
    }
}
