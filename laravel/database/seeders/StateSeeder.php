<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RepublicState;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RepublicState::create([
            'state_name' => 'Aguascalientes'
        ]);
        RepublicState::create([
            'state_name' => 'Baja California'
        ]);
        RepublicState::create([
            'state_name' => 'Chiapas'
        ]);
        RepublicState::create([
            'state_name' => 'Chihuahua'
        ]);
        RepublicState::create([
            'state_name' => 'Coahuila de Zaragoza'
        ]);
        RepublicState::create([
            'state_name' => 'Colima'
        ]);
        RepublicState::create([
            'state_name' => 'Durango'
        ]);
        RepublicState::create([
            'state_name' => 'Estado de México'
        ]);
        RepublicState::create([
            'state_name' => 'Guanajuato'
        ]);
        RepublicState::create([
            'state_name' => 'Guerrero'
        ]);
        RepublicState::create([
            'state_name' => 'Hidalgo'
        ]);
        RepublicState::create([
            'state_name' => 'Jalisco'
        ]);
        RepublicState::create([
            'state_name' => 'Michoacán de Ocampo'
        ]);
        RepublicState::create([
            'state_name' => 'Morelos'
        ]);
        RepublicState::create([
            'state_name' => 'Nayarit'
        ]);
        RepublicState::create([
            'state_name' => 'Nuevo León'
        ]);
        RepublicState::create([
            'state_name' => 'Oaxaca'
        ]);
        RepublicState::create([
            'state_name' => 'Puebla'
        ]);
        RepublicState::create([
            'state_name' => 'Querétaro'
        ]);
        RepublicState::create([
            'state_name' => 'Quintana Roo'
        ]);
        RepublicState::create([
            'state_name' => 'San Luis Potosí'
        ]);
        RepublicState::create([
            'state_name' => 'Sinaloa'
        ]);
        RepublicState::create([
            'state_name' => 'Sonora'
        ]);
        RepublicState::create([
            'state_name' => 'Tabasco'
        ]);
        RepublicState::create([
            'state_name' => 'Tamaulipas'
        ]);
        RepublicState::create([
            'state_name' => 'Tlaxcala'
        ]);
        RepublicState::create([
            'state_name' => 'Veracruz de Ignacio de la Llave'
        ]);
        RepublicState::create([
            'state_name' => 'Yucatán'
        ]);
        RepublicState::create([
            'state_name' => 'Zacatecas'
        ]);
       
    }
}
