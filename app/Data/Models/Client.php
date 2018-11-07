<?php
namespace App\Data\Models;

class Client extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    protected $orderBy = ['name' => 'asc'];
}
