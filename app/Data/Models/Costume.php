<?php
namespace App\Data\Models;

class Costume extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
