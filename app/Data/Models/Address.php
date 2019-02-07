<?php
namespace App\Data\Models;

class Address extends BaseWithClient
{
    const HTTPS_WWW_GOOGLE_COM_MAPS = 'https://www.google.com/maps';
    protected $table = 'addresses';

    protected $orderBy = ['street' => 'asc'];

    protected $appends = [
        'name',
        'model',
        'full_address',
        'google_maps_link_url',
        'google_maps_image_url',
    ];

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

    public function getNameAttribute()
    {
        return $this->getFullAddressAttribute();
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

    public function getGoogleMapsLinkUrlAttribute()
    {
        return $this->latitude && $this->longitude
            ? self::HTTPS_WWW_GOOGLE_COM_MAPS .
                    '/search/?api=1&query=' .
                    $this->latitude .
                    ',' .
                    $this->longitude .
                    '&zoom=18'
            : '';
    }

    public function getGoogleMapsImageUrlAttribute()
    {
        return $this->latitude && $this->longitude
            ? self::HTTPS_WWW_GOOGLE_COM_MAPS .
                    '/api/staticmap?center=@' .
                    $this->latitude .
                    ',' .
                    $this->longitude .
                    '&zoom=16&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C' .
                    $this->latitude .
                    ',' .
                    $this->longitude .
                    '&key=' .
                    config('services.google_maps.api_key')
            : '';
    }
}
