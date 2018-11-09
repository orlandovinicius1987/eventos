<?php
namespace App\Data\Models;

class ContactType extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'code'];

    protected $orderBy = ['name' => 'asc'];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
