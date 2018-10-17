<?php

use App\Data\Models\Advisor as AdvisorModel;
use App\Data\Models\AdvisorType as AdvisorTypeModel;
use Illuminate\Database\Seeder;

class AdvisorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(AdvisorTypeModel::class, 50)->create();
        factory(AdvisorModel::class, 50)->create();
    }
}
