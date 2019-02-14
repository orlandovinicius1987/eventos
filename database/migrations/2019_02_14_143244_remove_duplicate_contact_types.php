<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Repositories\ContactTypes as ContactTypesRepository;
use App\Data\Models\ContactType as ContactTypeModel;
use App\Data\Models\Contact as ContactModel;



class RemoveDuplicateContactTypes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $contactTypesToDelete = ContactTypeModel::whereNotIn('id',ContactModel::select('contact_type_id'));

        foreach($contactTypesToDelete->get() as $contactType){
            $contactType->delete();
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
