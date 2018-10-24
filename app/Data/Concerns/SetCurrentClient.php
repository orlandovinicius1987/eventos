<?php

namespace App\Data\Concerns;

trait SetCurrentClient
{
    public function save(array $options = [])
    {
        $this->client_id = is_null($this->client_id)
            ? get_current_client_id()
            : $this->client_id;

        return parent::save($options);
    }
}
