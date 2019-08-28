<?php

namespace App\Console\Commands;

use App\Data\Models\Client;
use Illuminate\Console\Command;

class FixSettings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eventos:fix-settings';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fix the settings columns in clients table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Client::all()->each(function ($client) {
            $this->info("Fixing {$client->name}");

            $client->fixSettings();
        });

        $this->info('Done.');

        return true;
    }
}
