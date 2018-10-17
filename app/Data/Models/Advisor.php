<?php
namespace App\Data\Models;

class Advisor extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'advisor_type_id', 'person_id'];

    public function advisorType()
    {
        return $this->belongsTo(AdvisorType::class);
    }

    public function contacts()
    {
        return $this->morphMany('App\Data\Models\Contact', 'contactable');
    }
}
