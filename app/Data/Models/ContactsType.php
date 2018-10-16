<?php
namespace App\Data\Models;

class ContactsType extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'code'];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
