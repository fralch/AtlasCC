<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PacienteController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\CitaController;

// Web Views
Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/report', function () {
    return Inertia::render('Reportecitas');
});

// Pacientes Routes
Route::get('/pacientes', [PacienteController::class, 'index']);          // List all patients
Route::post('/pacientes', [PacienteController::class, 'store']);         // Create new patient
Route::get('/pacientes/{paciente}', [PacienteController::class, 'show']); // Show single patient
Route::put('/pacientes/{paciente}', [PacienteController::class, 'update']); // Update patient
Route::delete('/pacientes/{paciente}', [PacienteController::class, 'destroy']); // Delete patient

// Doctors Routes
Route::get('/doctors', [DoctorController::class, 'index']);             // List all doctors
Route::post('/doctors', [DoctorController::class, 'store']);            // Create new doctor
Route::get('/doctors/{doctor}', [DoctorController::class, 'show']);     // Show single doctor
Route::put('/doctors/{doctor}', [DoctorController::class, 'update']);    // Update doctor
Route::delete('/doctors/{doctor}', [DoctorController::class, 'destroy']); // Delete doctor

// Citas Routes
Route::get('/citas', [CitaController::class, 'index']);                 // List all appointments
Route::post('/citas', [CitaController::class, 'store']);                // Create new appointment
Route::get('/citas/{cita}', [CitaController::class, 'show']);          // Show single appointment
Route::put('/citas/{cita}', [CitaController::class, 'update']);        // Update appointment
Route::delete('/citas/{cita}', [CitaController::class, 'destroy']);     // Delete appointment

// WhatsApp Integration
Route::post('/whatsapp_send', [CitaController::class, 'whatsappSendPost']);
