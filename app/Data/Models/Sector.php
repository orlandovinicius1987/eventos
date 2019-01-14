<?php
namespace App\Data\Models;

class Sector extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'color', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
