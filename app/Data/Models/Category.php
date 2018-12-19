<?php

namespace App\Data\Models;

class Category extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'client_id'];

    protected $table = 'categories';

    protected $orderBy = ['name' => 'asc'];

    public function persons()
    {
        return $this->morphedByMany(Person::class, 'categorizable');
    }
}
