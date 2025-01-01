<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Doctor;
use Illuminate\Support\Facades\Validator;

class DoctorController extends Controller
{
    // Get all doctors
    public function index()
    {
        try {
            $doctors = Doctor::all();
            return response()->json($doctors);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Get doctor by ID
    public function show($id)
    {
        try {
            $doctor = Doctor::find($id);
            if (!$doctor) {
                return response()->json(['error' => 'Doctor not found'], 404);
            }
            return response()->json($doctor);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // Create new doctor
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombres' => 'required|string|min:1',
            'especialidad' => 'required|string|min:1',
            'email' => 'required|email|unique:doctors,email',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $doctor = Doctor::create($request->all());
            return response()->json($doctor, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
