<?php

namespace App\Data\Repositories;

use App\Data\Models\SubEvent as SubeventModel;

class SubEvents extends Repository
{
    /**
     * @var string
     */
    protected $model = SubEventModel::class;

    /**
     * @param $eventId
     * @param $subEventId
     */
    public function confirm($eventId, $subEventId)
    {
        $subEvent = $this->findById($subEventId);

        $subEvent->confirmed_at = now();

        $subEvent->save();
    }
}
