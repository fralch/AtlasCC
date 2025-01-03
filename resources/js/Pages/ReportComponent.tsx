import React from "react";

const ReporteCitas = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-blue-900 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Título */}
        <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">
          Reporte
        </h1>

        {/* Filtros */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          <input
            type="date"
            className="col-span-1 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select className="col-span-1 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300">
            <option>Servicio</option>
          </select>
          <input
            type="text"
            placeholder="Nombre"
            className="col-span-1 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <select className="col-span-1 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300">
            <option>Estado</option>
          </select>
          <select className="col-span-1 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300">
            <option>Pago</option>
          </select>
          <input
            type="text"
            placeholder="Asunto"
            className="col-span-4 sm:col-span-5 lg:col-span-5 p-2 border border-blue-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="col-span-1 bg-blue-700 text-white rounded px-4 py-2">
            🔍
          </button>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-4 mb-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
            Descargar
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow">
            Mostrar
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-blue-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-blue-300 p-2">Asunto</th>
                <th className="border border-blue-300 p-2">Nombre del Paciente</th>
                <th className="border border-blue-300 p-2">Fecha</th>
                <th className="border border-blue-300 p-2">Servicio</th>
                <th className="border border-blue-300 p-2">Estado</th>
                <th className="border border-blue-300 p-2">Pago</th>
                <th className="border border-blue-300 p-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {/* Filas vacías */}
              {[...Array(3)].map((_, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-blue-300 p-2" colSpan={7}>
                    <span className="text-gray-500">Sin datos disponibles</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
            ◀ Anterior
          </button>
          <span className="text-blue-800 font-bold">1</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow">
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
