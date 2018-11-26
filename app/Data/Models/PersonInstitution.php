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
        'is_active',
    ];

    protected $with = ['person', 'institution', 'role'];

    protected $appends = ['model', 'correct_title'];

    protected $filterableColumns = [
        'roles.name',
        'institutions.name',
        'advisors.name',
        'advisors.nickname',
        'advisors.title',
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
        'people as advisors' => [
            'advisors.id',
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

    public function scopeActive($query)
    {
        $query->where('is_active', '=', true);
    }

    public function getCorrectTitleAttribute()
    {
        return ($this->title
                ? $this->title
                : $this->person->title)
            ? $this->person->title
            : '';
    }

    /**
     * Select all people that has institution
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeInvitedToSubEvent($query, $sub_event_id)
    {
        $query->whereIn('person_institutions.id', function ($query) use (
            $sub_event_id
        ) {
            $query
                ->select('person_institutions.id')
                ->from('person_institutions');

            $query->join(
                'invitations',
                'invitations.person_institution_id',
                'person_institutions.id'
            );

            $query->join(
                'sub_events',
                'sub_events.id',
                'invitations.sub_event_id'
            );

            $query->where('sub_events.id', '=', $sub_event_id);
        });

        return $query;
    }
}
