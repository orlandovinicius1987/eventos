<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Data\Repositories\ExportableData as ExportableDataRepository;

class ExportableData extends Controller
{
    /**
     * Get all data
     *
     * @return array
     */
    public function all()
    {
        return app(ExportableDataRepository::class)->all();
    }
}
