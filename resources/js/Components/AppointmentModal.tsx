import React, { useState } from 'react';
import axios from '@/config/configAxios';
import Swal from 'sweetalert2';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nombres: "",
    email: "correo@mail.com",
    telefono: "",
    fecha: "",
    hora: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const [fecha, hora] = formData.fecha.split('T');
      const response = await axios.post('http://127.0.0.1:8000/pacientes', formData);
      const { id: paciente_id } = response.data;
      const response2 = await axios.post('http://127.0.0.1:8000/citas', {
        paciente_id,
        doctor_id: 1,
        fecha,
        hora,
        motivo: "Accidente de auto"
      });
      Swal.fire({
        icon: 'success',
        title: '¡Cita programada!',
        text: 'Tu cita ha sido programada con éxito.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#0f68d9'
      }).then(() => {
            setFormData({
                nombres: "",
                email: "correo@mail.com",
                telefono: "",
                fecha: "",
                hora: ""
            });
        });
      onClose();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: 'Ha ocurrido un error al programar la cita.',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto md:mx-0 z-50 relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-[#004aaf] font-bold text-lg mb-4 text-center" style={{ fontSize: '1.3rem' }}>
          ¡Agenda tu cita hoy mismo!
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          Nuestros profesionales están listos para ayudarte. Ingresa los siguientes datos
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre*"
            className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
          />
          <input
            type="tel"
            placeholder="Teléfono*"
            className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <div className="relative">
            <input
              type="text"
              className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
              onFocus={(e) => e.target.type = 'datetime-local'}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.type = 'text'
                }
              }}
              placeholder="Dia de la cita*"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#004aaf] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            disabled={!formData.nombres || !formData.telefono || !formData.fecha}
          >
            Programar tu cita
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default AppointmentModal;
