<?php

namespace App\Data\Repositories\Traits;

use Illuminate\Database\Eloquent\Model;

trait DataProcessing
{
    protected $dataProcessingPlugins = [];

    /**
     * @param callable $plugin
     */
    public function addDataProcessingPlugin($plugin)
    {
        $this->dataProcessingPlugins[] = $plugin;
    }

    public function processData($data)
    {
        collect($this->dataProcessingPlugins)->each(function ($plugin) use (
            &$data
        ) {
            $data = coollect($data)->map(function ($item) use ($plugin) {
                if ($item instanceof Model) {
                    $item = $item->getAttributes();
                }

                $item = $plugin($item);

                return $item;
            });
        });

        return $data;
    }
}
