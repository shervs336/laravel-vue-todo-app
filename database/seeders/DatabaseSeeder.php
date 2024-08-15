<?php

namespace Database\Seeders;

use App\Models\Todo;
use App\Enums\ToDoStatus;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Todo::factory()->count(7)->create(['status' => ToDoStatus::PENDING]);
        Todo::factory()->count(3)->create(['status' => ToDoStatus::PENDING, 'due_date_at' => now()]);
        Todo::factory()->count(2)->create(['status' => ToDoStatus::IN_PROGRESS]);
        Todo::factory()->count(3)->create(['status' => ToDoStatus::COMPLETED]);
    }
}
