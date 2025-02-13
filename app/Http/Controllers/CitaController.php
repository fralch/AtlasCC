<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
use App\Models\Paciente;
use App\Models\Doctor;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Client;  

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
            'hora' => 'required|date_format:H:i',
            'motivo' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $cita = Cita::create($request->all());

            // Obtén el número de teléfono del paciente
            $paciente = Paciente::find($request->paciente_id);
            $numeroTelefono = $paciente->telefono;

            // Envía un mensaje de WhatsApp
            $this->enviarMensajeWhatsApp($numeroTelefono, "Tu cita médica ha sido reservada para el " . $request->fecha . " a las " . $request->hora . ". Por favor, responde con 'Confirmar' para confirmar tu cita.");

            return response()->json($cita, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    
    private function enviarMensajeWhatsApp($numero, $mensaje)
    {
        $client = new Client();
        $response = $client->post('http://158.69.7.86:3000/send-message', [
            'json' => [
                'numero' => $numero,
                'mensaje' => $mensaje
            ]
        ]);

        echo $response->getBody();

        return $response;
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
