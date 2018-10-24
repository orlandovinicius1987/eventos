<?php

namespace Tests\Browser;

use App\Data\Repositories\Users as UsersRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginTest extends DuskTestCase
{
    /**
     * A basic browser test example.
     *
     * @return void
     */
    public function testHome()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/')->assertSee('Eventos');
        });
    }
    public function testLoginFail()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->type('email', '4321')
                ->type('password', '4321');
            $browser->click('@login_button')->assertPathIs('/login');
        });
    }
    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->type(
                    'email',
                    app(UsersRepository::class)->randomElement()->username
                )
                ->type('password', 'secret');
            $browser->click('@login_button')->assertPathIs('/admin');
        });
    }
}
