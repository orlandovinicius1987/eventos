<?php
namespace App\Data\Models;

use App\Data\Repositories\ContactTypes;

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

    public function scopeActiveOnly($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeEmailOnly($query)
    {
        return $query->where(
            'contact_type_id',
            app(ContactTypes::class)->findByCode('email')->id
        );
    }

    public function canReceiveNotifications()
    {
        return $this->is_active;
    }
}
