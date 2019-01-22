<?php
namespace App\Data\Models;

class Topic extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    public function person_topics()
    {
        return $this->hasMany(PersonTopic::class);
    }
}
