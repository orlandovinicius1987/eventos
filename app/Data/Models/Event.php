<?php
namespace App\Data\Models;

class Event extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'confirmed_by', 'confirmed_at', 'client_id'];
}
