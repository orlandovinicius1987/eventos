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
        return app(Service::class)->text($this->getSetting('signature'));
    }

    public function getSetting($name)
    {
        return array_get($this->settings, $name);
    }

    public function getSettingsAttribute()
    {
        return json_decode($this->attributes['settings'], true);
    }

    public function setSettingsAttribute($settings)
    {
        $this->attributes['settings'] = is_array($settings)
            ? json_encode($settings)
            : $settings;
    }
}
