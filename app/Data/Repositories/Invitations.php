<?php

namespace App\Data\Repositories;

use App\Data\Models\Invitation as InvitationModel;

class Invitations extends Repository
{
    /**
     * @var string
     */
    protected $model = InvitationModel::class;
}
