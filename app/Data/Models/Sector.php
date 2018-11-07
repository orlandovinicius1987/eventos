<?php
namespace App\Data\Models;

class Sector extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'color'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
