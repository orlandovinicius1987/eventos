<?php

namespace App\Data\Concerns;

trait SetPersonInstitution
{
    public function save(array $options = [])
    {
        $this->is_active = true;

        return parent::save($options);
    }
}
