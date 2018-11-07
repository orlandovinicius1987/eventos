<?php

namespace App\Data\Models;

class Category extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    protected $table = 'categories';

    protected $orderBy = ['name' => 'asc'];

    public function persons()
    {
        return $this->morphedByMany(Person::class, 'categorizable');
    }
}
