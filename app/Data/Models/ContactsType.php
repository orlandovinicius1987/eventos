<?php
namespace App\Data\Models;

class ContactsType extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
