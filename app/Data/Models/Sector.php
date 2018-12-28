<?php
namespace App\Data\Models;

class Sector extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'color'];

    protected $orderBy = ['name' => 'asc'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
