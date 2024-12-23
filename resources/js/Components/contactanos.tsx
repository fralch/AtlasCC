import React from "react";


const Contactanos = () => {
    return (
        <section className="bg-[url('/img/FONDOS/servicios.png')] bg-cover bg-center ">
            {/* Header Section */}
            <div className="bg-[url('/img/FONDOS/contacto.png')] bg-cover bg-center text-center py-14">
                <h4 className="text-5xl font-bold text-white uppercase">Contáctanos</h4>
            </div>

            {/* Formulario de contacto */}
            <div className="max-w-6xl mx-auto mt-10 px-6 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Texto a la izquierda */}
                <div className="text-left">
                    <h4 className="text-[#38b5ff] text-7xl font-semibold" style={{ fontWeight: '400' }}>From</h4>
                    <h4 className="text-[#003895] text-7xl font-semibold mb-4">Get in touch</h4>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>

                {/* Inputs a la derecha */}
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Teléfono"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Mensaje"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={5}
                    ></textarea>
                </div>
            </div>

            {/* Mapa y texto adicional */}
            <div className="mt-16  py-10">
                <div className="max-w-5xl mx-auto px-6 lg:px-0">
                    <iframe
                        width="100%"
                        height="400"
                        frameBorder="0"
                        scrolling="no"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="Google Map"
                        className="rounded-lg shadow-lg"
                    ></iframe>

                    <div className="text-center mt-16">
                        <p className="text-5xl font-medium text-[#003895]">Consult your healt</p>
                        <p className="text-5xl font-extrabold text-[#003895]">with a professional</p>
                        <a
                            href="#"
                            className="mt-10 inline-block px-10 py-4 bg-[#003895] text-white  rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Book an Appointment
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
