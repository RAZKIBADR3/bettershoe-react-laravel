<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class profileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Profile::insert([
            ['profilePic' => '1.jpg'],
            ['profilePic' => null],
            ['profilePic' => '3.jpg']
        ]);
    }
}
