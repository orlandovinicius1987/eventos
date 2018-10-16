<?php

use App\Data\Models\Person as PersonModel;
use Illuminate\Database\Seeder;

class PeopleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(PersonModel::class, 50)->create();
    }
}
