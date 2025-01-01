<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    // Definir la tabla asociada al modelo
    protected $table = 'doctors';

    // Definir los campos que se pueden asignar en masa
    protected $fillable = [
        'nombres',
        'especialidad',
        'telefono',
        'email',
        'direccion',
        'estado',
        'foto',
    ];

    // Definir los campos que deben ser ocultados en las respuestas JSON
    protected $hidden = [
        // Puedes agregar campos que no quieras que se muestren en las respuestas JSON
    ];

    // Definir los campos que deben ser tratados como fechas
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    // Definir las relaciones si es necesario
    // Por ejemplo, si un doctor tiene muchas citas, puedes definir una relación hasMany
    // public function citas()
    // {
    //     return $this->hasMany(Cita::class);
    // }
}
