<?php

namespace App\Data\Repositories;

use App\Data\Models\PersonTopic;
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

    public function topicsables($personId)
    {
        return $this->applyFilter(
            app(Topics::class)
                ->newQuery()
                ->whereNotIn(
                    'id',
                    $this->getPersonTopics($personId)
                        ->get()
                        ->pluck('id')
                )
        );
    }

    private function getPersonTopics($personId)
    {
        return app(People::class)
            ->findById($personId)
            ->person_topics();
    }

    public function topicize($personId, $topics)
    {
        $person = app(People::class)->findById($personId);

        //  $oldTopics = $person->person_topics()->toArray();

        $this->attachTopics($topics, $person);

        // $this->broadcastUpdate($oldTopics, $person);
        $person->save();

        return $person;
    }

    /**
     * @param $categories
     * @param $person
     */
    protected function attachTopics($topics, $person): void
    {
        coollect($topics)->each(function ($topic) use ($person) {
            if ($topic->checked) {
                $ps = new PersonTopic();
                $ps->person_id = $person->id;
                $ps->topic_id = $topic->id;
                $ps->save();
            }
        });
    }

    public function unTopicize($personId, $id)
    {
        ($person = app(People::class)->findById($personId))
            ->person_topics()
            ->detach($id);

        // event(new PersonCategoriesChanged($person));
    }
}
