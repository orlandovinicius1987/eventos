<?php
namespace App\Data\Models;

class Costume extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'description', 'client_id',];

    protected $orderBy = ['name' => 'asc'];

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
