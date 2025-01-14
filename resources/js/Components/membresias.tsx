import React from "react";

const Membresias = () => {
    return (
        <div className='bg-[url("/img/FONDOS/membresias.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4 pb-40'>
            <div className="md:mt-10 mt-20">
                <h2 className="text-center text-[#004aaf] bg-white max-w-xs mx-auto px-4 py-2 text-3xl rounded-3xl">Conoce nuestras</h2>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-10">
                    <span className="text-[#38b5ff]" style={{ fontFamily: 'Poppins', fontWeight: '800' }}>Membresías</span>
                </h2>
            </div>
            <div className="w-[80%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Membresía 1 */}
                    <div className="bg-white p-3 rounded-3xl shadow-lg  w-[300px] mx-auto">
                        <div className="bg-[#004aaf] p-4 rounded-3xl ">
                        <h3 className="text-4xl font-bold text-white mb-4" style={{ fontWeight: '400'}}>Básica</h3>
                        <p className="text-7xl text-white mb-4" style={{ fontWeight: '700'}}>$70</p>
                        </div>
                        <ul className="text-[#004aaf] mb-6 p-4 text-lg" style={{ fontWeight: '400' }}>
                            <li>- Consulta médica</li>
                            <li>- 2 Zonas X rays</li>
                            <li>- 1 Ajuste Semanal</li>
                            <li>- Roller Table</li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="bg-[#004aaf] text-white px-4 py-2 rounded-full">Suscribirse</button>
                        </div>
                    </div>

                    {/* Membresía 2 */}
                    <div className="bg-white p-3 rounded-3xl shadow-lg  w-[300px] mx-auto">
                        <div className="bg-[#004aaf] p-4 rounded-3xl ">
                        <h3 className="text-4xl font-bold text-white mb-4" style={{ fontWeight: '400'}}>Prime</h3>
                        <p className="text-7xl text-white mb-4" style={{ fontWeight: '700'}}>$100</p>
                        </div>
                        <ul className="text-[#004aaf] mb-6 p-4 text-lg" style={{ fontWeight: '400' }}>
                            <li>- Consulta médica</li>
                            <li>- 2 Zonas X rays</li>
                            <li>- 1 Ajuste Semanal</li>
                            <li>- Roller Table</li>
                            <li>- Electroterapia</li>
                            <li>- 10% de descuento en nuestros servicios</li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="bg-[#004aaf] text-white px-4 py-2 rounded-full">Suscribirse</button>
                        </div>
                    </div>

                    {/* Membresía 3 */}
                    <div className="bg-white p-3 rounded-3xl shadow-lg  w-[300px] mx-auto">
                        <div className="bg-[#004aaf] p-4 rounded-3xl ">
                        <h3 className="text-4xl font-bold text-white mb-4" style={{ fontWeight: '400'}}>Exclusive</h3>
                        <p className="text-7xl text-white mb-4" style={{ fontWeight: '700'}}>$130</p>
                        </div>
                        <ul className="text-[#004aaf] mb-6 p-4 text-lg" style={{ fontWeight: '400' }}>
                            <li>- Consulta médica</li>
                            <li>- 2 Zonas X rays</li>
                            <li>- 1 Ajuste Semanal</li>
                            <li>- Roller Table</li>
                            <li>- Electroterapia o Terapia</li>
                            <li>- 30% de descuento en nuestros servicios</li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="bg-[#004aaf] text-white px-4 py-2 rounded-full">Suscribirse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membresias;
