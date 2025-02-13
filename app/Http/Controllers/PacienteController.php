<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paciente;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class PacienteController extends Controller
{
    // Get all patients
    public function index()
    {
        try {
            $pacientes = Paciente::all();
            return response()->json($pacientes, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching patients: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
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
            return response()->json($paciente, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching patient: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    // Create new patient
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|min:1',
            'email' => 'nullable|email',
            'telefono' => 'required|string|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $paciente = Paciente::create($request->all());
            return response()->json($paciente, 201);
        } catch (\Exception $e) {
            Log::error('Error creating patient: ' . $e->getMessage());
            return response()->json(['error' => 'Error creating patient'], 400);
        }
    }

    // Update existing patient
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|min:1',
            'email' => 'nullable|email',
            'telefono' => 'required|string|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $paciente = Paciente::find($id);
            if (!$paciente) {
                return response()->json(['error' => 'Patient not found'], 404);
            }
            $paciente->update($request->all());
            return response()->json($paciente, 200);
        } catch (\Exception $e) {
            Log::error('Error updating patient: ' . $e->getMessage());
            return response()->json(['error' => 'Error updating patient'], 400);
        }
    }

    // Delete patient
    public function destroy($id)
    {
        try {
            $paciente = Paciente::find($id);
            if (!$paciente) {
                return response()->json(['error' => 'Patient not found'], 404);
            }
            $paciente->delete();
            return response()->json(['message' => 'Patient deleted successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting patient: ' . $e->getMessage());
            return response()->json(['error' => 'Error deleting patient'], 400);
        }
    }
}
