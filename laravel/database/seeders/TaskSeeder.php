<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::create([
            "title" => "tarea de prueba 01",
            "description" => "descripción de prueba 01",
            "state_id" => 1,
            "task_creator" => "Julieta Jimenez",
            "likes" => 23
        ]);
        Task::create([
            "title" => "tarea de prueba 02",
            "description" => "description de prueba 02",
            "state_id" => 2,
            "task_creator" => "Julio César",
            "likes" => 24
        ]);
        Task::create([
            "title" => "tarea de prueba 03",
            "description" => "descripción de prueba 03",
            "state_id" => 4,
            "task_creator" => "Julian Alonzo",
            "likes" => 233
        ]);
        Task::create([
            "title" => "tarea de prueba 04",
            "description" => "descripción de prueba 04",
            "state_id" => 5,
            "task_creator" => "Paola Alejandra",
            "likes" => 23
        ]);
        Task::create([
            "title" => "tarea de prueba 05",
            "description" => "descripción de prueba 05",
            "state_id" => 6,
            "task_creator" => "Juan Eduardo",
            "likes" => 245
        ]);
        Task::create([
            "title" => "tarea de prueba 06",
            "description" => "descripción de prueba 06",
            "state_id" => 3,
            "task_creator" => "Victoria",
            "likes" => 89
        ]);
        Task::create([
            "title" => "tarea de prueba 07",
            "description" => "descripción de prueba 07",
            "state_id" => 23,
            "task_creator" => "Matias",
            "likes" => 0
        ]);
        Task::create([
            "title" => "tarea de pruaba 08",
            "description" => "descripción de prueba 08",
            "state_id" => 3,
            "task_creator" => "Rebeca",
            "likes" => 0
        ]);
        Task::create([
            "title" => "tarea de prueba 09",
            "description" => "descripción de prueba 09",
            "state_id" => 3,
            "task_creator" => "Rebeca",
            "likes" => 0
        ]);
        Task::create([
            "title" => "tarea de prueba 10",
            "description" => "descripción de prueba 10",
            "state_id" => 3,
            "task_creator" => "Laura",
            "likes" => 500
        ]);
    }
}
