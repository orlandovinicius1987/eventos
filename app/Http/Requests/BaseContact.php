<?php

namespace App\Http\Requests;

class BaseContact extends Request
{
    /**
     * @return array
     */
    public function sanitize()
    {
        $input = $this->all();
        $input['contact'] = trim($input['contact']);
        $this->replace($input);
        return $this->all();
    }
}
