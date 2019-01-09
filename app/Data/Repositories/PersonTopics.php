<?php

namespace App\Data\Repositories;

use App\Events\PersonInstitutionsGotChanged;
use Illuminate\Database\Query\Builder;
use App\Data\Models\PersonTopic as PersonTopicModel;

class PersonTopics extends Repository
{
    /**
     * @var string
     */
    protected $model = PersonTopicModel::class;

    /**
     * @param $personId
     * @return mixed
     */
    public function allByPerson($personId)
    {
        return $this->filterByPersonId($personId);
    }

    /**
     * @param $institutionId
     * @return mixed
     */
    public function allByTopics($topic_id)
    {
        return $this->filterByTopicsId($topic_id);
    }

//    public function fireEventsForRelationships($model)
//    {
//        event(new PersonTopicssGotChanged($model->person));
//    }
}
