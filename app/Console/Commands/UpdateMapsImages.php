<?php

namespace App\Console\Commands;

use App\Data\Models\Address;
use Illuminate\Console\Command;

class UpdateMapsImages extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'eventos:update-maps-images {id?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update all subevents map images';

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
        Address::fromSubEvent()
            ->get()
            ->each(function (Address $address) {
                $address->saveGoogleMapsStaticImage();
            });
    }
}
