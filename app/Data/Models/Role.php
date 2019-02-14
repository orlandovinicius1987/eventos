<?php
namespace App\Data\Models;

class Role extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'client_id'];

    protected $orderBy = ['roles.name' => 'asc'];

    public function people()
    {
        return $this->hasMany(Contact::class);
    }
}
