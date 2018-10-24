<?php
namespace App\Data\Models;

class ContactType extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'code'];

    protected $table = 'contacts_types';

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
