<?php

namespace App\Data\Models;

use App\Services\Markdown\Service;

class Client extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['name', 'signature'];

    protected $orderBy = ['name' => 'asc'];

    public function getSlugAttribute()
    {
        return str_slug($this->name);
    }

    public function getSignatureHtmlAttribute()
    {
        return app(Service::class)->text($this->signature);
    }
}
