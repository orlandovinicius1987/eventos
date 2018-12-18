<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
//use App\Data\Repositories\Events as EventsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CreatNewCategoryTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testCriarCategoria()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->assertSee('Painel')
                    ->click('@opcao-tabelas')
                    ->waitForText('Importar')
                    ->click('@opcao-categorias')
//                    ->waitForText('categorias')
                    ->pause('2000')
                    ->click('@create-category-button')
                    ->waitForText('Nova Categoria')
                    ->type('@category-name', 'nova categoria')
                    ->click('@record-category-button')
//                    ->waitForText('#')
                    ->waitForText('nova categoria')
//                    ->assertSee('nova categoria')
                    ->screenshot('teste de Criar Categoria');
            });
        });
    }
}
