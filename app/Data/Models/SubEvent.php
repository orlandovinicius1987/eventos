<?php

namespace App\Data\Models;

use App\Events\EventUpdated;
use App\Events\SubEventUpdated;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class SubEvent extends BaseWithClient
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
        'credentials_text',
        'thank_you_text',
        'rejection_text',
        'event_id',
        'costume_id',
        'sector_id',
        'associated_subevent_id',
        'ended_at',
        'ended_by',
        'client_id',
        'confirmations_end_date',
        'send_invitations',
        'send_credentials',
        'security_can_recept',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'date',
        'confirmed_at',
        'started_at',
        'ended_at',
        'confirmations_end_date',
    ];

    protected $with = ['event', 'address', 'costume', 'sector'];

    protected $appends = ['is_happening'];

    protected $orderBy = [
        'date' => 'asc',
        'time' => 'asc',
        'sector_id' => 'asc',
        'place' => 'asc',
        'name' => 'asc',
    ];

    protected $withCount = ['invitations'];

    public function address()
    {
        return $this->morphOne(Address::class, 'addressable');
    }

    protected static function bootObservers()
    {
        static::updated(function ($model) {
            event(new EventUpdated($model->event));

            event(new SubEventUpdated($model));
        });
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

    public function getFormattedDateAttribute()
    {
        return $this->date->format('d/m/Y');
    }

    public function getFormattedTimeAttribute()
    {
        return Carbon::createFromFormat('H:i:s', $this->time)->format('H:i');
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

    /**
     * Confirmed scope.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeConfirmed($query)
    {
        return $query->whereNotNull('confirmed_at');
    }

    public function getIsHappeningAttribute()
    {
        return $this->date->between(now()->subDay(), now()->addDay());
    }
}
