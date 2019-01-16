<?php

namespace Tests\Browser;

use DatabaseSeeder;
use App\Data\Repositories\Users as UsersRepository;
use function PHPSTORM_META\type;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class LoginTest extends DuskTestCase
{
    //    /**
    //     * A basic browser test example.
    //     *
    //     * @return void
    //     */
        public function testHome()
        {
            $this->browse(function (Browser $browser) {
                $browser->visit('login#/')->assertSee('Lembrar');
            });
        }
        public function testLoginFail()
        {
            $this->browse(function (Browser $browser) {
                $browser
                    ->visit('login#/')
                    ->type('email', '4321')
                    ->type('password', '4321')
                    ->click('@login-button')
                    ->assertPathIs('/login')
                    ->screenshot('teste de login falho');

            });
        }
        public function testLogin()
        {
            $this->browse(function (Browser $browser) {
//                $this->artisan('migrate');
//                $this->seed(DatabaseSeeder::class);
                $browser->visit('login#/')
                        ->type('email', app(UsersRepository::class)->randomElement()->username)
                        ->type('password', 'secret')
                        ->screenshot('teste usuario')
                        ->click('@login-button')
//                        ->assertPathIs('admin#/dashboard')
                        ->screenshot('teste de Login');

            });
        }
}
