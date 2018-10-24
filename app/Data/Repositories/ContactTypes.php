<?php
namespace App\Data\Repositories;

use App\Data\Models\ContactType as ContactTypeModel;

class ContactTypes extends Repository
{
    /**
     * @var string
     */
    protected $model = ContactTypeModel::class;
}
