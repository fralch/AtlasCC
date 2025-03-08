import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Preguntas = () => {
    // Estado para controlar cuál pregunta está abierta
    const [preguntaAbierta, setPreguntaAbierta] = useState(null);

    // Función para manejar el clic en las preguntas
    const togglePregunta = (index: any) => {
        if (preguntaAbierta === index) {
            setPreguntaAbierta(null); // Cerrar si ya está abierta
        } else {
            setPreguntaAbierta(index); // Abrir la nueva pregunta
        }
    };

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

    // Lista de preguntas y respuestas
    const preguntasRespuestas = [
        {
            pregunta: "Por qué debo tomar tratamiento?",
            respuesta: "El tratamiento quiropráctico es esencial para restaurar la alineación adecuada de su columna y articulaciones después de un trauma. Incluso lesiones aparentemente menores pueden causar problemas a largo plazo si no son tratadas. Nuestro tratamiento ayuda a aliviar el dolor, mejorar la movilidad y prevenir complicaciones futuras, permitiéndole recuperar su calidad de vida de manera más rápida y efectiva."
        },
        {
            pregunta: "¿Por qué debo recibir tratamiento quiropráctico después de un accidente de auto?",
            respuesta: "Después de un accidente automovilístico, su cuerpo sufre un trauma significativo que puede causar lesiones en tejidos blandos, dislocaciones y desalineaciones que no siempre son visibles de inmediato. El tratamiento quiropráctico especializado identifica y trata estas lesiones ocultas, reduce la inflamación, alivia el dolor y previene problemas crónicos. Estudios demuestran que pacientes que reciben atención quiropráctico temprana se recuperan más rápido y tienen menos secuelas a largo plazo."
        },
        {
            pregunta: "¿Debo recibir tratamiento quiropráctico si no siento dolor aparente después del accidente?",
            respuesta: "Absolutamente. Muchas lesiones causadas por accidentes no manifiestan síntomas inmediatamente debido a la adrenalina y otras hormonas que el cuerpo libera durante situaciones traumáticas. El dolor y la rigidez suelen aparecer días o incluso semanas después. Un examen quiropráctico completo puede detectar problemas antes de que se conviertan en condiciones dolorosas o crónicas. La atención preventiva es fundamental para evitar complicaciones futuras y asegurar una recuperación completa."
        },
        {
            pregunta: "¿Tendré que pagar por el tratamiento?",
            respuesta: "En la mayoría de los casos, no tendrá que pagar de su bolsillo por el tratamiento quiropráctico después de un accidente automovilístico. Trabajamos directamente con compañías de seguros y abogados especializados para cubrir sus costos médicos a través del seguro de responsabilidad civil del conductor responsable o su propio seguro de protección contra lesiones personales (PIP). Nuestro equipo administrativo se encargará de toda la documentación necesaria para que usted pueda concentrarse únicamente en su recuperación."
        },
        {
            pregunta: "¿Cómo puedo recibir una compensación justa?",
            respuesta: "Para recibir una compensación justa después de un accidente, es crucial documentar adecuadamente sus lesiones y tratamiento. Nuestro equipo proporciona informes médicos detallados que serán fundamentales para su caso. Además, colaboramos estrechamente con abogados especializados en accidentes que pueden representar sus intereses. Mantenemos registros precisos de su progreso, limitaciones funcionales y necesidades de tratamiento futuro para asegurar que la compensación cubra adecuadamente todos los aspectos de su recuperación y pérdidas."
        },
        {
            pregunta: "¿Puedo recibir tratamiento quiropráctico gratuito si soy culpable del accidente?",
            respuesta: "Incluso si usted fue responsable del accidente, puede recibir tratamiento sin costos directos dependiendo de su cobertura de seguro. Muchas pólizas incluyen beneficios de Protección contra Lesiones Personales (PIP) o cobertura médica que cubre su tratamiento independientemente de quién tuvo la culpa. Nuestro equipo administrativo verificará sus beneficios de seguro y le explicará todas las opciones disponibles para cubrir su tratamiento. Lo más importante es que reciba la atención necesaria para recuperarse completamente."
        },
        {
            pregunta: "¿Puedo visitar la clínica para conocer los servicios que ofrecen?",
            respuesta: "¡Por supuesto! Invitamos a todos los pacientes potenciales a visitar nuestra clínica para conocer nuestras instalaciones y servicios sin ningún compromiso. Durante su visita, podrá conocer a nuestro equipo de profesionales, ver nuestros equipos modernos y discutir cualquier pregunta o inquietud que tenga sobre nuestros tratamientos. Simplemente llame para programar una visita informativa gratuita en el horario que más le convenga. Estamos comprometidos a brindarle la mejor atención posible en un ambiente acogedor."
        },
    ];

    return (
        <section className="bg-[url('/img/FONDOS/servicios.png')] bg-cover bg-center pt-10 md:pt-20">
            <div className="max-w-full mx-auto px-4 sm:px-6 2xl:px-60 xl:px-20 flex flex-col md:flex-row justify-between items-center">
                
                {/* Sección de Preguntas Frecuentes */}
                <div className="w-full md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-bold text-[#004aaf] mb-4" style={{ fontWeight: '400' }}>Que opinan  <span  style={{ fontWeight: '700' }}>  nuestros</span></h2>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#004aaf] mb-4" style={{ fontWeight: '400' }}>pacientes</h2>
                </div>

                {/* Sección Swiper */}
                <div className="w-full md:w-1/2">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        className="bg-white p-4 rounded-lg shadow-lg"
                    >
                        {servicios.map((servicio, index) => (
                            <SwiperSlide key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full mx-auto">
                                <div className="text-center">
                                    <p className="text-gray-600 mb-4 text-sm md:text-base">{servicio.descripcion}</p>
                                    <div className="flex flex-col items-center md:flex-row md:items-start">
                                        <img
                                            src={servicio.imagen}
                                            alt={servicio.persona}
                                            className="mb-4 md:mb-0 md:mr-4 rounded-full w-16 md:w-24 h-16 md:h-24 object-cover"
                                        />
                                        <div className="flex flex-col items-center md:items-start">
                                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{servicio.persona}</h3>
                                            <div className="flex justify-center space-x-1 md:justify-start">
                                                {[...Array(parseInt(servicio.estrellas))].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 md:w-5 h-4 md:h-5 text-yellow-400"
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
            <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 2xl:px-60 xl:px-20 mt-10 md:mt-20" id="preguntas">
                <ul className="w-full md:w-7/12 space-y-4 mb-8 md:mb-0">
                    {preguntasRespuestas.map((item, index) => (
                        <li key={index} className="transition-all duration-200">
                            <div 
                                className={`bg-slate-300 text-[#004aaf] hover:text-gray-800 transition-all duration-200 cursor-pointer text-sm md:text-lg font-medium px-4 md:px-6 py-2 md:py-3 rounded-t-full ${preguntaAbierta === index ? 'rounded-b-none' : 'rounded-full'}`}
                                onClick={() => togglePregunta(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <span>{item.pregunta}</span>
                                    <span className="ml-2">
                                        {preguntaAbierta === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </span>
                                </div>
                            </div>
                            {preguntaAbierta === index && (
                                <div className="bg-white text-gray-700 px-4 md:px-6 py-3 rounded-b-lg shadow-inner text-sm md:text-base transition-all duration-300 border border-slate-300 border-t-0">
                                    {item.respuesta}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h3 className="text-4xl md:text-6xl font-bold text-[#004aaf]" style={{ fontWeight: '200' }}>Preguntas</h3>
                    <h3 className="text-5xl md:text-7xl font-bold text-[#004aaf]">Frecuentes</h3>
                    <img src="/img/doctor.png" alt="" className="w-full max-w-md mx-auto md:mx-0" />
                </div>
            </div>
        </section>
    );
};

export default Preguntas;