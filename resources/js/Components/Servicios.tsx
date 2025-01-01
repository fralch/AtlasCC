import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Servicios = () => {
    const servicios = [
        {
            titulo: "Masaje  ",
            subtitulo: "Descontracturantes", 
            descripcion: "Relaja tus músculos y alivia el estrés con técnicas especializadas que liberan tensiones acumuladas.",
            imagen: "/img/FOTOS/servicios1.png",
            link: "#"
        },
        {
            titulo: "Roller",
            subtitulo: "Table",
            descripcion: "Disfruta de un masaje automatizado que mejora la circulación y relaja la columna vertebral.",
            imagen: "/img/FOTOS/servicios2.png",
            link: "#"
        },
        {
            titulo: "Análisis ",
            subtitulo: "Rayos X",
            descripcion: "Diagnósticos precisos para identificar lesiones y personalizar tu tratamiento.",
            imagen: "/img/FOTOS/servicios3.png",
            link: "#"
        },
        {
            titulo: "Electroterapia ",
            subtitulo: "Avanzada",
            descripcion: "Estimula tus músculos y reduce el dolor con tecnología de última generación.",
            imagen: "/img/FOTOS/servicios4.png",
            link: "#"
        },
        {
            titulo: "Ajuste",
            subtitulo: "Quiropráctico",
            descripcion: "Realinea tu columna y mejora tu movilidad con ajustes quiroprácticos profesionales.",
            imagen: "/img/FOTOS/servicios5.png",
            link: "#"
        },
        {
            titulo: "Terapia ",
            subtitulo: "Especializada",
            descripcion: "Sesiones terapeuticas diseñadas para abordar tus necesidades específicas de recuperación",
            imagen: "/img/FOTOS/servicios6.png",
            link: "#"
        },
    ];

    return (
        <section className='bg-[url("/img/FONDOS/servicios.png")] py-20 bg-gray-50'>
            <div>
                <h2 className="text-center text-white bg-[#007dff] max-w-xs mx-auto px-4 py-2 text-2xl rounded-lg">Explora nuestros</h2>

                <h2 className="text-4xl font-bold text-center text-blue-600 mb-10"> <span className="text-[#38b5ff] text-8xl" style={{ fontFamily: 'Poppins' , fontWeight: '800' }}>Servicios</span></h2>
            </div>
           <div className="max-w-7xl mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="bg-blue-50"
                >
                    {servicios.map((servicio, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#38b5ff] rounded-lg shadow-md overflow-hidden w-3/4 mx-auto" >
                                <img
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    className="w-full h-48 object-cover mx-auto p-3"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-semibold text-white text-center" style={{ fontWeight: '200' }}>{servicio.titulo}</h3>
                                    <h3 className="text-2xl font-semibold text-white text-center mb-2" style={{ fontWeight: '800' }}>{servicio.subtitulo}</h3>
                                    <p className="text-gray-600 mt-2 text-center">{servicio.descripcion}</p>
                                    <a
                                        href={servicio.link}
                                        className="block mt-4 text-center text-white bg-[#004aaf] hover:bg-blue-600 py-2 px-4 rounded-3xl"
                                    >
                                        Agenda tu cita
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="bg-gray-100 py-10 px-5">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="/img/FOTOS/servicios_only.png"
                            alt="Masajista trabajando"
                            className="rounded-2xl shadow-lg relative z-10"
                        />
                        <div className="absolute inset-0 bottom-0 transform translate-y-5 translate-x-5  bg-[#38b5ff] rounded-2xl z-0"></div>
                    </div>
                    <div className="w-full md:w-4/5 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-4xl font-bold text-[#004aaf]" style={{ fontWeight: '400', }}>
                            Masaje de tejido <span style={{ fontWeight: '700' }}>profundo</span>
                        </h2>
                        <p className="text-gray-700 mt-4">
                            El masaje de tejido profundo es una técnica terapéutica especializada que se centra en las capas más profundas del tejido muscular. Esta técnica aplica presión firme y movimientos lentos para alcanzar las capas más profundas de los músculos y el tejido conectivo, ayudando a aliviar la tensión muscular crónica y el dolor.
                        </p>
                        <p className="text-gray-700 mt-4">
                            Este tipo de masaje es especialmente beneficioso para tratar problemas musculares crónicos, lesiones deportivas, y tensión muscular persistente. Además de aliviar el dolor, puede mejorar el rango de movimiento, reducir la inflamación, y promover la circulación sanguínea. Es una terapia ideal para atletas, personas con trabajos sedentarios o aquellos que experimentan dolor muscular crónico.
                        </p>
                        <button
                            className="mt-6 bg-[#004aaf] text-white py-4 px-8 rounded-md hover:bg-blue-700"
                        >
                            Agenda tu cita
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Servicios;
