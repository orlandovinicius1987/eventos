<?php

use App\Data\Models\Role as RoleModel;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(RoleModel::class, 50)->create();
    }
}
