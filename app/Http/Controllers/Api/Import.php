<?php

namespace App\Http\Controllers\Api;

use App\Services\CSV;
use App\Http\Controllers\Controller;
use App\Http\Requests\Import as ImportRequest;

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
        $data = (new CSV())->parse($request->get('file'));

        info($data);
    }
}
