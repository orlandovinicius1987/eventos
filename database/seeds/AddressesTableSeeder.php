<?php

use App\Data\Models\Address as AddressModel;
use Illuminate\Database\Seeder;

class AddressesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(AddressModel::class, 50)->create();
    }
}
