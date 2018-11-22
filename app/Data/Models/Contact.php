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
        'is_active',
    ];

    protected $filterableColumns = ['contact', 'contact_types.name'];

    protected $with = ['contactType'];

    protected $orderBy = ['contact_type_id' => 'asc'];

    protected $selectColumns = ['contacts.*'];

    protected $joins = [
        'contact_types' => [
            'contact_types.id',
            '=',
            'contacts.contact_type_id',
        ],
    ];

    public function personInstitution()
    {
        return $this->belongsTo(PersonInstitution::class);
    }

    public function contactType()
    {
        return $this->belongsTo(ContactType::class);
    }
}
