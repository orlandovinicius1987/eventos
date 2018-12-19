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

    protected $orderBy = ['institutions.name' => 'asc'];

    public function scopeIsParty($query)
    {
        return $query->where('is_party', true);
    }
}
