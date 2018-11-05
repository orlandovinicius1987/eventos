<?php

namespace App\Data\Models;

class PersonInstitution extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'person_id',
        'institution_id',
        'role_id',
        'title',
        'advised_id',
    ];

    protected $with = ['person', 'institution', 'role'];

    protected $filterableColumns = ['roles.name', 'institutions.name'];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    public function institution()
    {
        return $this->belongsTo(Institution::class);
    }

    public function advisors()
    {
        return $this->hasMany(PersonInstitution::class, 'advised_id', 'id');
    }

    public function advises()
    {
        return $this->hasMany(PersonInstitution::class, 'id', 'advised_id');
    }
}
