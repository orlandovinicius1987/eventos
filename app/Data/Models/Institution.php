<?php
namespace App\Data\Models;

class Institution extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'initials', 'party_number', 'is_party'];
}
