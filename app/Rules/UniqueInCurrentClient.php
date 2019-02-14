<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\DB;

class UniqueInCurrentClient implements Rule
{
    public $table;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($table)
    {
        $this->table = $table;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $result = DB::table($this->table)
            ->where(function ($query) use ($attribute, $value) {
                $query
                    ->where($attribute, '=', $value)
                    ->where('client_id', '=', get_current_client()->id);
            })
            ->first();

        return $result ? false : true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Campo já existente nos cadastros.';
    }
}
