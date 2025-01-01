// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md px-20">
      {/* <div className="text-blue-600 font-bold text-xl">ATLAS CC</div> */}
      <img  src="/img/logo.png" alt="" className="h-24 pl-10" />
      <ul className="hidden md:flex space-x-6">
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins' , fontWeight: '400' }}>Nosotros</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins' , fontWeight: '400' }}>Servicios</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins' , fontWeight: '400' }}>Doctores</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins' , fontWeight: '400' }}>Historias de éxito</li>
        <li className="text-gray-700 hover:text-blue-600 cursor-pointer font-bold" style={{ fontFamily: 'Poppins' , fontWeight: '400' }}>Contactanos</li>
      </ul>
      <button className="hidden md:block bg-[#004aaf] text-white px-8 py-3  rounded-lg hover:bg-blue-700">
        Programar tu Cita
      </button>
    </nav>
  );
};

export default Navbar;
