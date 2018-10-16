<?php
namespace App\Data\Models;

class PoliticalParty extends Base
{
    protected $table = 'political_parties';

    /**
     * @var array
     */
    protected $fillable = ['name', 'initials'];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->morphMany('App\Data\Models\Contact', 'contactable');
    }
}
