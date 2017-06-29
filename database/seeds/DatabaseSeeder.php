<?php

    use Illuminate\Database\Seeder;
    use Illuminate\Database\Eloquent\Model;
    use App\Models\User;

    class DatabaseSeeder extends Seeder {

        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            Model::unguard();

            DB::table('users')->delete();


            $users = array(
                ['name' => 'Tanvir Anowar', 'email' => 'tanvir.net@gmail.com', 'password' => Hash::make('123456')],
                ['name' => 'Sanzeeb Second', 'email' => 'tanvir@carbon51.com', 'password' => Hash::make('123456')],

            );

            // Loop through each user above and create the record for them in the database
            foreach ($users as $user)
            {
                User::create($user);
            }

            Model::reguard();
        }
    }
