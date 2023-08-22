<?php

namespace Database\Seeders;

use App\Models\User;
use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $date = new DateTime('now');
        $date3 = date('1994-05-18');$password1 = bcrypt('hafid123');
        $date1 = date('2002-06-10');$password2 = bcrypt('123456');
        $date2 = date('2003-10-21');$password3 = bcrypt('123456');
        User::insert([
            ['name'=>'hafid', 'birthday'=>$date1, 'email'=>'hafid.admin@gmail.com', 'password'=>$password1, 'role'=>'admin', 'active'=>1, 'profile_id'=>1, 'created_at'=>$date, 'updated_at'=>$date],
            ['name'=>'johnwick5', 'birthday'=>$date2, 'email'=>'johnwick5@gmail.com', 'password'=>$password2, 'role'=>'user', 'active'=>1, 'profile_id'=>2, 'created_at'=>$date, 'updated_at'=>$date],
            ['name'=>'saad', 'birthday'=>$date3, 'email'=>'saad.brada@gmail.com', 'password'=>$password3, 'role'=>'user', 'active'=>1, 'profile_id'=>3, 'created_at'=>$date, 'updated_at'=>$date]
        ]);
    }
}
