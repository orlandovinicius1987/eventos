<?php

namespace App\Data\Concerns;

trait SetCurrentClient
{
    public function save(array $options = [])
    {
        $this->client_id = is_null($this->client_id)
            ? auth()->user()->client_id
            : $this->client_id;

        return parent::save($options);
    }
}
