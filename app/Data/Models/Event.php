<?php

namespace App\Data\Models;

use App\Events\EventWasUpdated;
use Illuminate\Support\Facades\DB;

class Event extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'confirmed_by', 'confirmed_at', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    protected static function bootObservers()
    {
        static::updated(function ($model) {
            event(new EventWasUpdated($model));
        });
    }

    /**
     * Scope a query to only include events that will happen in 7 days.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasSubEventsAboutToHappen($query)
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
     * Scope a query to only include events that have subEvents not ended.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHasSubEventsNotFinalized($query)
    {
        return $query->where(function ($query) {
            $query->whereExists(function ($query) {
                $query
                    ->select(DB::raw('*'))
                    ->from('sub_events')
                    ->whereRaw('sub_events.event_id = events.id')
                    ->whereRaw('sub_events.ended_at IS NULL');
            });

            $query->orWhereNotExists(function ($query) {
                $query
                    ->select(DB::raw('*'))
                    ->from('sub_events')
                    ->whereRaw('sub_events.event_id = events.id');
            });
        });
    }

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }
}
