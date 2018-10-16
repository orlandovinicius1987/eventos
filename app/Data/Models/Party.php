<?php
namespace App\Data\Models;

class Party extends Base
{
    protected $table = 'parties';

    /**
     * @var array
     */
    protected $fillable = ['name', 'number', 'initials'];

    public function addresses()
    {
        return $this->morphMany('App\Data\Models\Address', 'addressable');
    }

    public function contacts()
    {
        return $this->morphMany('App\Data\Models\Contact', 'contactable');
    }
}
