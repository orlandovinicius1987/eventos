<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
//use App\Data\Repositories\Events as EventsRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class SendEmailTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */

    public function testSendEmail()
    {
        $this->browse(function (Browser $browser) {
            $user = app(UsersRepository::class)->randomElement()->username;
            $this->browse(function (Browser $browser) use ($user) {
                $browser
                    ->loginAs(
                        app(UsersRepository::class)->findUserByEmail(
                            $user . '@alerj.rj.gov.br'
                        )
                    )
                    ->visit('/admin#')
                    ->waitForText('Painel')
                    ->click('@event-option')
                    ->pause('5000')
                    ->click('click-event')
                    ->pause('5000')
                    ->click('sub-event')
                    ->pause('5000')
                    ->waitForText('Nome')
                    ->click('@enviar-convites')
                    ->press('sim')
                    ->waitForText('convite enviado')
                    ->screenshot('teste de Criar evento');
            });
        });
    }
}
