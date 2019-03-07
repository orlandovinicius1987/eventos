<?php

namespace App\Data\Models;

use App\Data\Scopes\Active as ActiveScope;

class PersonTopic extends BaseWithClient
{
    protected $orderBy = ['topics.name' => 'asc'];

    protected $table = 'person_topics';

    /**
     * @var array
     */
    protected $fillable = ['person_id', 'topic_id', 'client_id'];

    protected $selectColumns = [
        'person_topics.id',
        'person_topics.person_id',
        'person_topics.topic_id',
    ];

    protected $joins = [
        'people' => ['people.id', '=', 'person_topics.person_id'],
        'topics' => ['topics.id', '=', 'person_topics.topic_id'],
    ];

    protected $with = ['person', 'topic'];

    public function topic()
    {
        return $this->belongsTo(Topic::class);
    }

    public function person()
    {
        return $this->belongsTo(Person::class)->withoutGlobalScope(
            ActiveScope::class
        );
    }
}
