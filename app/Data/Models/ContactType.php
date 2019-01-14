<?php
namespace App\Data\Models;

class ContactType extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'code', 'client_id'];

    protected $orderBy = ['name' => 'asc'];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }
}
