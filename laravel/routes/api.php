<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskFiltersController;
use App\Http\Controllers\RepublicStatesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/taskbyname/{name}', [TaskFiltersController::class, 'findTaskByName']);
Route::get('/taskbystate/{state_id}', [TaskFiltersController::class, 'findTaskByState']);
Route::apiResource('registereduser', RegisteredUserController::class);
Route::apiResource('user', UserController::class);
Route::apiResource('task', TaskController::class);
Route::apiResource('republicstates', RepublicStatesController::class);
