<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    // Definir la tabla asociada al modelo
    protected $table = 'citas';

    // Definir los campos que se pueden asignar en masa
    protected $fillable = [
        'paciente_id',
        'doctor_id',
        'fecha',
        'hora',
        'estado',
        'motivo',
    ];

    // Definir los campos que deben ser ocultados en las respuestas JSON
    protected $hidden = [
        // Puedes agregar campos que no quieras que se muestren en las respuestas JSON
    ];

    // Definir los campos que deben ser tratados como fechas
    protected $dates = [
        'fecha',
        'created_at',
        'updated_at',
    ];

    // Definir las relaciones
    public function paciente()
    {
        return $this->belongsTo(Paciente::class);
    }

    public function doctor()
    {
        return $this->belongsTo(Doctor::class);
    }
}
