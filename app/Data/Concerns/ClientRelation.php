<?php

namespace App\Data\Concerns;

use App\Data\Models\Client;

trait ClientRelation
{
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
