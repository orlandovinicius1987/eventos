<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Contact as ContactModel;
use App\Data\Repositories\Contacts as ContactsRepository;

class TrimContacts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $allContacts = ContactModel::all();
        foreach ($allContacts as $contact) {
            if ($contact->contact != trim($contact->contact)) {
                $contact->contact = trim($contact->contact);
                $contact->save();
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Can't go back
    }
}
