<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DishController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
// ->middleware('auth:sanctum');



// Route::get('/dishes', DishController::class, 'index');
// Route::post('/dishes', DishController::class, 'store') ->middleware('admin');
// Route::get('/dishes/{id}', DishController::class, 'show');
// Route::put('/dishes/{id}', DishController::class, 'update');
// Route::delete('/dishes/{id}', DishController::class, 'destroy');




Route::apiResource('/dishes', DishController::class);
// ->middleware('admin');




