<?php
namespace App\Data\Models;

class Address extends BaseWithClient
{
    protected $table = 'addresses';

    protected $orderBy = ['street' => 'asc'];

    protected $appends = ['model', 'full_address', 'google_maps_url'];

    /**
     * @var array
     */
    protected $fillable = [
        'zipcode',
        'street',
        'number',
        'complement',
        'neighbourhood',
        'city',
        'state',
        'addressable_id',
        'addressable_type',
        'client_id',
        'latitude',
        'longitude',
    ];

    public function addressable()
    {
        return $this->morphTo();
    }

    public function getFullAddressAttribute()
    {
        $fullAddress = $this->street;
        if ($this->number) {
            $fullAddress .= ', ' . $this->number;
        }
        if ($this->complement) {
            $fullAddress .= ', ' . $this->complement;
        }
        if ($this->neighbourhood) {
            $fullAddress .= ' - ' . $this->neighbourhood;
        }
        if ($this->city || $this->state) {
            $fullAddress .= '. ';
        }
        if ($this->city) {
            $fullAddress .= $this->city;
        }
        if ($this->state) {
            $fullAddress .= '/' . $this->state;
        }

        return $fullAddress;
    }

    public function getGoogleMapsUrlAttribute()
    {
        if ($this->latitude && $this->longitude) {
            return 'https://www.google.com/maps/@' .
                $this->latitude .
                ',' .
                $this->longitude .
                ',17z';
        } else {
            return '';
        }
    }
}
