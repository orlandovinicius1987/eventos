<?php
namespace App\Data\Repositories;

use App\Data\Models\Invitation as InvitationModel;
use Illuminate\Support\Facades\Cache;

class Invitations extends Base
{
    /**
     * @var string
     */
    protected $model = InvitationModel::class;
}
