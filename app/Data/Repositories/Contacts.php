<?php
namespace App\Data\Repositories;

use App\Data\Models\Contact as ContactModel;
use App\Events\NewEmailActived;

class Contacts extends Repository
{
    /**
     * @var string
     */
    protected $model = ContactModel::class;

    /**
     * @param $personInstitutionId
     * @return mixed
     */
    public function allByPersonInstitutionId($personInstitutionId)
    {
        return $this->filterByPersonInstitutionId($personInstitutionId);
    }

    /**
     * @param $array
     * @return mixed|void
     */
    public function storeFromArray($array)
    {
        $contact = parent::storeFromArray($array);

        if ($contact->contact_type_id == 3 and $contact->is_active) {
            $invitation = app(Invitations::class)->findByPersonInstitutionId(
                $contact->personInstitution->id
            );

            if ($invitation) {
                event(new NewEmailActived($invitation->id));
            }
        }
    }
}
