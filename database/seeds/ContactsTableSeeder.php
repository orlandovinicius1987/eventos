<?php

use App\Data\Models\Contact as ContactModel;
use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(ContactModel::class, 50)->create();
    }
}
