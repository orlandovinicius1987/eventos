<?php

use App\Data\Models\Event as EventModel;
use Illuminate\Database\Seeder;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(EventModel::class, 50)->create();
    }
}
