<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
//use App\Data\Repositories\Events as EventsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CreatFuncaoTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testCriarFuncao()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/login#')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-tabelas')
                    ->waitForText('Import')
                    ->click('@opcao-funcao')
                    ->screenshot('screen tabela função')
//                    ->waitForText('#')
                    ->click('@create-roles-button')
                    ->waitForText('Nova Função')
                    ->type('@role-name', 'nova função')
                    ->click('@record-role-button')
                    ->screenshot('screen função gravada')
//                    ->waitForText('#')
                    ->waitForText('nova função')
                    ->assertSee('nova função')
                    ->screenshot('teste de Criar funcao');
            });
        });
    }
}
