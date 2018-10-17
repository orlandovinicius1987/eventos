<?php

namespace App\Data\Models;

class PersonInstitution extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['person_id', 'institution_id', 'role_id', 'title'];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->morphMany('App\Data\Models\Contact', 'contactable');
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
}
