<?php

namespace Tests\Browser;

use App\Data\Repositories\Users as UsersRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class CriarEventoTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */

    public function testCriarEvento()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/admin#/events')
            ->type('@evetName', '')
            ->type('password', '4321');
            $browser->click('@login_button')
                ->assertPathIs('/login');
    });
    }



}
