<?php
namespace App\Data\Models;

class CategorisableCategory extends Base
{
    /**
     * @var array
     */
    protected $fillable = ['categorisable_type', 'category_id'];

    public function categorisable()
    {
        return $this->morphTo();
    }
}
