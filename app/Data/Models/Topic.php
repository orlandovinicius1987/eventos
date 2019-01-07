<?php
namespace App\Data\Models;

class Topic extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name'];

    protected $orderBy = ['name' => 'asc'];
}
