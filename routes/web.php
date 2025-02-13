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


Route::get('/report', function () {
    return Inertia::render('Reportecitas');
});

// Ruta para obtener todos los pacientes
Route::get('/pacientes', [PacienteController::class, 'index']);

// Ruta para obtener un paciente por ID
Route::get('/pacientes/{id}', [PacienteController::class, 'show']);

// Ruta para crear un nuevo paciente
Route::post('/pacientes', [PacienteController::class, 'store']);

// Ruta para actualizar un paciente existente (si tienes un método update en tu controlador)
Route::put('/pacientes/{id}', [PacienteController::class, 'update']);

// Ruta para eliminar un paciente (si tienes un método destroy en tu controlador)
Route::delete('/pacientes/{id}', [PacienteController::class, 'destroy']);

// Ruta para obtener todos los doctores
Route::get('/doctors', [DoctorController::class, 'index']);

// Ruta para obtener un doctor por ID
Route::get('/doctors/{id}', [DoctorController::class, 'show']);

// Ruta para crear un nuevo doctor
Route::post('/doctors', [DoctorController::class, 'store']);

// Ruta para obtener todas las citas
Route::get('/citas', [CitaController::class, 'index']);

// Ruta para obtener una cita por ID
Route::get('/citas/{id}', [CitaController::class, 'show']);

// Ruta para crear una nueva cita
Route::post('/citas', [CitaController::class, 'store']);

// Ruta para actualizar el estado de una cita
Route::put('/citas/{id}/status', [CitaController::class, 'updateStatus']);



