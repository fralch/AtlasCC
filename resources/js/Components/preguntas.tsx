import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Preguntas = () => {
    const servicios = [
        {
            persona: "Persona 1",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit ",
            imagen: "/img/FOTOS/opinion.png",
            estrellas: "5"
        },
        {
            persona: "Persona 2",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit ",
            imagen: "/img/FOTOS/opinion.png",
            estrellas: "4"
        },
        {
            persona: "Persona 3",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit ",
            imagen: "/img/FOTOS/opinion.png",
            estrellas: "3"
        },
        {
            persona: "Persona 4",
            descripcion: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adminim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit ",
            imagen: "/img/FOTOS/opinion.png",
            estrellas: "2"
        },
    ];

    return (
        <section className="bg-[url('/img/FONDOS/servicios.png')] bg-cover bg-center pt-20">
            <div className="max-w-full mx-auto px-4 sm:px-6 2xl:px-60 xl:px-20 flex flex-col md:flex-row justify-between items-center ">
                
                {/* Sección de Preguntas Frecuentes */}
                <div className="w-2/3 mb-8 md:mb-0">
                    <h2 className="text-6xl font-bold text-[#004aaf] mb-4" style={{ fontWeight: '400' }}>Que opinan  <span  style={{ fontWeight: '700' }}>  nuestros</span></h2>
                    <h2 className="text-6xl font-bold text-[#004aaf] mb-4" style={{ fontWeight: '400' }}>pacientes</h2>
                </div>

                {/* Sección Swiper */}
                <div className="w-1/2">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1} // Por defecto 1 en dispositivos pequeños
                        navigation
                        pagination={{ clickable: true }}
                        className="bg-white p-4 rounded-lg shadow-lg"
                    >
                        {servicios.map((servicio, index) => (
                            <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md w-full md:w-2/3 mx-auto">
                                <div className="text-center">
                                    <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                                    <div className="flex flex-col items-center md:flex-row md:items-start">
                                        <img
                                            src={servicio.imagen}
                                            alt={servicio.persona}
                                            className="mb-4 md:mb-0 md:mr-4 rounded-full w-24 h-24 object-cover"
                                        />
                                        <div className="flex flex-col items-center md:items-start">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicio.persona}</h3>
                                            <div className="flex justify-center space-x-1 md:justify-start">
                                                {[...Array(parseInt(servicio.estrellas))].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 2xl:px-60 xl:px-20 mt-20" id="preguntas">
                <ul className="xl:w-7/12 w-1/2 space-y-4">
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">Por qué debo tomar tratamiento? </a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Por qué debo recibir tratamiento quiropráctico después de un accidente de auto?</a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Debo recibir tratamiento quiropráctico si no siento dolor aparente después del accidente?</a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Tendré que pagar por el tratamiento?</a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Cómo puedo recibir una compensación justa?</a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Puedo recibir tratamiento quiropráctico gratuito si soy culpable del accidente?</a></li>
                     <li className="bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-lg font-medium px-6 py-3 rounded-full"> <a href="#">¿Puedo visitar la clínica para conocer los servicios que ofrecen?</a></li>
                 </ul>
                <div className="md:w-1/3 text-left  mb-8 md:mb-0">
                        <h3 className="text-6xl font-bold text-[#004aaf]" style={{ fontWeight: '200' }}>Preguntas</h3>
                        <h3 className="text-7xl font-bold text-[#004aaf]">Frecuentes</h3>
                    <img src="/img/doctor.png" alt=""  />
                 </div>
            </div>
        </section>
    );
};

export default Preguntas;
