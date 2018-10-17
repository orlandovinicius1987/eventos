<?php

use Faker\Generator as Faker;

use App\Data\Repositories\People as PeopleRepository;
use App\Data\Repositories\Advisors as AdvisorsRepository;
use App\Data\Repositories\ContactsTypes as ContactsTypesRepository;
use App\Data\Repositories\PoliticalParties as PoliticalPartiesRepository;
use App\Data\Repositories\Clients as ClientsRepository;
/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Data\Models\Contact::class, function (Faker $faker) {
    $array = ['Person', 'Advisor'];
    $randomKey = array_rand($array);

    if ($array[$randomKey] == 'Person') {
        $contactable_id = app(PeopleRepository::class)->randomElement()->id;
        $contactable_type = App\Data\Models\Person::class;
    } elseif ($array[$randomKey] == 'Advisor') {
        $contactable_id = app(AdvisorsRepository::class)->randomElement()->id;
        $contactable_type = App\Data\Models\Advisor::class;
    } elseif ($array[$randomKey] == 'PoliticalParty') {
        $contactable_id = app(
            PoliticalPartiesRepository::class
        )->randomElement()->id;
        $contactable_type = App\Data\Models\PoliticalParty::class;
    }

    $contactsType = app(ContactsTypesRepository::class)->randomElement();

    if ($contactsType->code == 'mobile') {
        $contact = $faker->numberBetween(10000000000, 99999999999);
    } elseif ($contactsType->code == 'whatsapp') {
        $contact = $faker->numberBetween(10000000000, 99999999999);
    } elseif ($contactsType->code == 'email') {
        $contact = $faker->email;
    } elseif ($contactsType->code == 'phone') {
        $contact = $faker->numberBetween(1000000000, 9999999999);
    }

    return [
        'contact_type_id' => $contactsType->id,
        'contact' => $contact,
        'contactable_id' => $contactable_id,
        'contactable_type' => $contactable_type,
        'client_id' => app(ClientsRepository::class)->randomElement()->id
    ];
});
