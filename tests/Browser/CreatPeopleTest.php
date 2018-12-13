<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
use App\Data\Repositories\Institutions as InstitutionsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CreatPeopleTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testCriarPessoa()
    {
        $this->browse(function (Browser $browser) {
            $browser->screenshot('teste tela branca');
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->click('@opcao-pessoas')
                    ->waitForText('Tratamento')
                    ->click('@create-people-button')
//                    ->assertSee('Nova Pessoa')
                    ->pause('2000')
                    ->type('@people-name', 'Herlandson')
                    ->pause('5000')
                    ->click('@gravar-people-button')
                    ->pause('5000')
                    ->waitForText('Herlandson')
                    ->press('sim')
                    ->pause('4000')
                    ->screenshot('teste de pessoa');

            });
        });
    }
    public function testAddFunction()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->click('@opcao-pessoas')
                    ->waitForText('Tratamento')
                    ->pause('20000')
//                    ->waitForText('Herlandson')
//                    ->screenshot('teste nome addfunction')
                    ->click('@dusk-da-pessoa')
                    ->pause('5000')
                    ->waitForText('Categorias')
                    ->click('@add-function')
                    ->pause('5000')
                    ->waitForText('Instituição')
                    ->script(["document.getElementById('institution_id').parentElement.__vue__.select(7)"]);
//                    ->script(["document.getElementById('institution_id').parentElement.__vue__.select("+app(InstitutionsRepository::class)->randomElement()->id+")"]);
                $browser
                    ->script(["document.getElementById('role_id').parentElement.__vue__.select(1)",]);
                $browser
                    ->screenshot('teste para a instituição')
                    ->click('@ativo-dusk')
                    ->type('@title-dusk', 'Titulo')
                    ->screenshot('teste titulo e ativo')
                    ->click('@gravar-funções-pessoas')
//                    ->waitForText('Status')
//                    ->assertSee('Status')
                    ->pause('15000')
                    ->screenshot('teste de função pessoa');

            });
        });
    }
    public function testAddCategory()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->screenshot('teste do novo erro')
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->click('@opcao-pessoas')
                    ->waitForText('Tratamento')
                    ->pause('20000')
//                    ->assertSee('Herlandson')
                    ->click('@dusk-da-pessoa')
                    ->waitForText('Categorias')
                    ->click('@add-category')
                    ->waitForText('Associar Categorias')
//                    ->waitForText('nova categoria')
                    ->pause('5000')
                    ->click('@select-category-dusk')
                    ->click('@associate-category-dusk')
                    ->waitForText('Tratamento')
                    ->pause('7000')
//                    ->waitForText('nova categoria')
                    ->screenshot('teste de categoria pessoa');

            });
        });
    }

    public function testAddContact()
    {
        $this->browse(function (Browser $browser) {
            $user=app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser->loginAs(app(UsersRepository::class)->findUserByEmail($user . '@alerj.rj.gov.br'))
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->click('@opcao-pessoas')
                    ->waitForText('Tratamento')
//                    ->waitForText('Herlandson')
                    ->pause('20000')
                    ->screenshot('teste nome addcontact')
                    ->click('@dusk-da-pessoa')
                    ->waitForText('Categorias')
                    ->pause('5000')
//                    ->waitForText('nova função')
                    ->click('@role-click')
                    ->waitForText('Contatos')
                    ->click('@add-contact')
                    ->waitForText('Novo Contato')
                    ->script(["document.getElementById('contact_type_id').parentElement.__vue__.select(3)",]);
                $browser->screenshot('teste email')
                    ->click('@contact-email')
                    ->type('@contact-email', 'contato@abc.net')
                    ->screenshot('teste email')
                    ->click('@contact-active')
                    ->click('@record-contact-button')
//                    ->waitForText('nova função')
                    ->waitForText('contato@abc.net')
                    ->pause('3000')
                    ->assertSee('contato@abc.net')
                    ->screenshot('teste contato da pessoa');

            });
        });
    }
}
