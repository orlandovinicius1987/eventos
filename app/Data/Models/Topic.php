<?php
namespace App\Data\Models;

class Topic extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'slug', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    public function person_topics()
    {
        return $this->hasMany(PersonTopic::class);
    }

    public function save(array $options = [])
    {
        if (blank($this->slug)) {
            $this->slug = make_slug($this->name);
        }

        return parent::save($options);
    }
}
