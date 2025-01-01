<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\CitaController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});



Route::apiResource('pacientes', PacienteController::class);
Route::apiResource('doctors', DoctorController::class);
Route::apiResource('citas', CitaController::class);


