<?php

namespace App\Data\Models;

use Illuminate\Support\Facades\DB;

class SubEvent extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'date',
        'time',
        'place',
        'invitation_text',
        'confirmation_text',
        'credential_send_text',
        'event_id',
        'costume_id',
        'sector_id',
        'associated_subevent_id',
        'ended_at',
        'ended_by',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'date',
        'confirmed_at',
        'started_at',
        'ended_at',
    ];

    protected $with = ['event', 'address', 'costume', 'sector'];

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable');
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function costume()
    {
        return $this->belongsTo(Costume::class);
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    public function associated()
    {
        return $this->belongsTo(SubEvent::class, 'associated_subevent_id');
    }

    /**
     * Scope a query to only include subEvents that will happen in 7 days.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeAboutToHappen($query)
    {
        return $query
            ->select(DB::raw('*'))
            ->from('sub_events')
            ->whereRaw(
                'abs(TRUNC(DATE_PART(\'day\', sub_events.date - now())/7)) < 2'
            );
    }
}
