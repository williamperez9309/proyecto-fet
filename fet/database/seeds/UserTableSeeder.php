<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{

    public function run()
    {
        $users = array(
            [
                
            'name' => 'william fernando perez',
            'email' => 'williamperez9309@gmail.com',
            'password' => \Hash::make('123456789')
            ],

           [
                
            'name' => 'sebastian perez',
            'email' => 'sebastianperez@gmail.com',
            'password' => \Hash::make('123456789')
           ],
        ); 

        foreach($users as $user){
            User::updateOrCreate($user);
        }
    }
}
