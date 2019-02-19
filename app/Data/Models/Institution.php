<?php
namespace App\Data\Models;

class Institution extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'initials',
        'party_number',
        'is_party',
        'client_id',
    ];

    protected $appends = ['composite_name'];

    protected $orderBy = ['institutions.name' => 'asc'];

    public function scopeIsParty($query)
    {
        return $query->where('is_party', true);
    }

    public function getCompositeNameAttribute()
    {
        if ($this->initials) {
            return $this->name . ' (' . $this->initials . ')';
        } else {
            return $this->name;
        }
    }
}
