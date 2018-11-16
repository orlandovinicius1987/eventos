<?php

namespace App\Data\Models;

class PersonInstitution extends BaseWithPersonInstituion
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
        'is_active',
    ];

    protected $with = ['person', 'institution', 'role'];

    protected $filterableColumns = [
        'roles.name',
        'institutions.name',
        'advisor.name',
        'advisor.nickname',
        'advisor.title',
    ];

    protected $selectColumns = [
        'person_institutions.id',
        'person_institutions.person_id',
        'person_institutions.institution_id',
        'person_institutions.role_id',
        'person_institutions.advised_id',
        'person_institutions.advised_id',
        'person_institutions.title',
        'person_institutions.created_at',
        'person_institutions.updated_at',
        'person_institutions.is_active',
    ];

    protected $joins = [
        'people as advisor' => [
            'advisor.id',
            '=',
            'person_institutions.person_id',
        ],
    ];

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
