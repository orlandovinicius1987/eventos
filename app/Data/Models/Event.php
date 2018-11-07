<?php

namespace App\Data\Models;

class Event extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'confirmed_by', 'confirmed_at', 'client_id'];

    protected $orderBy = ['name' => 'asc'];
}
