<?php
namespace App\Data\Models;

class Role extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    protected $orderBy = ['roles.name' => 'asc'];

    public function people()
    {
        return $this->hasMany(Contact::class);
    }
}
