<?php
namespace App\Data\Repositories;

use App\Data\Models\ContactsType as ContactsTypeModel;

class ContactsTypes extends Repository
{
    /**
     * @var string
     */
    protected $model = ContactsTypeModel::class;
}
