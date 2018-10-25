<?php
namespace App\Data\Models;

class Contact extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'contact_type_id',
        'contact',
        'person_institution_id',
        'client_id',
    ];

    protected $with = ['contactType'];

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function contactType()
    {
        return $this->belongsTo(ContactType::class);
    }
}
