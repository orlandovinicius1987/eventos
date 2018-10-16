<?php
namespace App\Data\Repositories;

use App\Data\Models\Contact as ContactModel;

class Contacts extends Base
{
    /**
     * @var string
     */
    protected $model = ContactModel::class;
}
