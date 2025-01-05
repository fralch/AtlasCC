import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md px-20">
      <img src="/img/logo.png" alt="" className="h-24 pl-10" />
      <ul className="hidden md:flex space-x-6">
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Nosotros</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Servicios</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Doctores</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Historias de éxito</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Contactanos</li>
      </ul>
      <button
        className="hidden md:block bg-[#004aaf] text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        onClick={openModal}
      >
        Programar tu Cita
      </button>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
