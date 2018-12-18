<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
//use App\Data\Repositories\Events as EventsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CreatSubEventTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testCriarSubEvento()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-eventos')
                    ->pause('5000')
//                    ->waitForText('evento teste')
//                    ->assertSee('evento teste')
                    ->click('@dusk-do-evento')
                    ->waitForText('Confirmado')
                    ->click('@create-sub-event-button')
                    ->waitForText('Novo Sub Evento')
                    ->type('@sub-nome', 'sub teste')
                    ->keys('#date', '210219')
                    ->keys('#time', '00002315')
                    ->type('@sub-local', 'local qualquer')
                    ->click('@sub-gravar')
                    ->waitForText('Confirmado')
                    ->click('@dusk-do-evento')
                    ->waitForText('sub teste')
//                    ->pause('7000')
                    ->click('@confirm-subevent')
                    ->screenshot('teste criar sub evento');
            });
        });
    }
    public function testConvidarSubEvento()
    {
        $this->browse(function (Browser $browser) {
            $user = app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-eventos')
                    ->pause('10000')
//                    ->assertSee('evento teste')
                    ->click('@dusk-do-evento')
                    ->waitForText('Confirmado')
                    ->waitForText('sub teste')
                    ->click('@dusk-sub-event')
                    ->waitForText('convidados')
                    ->assertSee('convidados')
                    ->click('@add-convidado')
                    ->pause('5000')
//                    ->waitForText('Convidar Pessoas')
//                    ->waitForText('Herlandson')
                    ->click('@dusk-invite')
                    ->click('@dusk-invite-button')
                    ->click('@opcao-eventos')
                    ->waitForText('Herlandson')
//                    ->pause('5000')
                    ->screenshot('teste convidar sub evento');
            });
        });
    }
    public function testConfirmarSubEvento()
    {
        $this->browse(function (Browser $browser) {
            $user = app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-eventos')
                    ->pause('7000')
//                    ->waitForText('evento teste')
//                    ->pause('5000')
                    ->click('@dusk-do-evento')
                    ->waitForText('Confirmado')
                    ->waitForText('sub teste')
                    ->click('@confirm-subevent')
                    ->press('sim')
                    ->pause('5000')
                    ->screenshot('teste confirmar sub evento');
            });
        });
    }
}
