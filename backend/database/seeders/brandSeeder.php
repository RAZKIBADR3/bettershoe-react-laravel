<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class brandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::insert([
            ['title' => 'timberland'],
            ['title' => 'nike'],
            ['title' => 'vans'],
            ['title' => 'adidas'],
            ['title' => 'converse'],
        ]);
    }
}
