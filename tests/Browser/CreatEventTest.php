<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
//use App\Data\Repositories\Events as EventsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CreatEventTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testCriarEvento()
    {
//        $this->artisan('migrate:fresh');
//        $this->seed(DatabaseSeeder::class);
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
//            $user=factory(UsersRepository::class)->make() ;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#/dashboard')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-eventos')
                    ->waitForText('Nome')
                    ->click('@create-event-button')
                    ->pause('2000')
//                    ->assertSee('Novo Evento')
                    ->type('@event-name', 'evento teste')
                    ->click('@record-event-button')
                    ->pause('20000')
                    ->waitForText('evento teste')
                    ->pause('4000')
                    ->screenshot('teste de Criar evento');
            });
        });
    }
}
