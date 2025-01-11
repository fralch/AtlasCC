import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-white shadow-md relative z-50">
      <img src="/img/logo.png" alt="Logo" className="h-16 md:h-24 pl-2 md:pl-10" />
      <div className="md:hidden">
        <button
          className="text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul className={`md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto pl-4 md:pl-0 transition-all duration-300 ease-in z-50 ${isMenuOpen ? 'top-16' : 'top-[-490px]'}`}>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold mb-4 md:mb-0" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Nosotros</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold mb-4 md:mb-0" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Servicios</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold mb-4 md:mb-0" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Doctores</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold mb-4 md:mb-0" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Historias de éxito</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold mb-4 md:mb-0" style={{ fontFamily: 'Poppins', fontWeight: '400' }}>Contactanos</li>
      </ul>
      <button
        className="hidden md:block bg-[#004aaf] text-white px-4 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-700"
        onClick={openModal}
      >
        Programar tu Cita
      </button>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
