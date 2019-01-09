<?php

namespace App\Data\Models;

class PersonTopic extends Base
{
    protected $orderBy = ['topics.name' => 'asc'];

    protected $table = 'person_topics';

    /**
     * @var array
     */
    protected $fillable = [
        'person_id',
        'topic_id',
    ];

    protected $selectColumns = [
        'person_topics.id',
        'person_topics.person_id',
        'person_topics.topic_id',
    ];

    protected $joins = [
        'people' => ['people.id', '=', 'person_topics.person_id'],
    ];

    public function topic()
    {
        return $this->belongsTo(Topic::class );
    }

    public function person()
    {
        return $this->belongsTo(Person::class);
    }

}
