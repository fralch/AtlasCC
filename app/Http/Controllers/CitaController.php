<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Paciente;
use App\Models\Doctor;
use Illuminate\Support\Facades\Validator;

class CitaController extends Controller
{
    // Get all appointments
    public function index()
    {
        try {
            $citas = Cita::with(['paciente', 'doctor'])->get();
            return response()->json($citas);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Get appointment by ID
    public function show($id)
    {
        try {
            $cita = Cita::with(['paciente', 'doctor'])->find($id);
            if (!$cita) {
                return response()->json(['error' => 'Appointment not found'], 404);
            }
            return response()->json($cita);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Create new appointment
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'paciente_id' => 'required|integer|exists:pacientes,id',
            'doctor_id' => 'required|integer|exists:doctors,id',
            'fecha' => 'required|date',
            'hora' => 'required|date_format:H:i:s',
            'motivo' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $cita = Cita::create($request->all());
            return response()->json($cita, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    // Update appointment status
    public function updateStatus(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'estado' => 'required|in:Pendiente,Confirmada,Cancelada',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $cita = Cita::find($id);
            if (!$cita) {
                return response()->json(['error' => 'Appointment not found'], 404);
            }

            $cita->estado = $request->estado;
            $cita->save();

            return response()->json(['message' => 'Appointment status updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
