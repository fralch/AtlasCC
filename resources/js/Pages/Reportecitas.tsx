import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

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

const Reportecitas: React.FC = () => {
  const [citas, setCitas] = useState<Cita[]>([]);
  const [filteredCitas, setFilteredCitas] = useState<Cita[]>([]);
  const [fecha, setFecha] = useState<string>("");
  const [nombrePaciente, setNombrePaciente] = useState<string>("");
  const [nombreDoctor, setNombreDoctor] = useState<string>("");
  const [estado, setEstado] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("");

  useEffect(() => {
    axios.get('http://50.28.103.10/citas')
      .then(response => {
        setCitas(response.data);
        setFilteredCitas(response.data);
        console.log(response.data);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const handleSearch = () => {
    let filtered = citas;

    if (fecha) {
      filtered = filtered.filter(cita => cita.fecha === fecha);
    }
    if (nombrePaciente) {
      filtered = filtered.filter(cita => cita.paciente.nombres.toLowerCase().includes(nombrePaciente.toLowerCase()));
    }
    if (nombreDoctor) {
      filtered = filtered.filter(cita => cita.doctor.nombres.toLowerCase().includes(nombreDoctor.toLowerCase()));
    }
    if (estado) {
      filtered = filtered.filter(cita => cita.estado.toLowerCase() === estado.toLowerCase());
    }
    if (motivo) {
      filtered = filtered.filter(cita => cita.motivo.toLowerCase().includes(motivo.toLowerCase()));
    }

    setFilteredCitas(filtered);
  };

  const handleReset = () => {
    setFecha("");
    setNombrePaciente("");
    setNombreDoctor("");
    setEstado("");
    setMotivo("");
    setFilteredCitas(citas);
  };
  const downloadPDF = () => {
    const doc = new jsPDF() as any;
    doc.autoTable({
      head: [["Motivo", "Nombre del Paciente", "Nombre del Doctor", "Fecha", "Hora", "Estado"]],
      body: filteredCitas.map(cita => [
        cita.motivo,
        cita.paciente.nombres,
        cita.doctor.nombres,
        cita.fecha,
        cita.hora,
        cita.estado
      ]),
    });
    doc.save("reporte_citas.pdf");
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredCitas.map(cita => ({
      Motivo: cita.motivo,
      "Nombre del Paciente": cita.paciente.nombres,
      "Nombre del Doctor": cita.doctor.nombres,
      Fecha: cita.fecha,
      Hora: cita.hora,
      Estado: cita.estado
    })));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Reportecitas");
    XLSX.writeFile(wb, "reporte_citas.xlsx");
  };

  return (
    <div className="min-h-screen bg-blue-100 text-blue-900 p-6">
      <Head title="Reporte" />
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Título */}
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Reporte
        </h1>

        {/* Filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Nombre del Paciente"
            value={nombrePaciente}
            onChange={(e) => setNombrePaciente(e.target.value)}
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Nombre del Doctor"
            value={nombreDoctor}
            onChange={(e) => setNombreDoctor(e.target.value)}
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Estado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Confirmada">Confirmada</option>
            <option value="Cancelada">Cancelada</option>
          </select>
          <input
            type="text"
            placeholder="Motivo"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSearch}
            className="col-span-1 bg-blue-700 text-white rounded px-4 py-2"
          >
            Buscar
          </button>
          <button
            onClick={handleReset}
            className="col-span-1 bg-red-500 text-white rounded px-4 py-2"
          >
            Mostrar Todo
          </button>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 mb-6">
          <button
            onClick={downloadPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow w-full sm:w-auto"
          >
            Descargar PDF
          </button>
          <button
            onClick={downloadExcel}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow w-full sm:w-auto"
          >
            Descargar Excel
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
              {filteredCitas.length > 0 ? (
                filteredCitas.map((cita) => (
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
       
        <p className="text-blue-700 font-light">Atlas CC - Healing Your Health</p>
      </footer>
    </div>
  );
};

export default Reportecitas;
