<?php
namespace App\Data\Models;

class Advisor extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'advisor_type_id'
    ];
}
