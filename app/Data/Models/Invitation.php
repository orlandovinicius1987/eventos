<?php
namespace App\Data\Models;

class Invitation extends Base
{
    /**
     * @var array
     */
    protected $fillable = [
        'subevent_id',
        'person_id',
        'accepted_at',
        'declined_at',
        'sent_at',
        'received_at',
        'checkin_at'];

}
