<?php

namespace App\Data\Models;

class Person extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'nickname', 'title', 'client_id'];
}
