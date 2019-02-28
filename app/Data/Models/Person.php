<?php

namespace App\Data\Models;

use App\Data\Scopes\Active as ActiveScope;

class Person extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'nickname',
        'title',
        'client_id',
        'birthdate',
        'cpf',
        'photo',
        'notes',
        'is_active',
    ];

    protected $table = 'people';

    protected $orderBy = ['people.name' => 'asc'];

    protected $hidden = ['photo'];

    protected $appends = ['photoUrl'];

    /**
     * Columns which can be used on filter
     *
     * @var array
     */
    protected $filterableColumns = [
        'people.name',
        'people.nickname',
        'people.title',
    ];

    public function getSelectColumns()
    {
        return coollect($this->selectColumns);
    }

    public function person_institutions()
    {
        return $this->hasMany(PersonInstitution::class);
    }

    public function person_topics()
    {
        return $this->hasMany(PersonTopic::class);
    }

    public function institutions()
    {
        return $this->hasMany(PersonInstitution::class);
    }

    public function categories()
    {
        return $this->morphToMany(Category::class, 'categorizable');
    }

    public function getPhotoUrlAttribute()
    {
        return route('people.photo', $this->id);
    }

    /**
     * Filter users with no photo
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasNoPhoto($query)
    {
        return $query->whereNull('photo');
    }

    /**
     * Select all people that has institution
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePresentInInstitution($query, $institution_id)
    {
        $query->whereIn('id', function ($query) use ($institution_id) {
            $query->select('person_id')->from('person_institutions');

            $query->join(
                'institutions',
                'institutions.id',
                'person_institutions.institution_id'
            );

            $query->where('institutions.id', '=', $institution_id);
        });

        return $query;
    }

    /**
     * Select all people that has role
     *
     * @param $query
     * @param $role_id
     * @return mixed
     */
    public function scopePresentInRole($query, $role_id)
    {
        $query->whereIn('id', function ($query) use ($role_id) {
            $query->select('person_id')->from('person_institutions');

            $query->join('roles', 'roles.id', 'person_institutions.role_id');

            $query->where('roles.id', '=', $role_id);
        });

        return $query;
    }

    /**
     * Select all people that has category
     *
     * @param $query
     * @param $category_id
     * @return mixed
     */
    public function scopeHasCategory($query, $category_id)
    {
        $query->whereIn('id', function ($query) use ($category_id) {
            $query->select('categorizable_id')->from('categorizables');

            $query->join(
                'categories',
                'categories.id',
                'categorizables.category_id'
            );

            $query->where('categories.id', '=', $category_id);
            $query->where(
                'categorizables.categorizable_type',
                '=',
                get_class($this)
            );
        });

        return $query;
    }

    /**
     * Select all people that has topic
     *
     * @param $query
     * @param $topic_id
     * @return mixed
     */
    public function scopeHasTopic($query, $topic_id)
    {
        $query->whereIn('id', function ($query) use ($topic_id) {
            $query->select('person_id')->from('person_topics');

            $query->join('topics', 'topics.id', 'person_topics.topic_id');

            $query->where('topics.id', '=', $topic_id);
        });

        return $query;
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class, 'person_topics');
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new ActiveScope());
    }
}
