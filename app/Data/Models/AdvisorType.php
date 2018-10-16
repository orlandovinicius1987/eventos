<?php
namespace App\Data\Models;

class AdvisorType extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    public function advisors()
    {
        return $this->hasMany(Advisor::class);
    }
}
