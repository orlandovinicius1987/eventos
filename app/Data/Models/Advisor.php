<?php

namespace App\Data\Models;

class Advisor extends PersonInstitution
{
    public function advised()
    {
        return $this->belongsTo(PersonInstitution::class);
    }
}
