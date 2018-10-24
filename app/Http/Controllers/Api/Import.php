<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Import as ImportRequest;
use App\Services\DataImporter\Service as DataImporter;

class Import extends Controller
{
    /**
     * Store
     *
     * @param ImportRequest $request
     * @return array
     */
    public function store(ImportRequest $request)
    {
        app(DataImporter::class)->importCSV($request->get('file'));

        return $this->emptyResponse();
    }
}
