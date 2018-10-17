<?php
namespace App\Data\Models;

class Advisor extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'role_id', 'person_institution_id'];

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function contacts()
    {
        return $this->morphMany(Contact::class, 'contactable');
    }
}
