<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class TopicUpdated extends Broadcastable
{
    protected $topic;

    /**
     * Create a new event instance.
     *
     * @param $topic
     */
    public function __construct($topic)
    {
        $this->topic = $topic;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('topic.' . $this->topic->id);
    }
}
