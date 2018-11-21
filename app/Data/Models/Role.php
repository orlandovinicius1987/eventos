<?php
namespace App\Data\Models;

class Role extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    protected $orderBy = ['name' => 'asc'];

    public function people()
    {
        return $this->hasMany(Contact::class);
    }
}
