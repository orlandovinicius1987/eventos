<?php

namespace App\Data\Models;

class Categorized extends Base
{
    protected $table = 'categorized';

    /**
     * @var array
     */
    protected $fillable = [
        'category_id',
        'categorizable_id',
        'categorizable_type',
    ];
}
