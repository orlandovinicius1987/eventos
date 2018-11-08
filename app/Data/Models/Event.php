<?php

namespace App\Data\Models;

use Illuminate\Support\Facades\DB;

class Event extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'confirmed_by', 'confirmed_at', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    /**
     * Scope a query to only include events that will happen in 7 days.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasSubEventsToHappen($query)
    {
        return $query->whereExists(function ($query) {
            $query
                ->select(DB::raw('*'))
                ->from('sub_events')
                ->whereRaw('sub_events.event_id = events.id')
                ->whereRaw(
                    'abs(TRUNC(DATE_PART(\'day\', sub_events.date - now())/7)) < 2'
                );
        });
    }

    /**
     * Scope a query to only include events that have subEvents not finalized.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasSubEventsNotFinalized($query)
    {
        return $query->whereExists(function ($query) {
            $query
                ->select(DB::raw('*'))
                ->from('sub_events')
                ->whereRaw('sub_events.event_id = events.id')
                ->whereRaw('sub_events.finalized_at IS NULL');
        });
    }
}
