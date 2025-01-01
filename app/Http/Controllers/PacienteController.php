<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paciente;
use Illuminate\Support\Facades\Validator;

class PacienteController extends Controller
{
    // Get all patients
    public function index()
    {
        try {
            $pacientes = Paciente::all();
            return response()->json($pacientes);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Get patient by ID
    public function show($id)
    {
        try {
            $paciente = Paciente::find($id);
            if (!$paciente) {
                return response()->json(['error' => 'Patient not found'], 404);
            }
            return response()->json($paciente);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Create new patient
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|min:1',
            'email' => 'required|email|unique:pacientes,email',
            'telefono' => 'required|string|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $paciente = Paciente::create($request->all());
            return response()->json($paciente, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
