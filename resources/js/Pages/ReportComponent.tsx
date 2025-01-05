import React, { useEffect, useState } from "react";
import axios from "axios";

// Definir las interfaces
interface Paciente {
  id: number;
  nombres: string;
  telefono: string;
  email: string;
  direccion: string | null;
  fecha_nacimiento: string | null;
  genero: string | null;
  tipo_documento: string | null;
  numero_documento: string | null;
  estado: string;
  foto: string | null;
  created_at: string;
  updated_at: string;
}

interface Doctor {
  id: number;
  nombres: string;
  especialidad: string;
  telefono: string;
  email: string;
  direccion: string | null;
  estado: string;
  foto: string | null;
  created_at: string | null;
  updated_at: string | null;
}

interface Cita {
  id: number;
  paciente_id: number;
  doctor_id: number;
  fecha: string;
  hora: string;
  estado: string;
  motivo: string;
  created_at: string;
  updated_at: string;
  paciente: Paciente;
  doctor: Doctor;
}

const ReporteCitas: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/citas')
      .then(response => {
        setCitas(response.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  return (
    <div className="min-h-screen bg-blue-100 text-blue-900 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Título */}
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Reporte
        </h1>

        {/* Filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <input
            type="date"
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Nombre del Paciente"
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Nombre del Doctor"
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300">
            <option>Estado</option>
            <option>Pendiente</option>
            <option>Confirmada</option>
            <option>Cancelada</option>
          </select>
          <input
            type="text"
            placeholder="Motivo"
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="col-span-1 bg-blue-700 text-white rounded px-4 py-2">
            🔍
          </button>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mb-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow w-full sm:w-auto">
            Descargar
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow w-full sm:w-auto">
            Mostrar
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-blue-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-blue-300 p-2">Motivo</th>
                <th className="border border-blue-300 p-2">Nombre del Paciente</th>
                <th className="border border-blue-300 p-2">Nombre del Doctor</th>
                <th className="border border-blue-300 p-2">Fecha</th>
                <th className="border border-blue-300 p-2">Hora</th>
                <th className="border border-blue-300 p-2">Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.length > 0 ? (
                citas.map((cita) => (
                  <tr key={cita.id}>
                    <td className="border border-blue-300 p-2">{cita.motivo}</td>
                    <td className="border border-blue-300 p-2">{cita.paciente.nombres}</td>
                    <td className="border border-blue-300 p-2">{cita.doctor.nombres}</td>
                    <td className="border border-blue-300 p-2">{cita.fecha}</td>
                    <td className="border border-blue-300 p-2">{cita.hora}</td>
                    <td className="border border-blue-300 p-2">{cita.estado}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border border-blue-300 p-2 text-center" colSpan={6}>
                    <span className="text-gray-500">Sin datos disponibles</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow w-full sm:w-auto mb-2 sm:mb-0">
            ◀ Anterior
          </button>
          <span className="text-blue-800 font-bold">1</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow w-full sm:w-auto">
            Siguiente ▶
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <img
          src="/logo.png"
          alt="Atlas CC Logo"
          className="h-12 mx-auto"
        />
        <p className="text-blue-700 font-light">Atlas CC - Healing Your Health</p>
      </footer>
    </div>
  );
};

export default ReporteCitas;
