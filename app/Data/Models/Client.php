<?php

namespace App\Data\Models;

use App\Services\Markdown\Service;

class Client extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'settings'];

    protected $orderBy = ['name' => 'asc'];

    protected $casts = [
        'settings' => 'array',
    ];

    public function getSlugAttribute()
    {
        return str_slug($this->name);
    }

    public function getSignatureHtmlAttribute()
    {
        return app(Service::class)->text($this->settings['signature']);
    }
}
