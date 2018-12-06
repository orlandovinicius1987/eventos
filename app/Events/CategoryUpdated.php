<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;

class CategoryUpdated extends Event
{
    public $category;

    /**
     * Create a new event instance.
     *
     * @param $category
     */
    public function __construct($category)
    {
        $this->category = $category;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('category.' . $this->category->id);
    }
}
