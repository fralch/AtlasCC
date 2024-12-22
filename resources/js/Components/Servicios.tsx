import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Servicios = () => {
    const servicios = [
        {
            titulo: "Deep Tissue Massage",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagen: "/img/FOTOS/servicios1.png",
            link: "#"
        },
        {
            titulo: "Automated Massage (roller table)",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagen: "/img/FOTOS/servicios2.png",
            link: "#"
        },
        {
            titulo: "Digital X-Rays",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagen: "/img/FOTOS/servicios3.png",
            link: "#"
        },
        {
            titulo: "Advanced Electrotherapy Treatments",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagen: "/img/FOTOS/servicios4.png",
            link: "#"
        },
        {
            titulo: "Adjustment Treatment",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imagen: "/img/FOTOS/servicios5.png",
            link: "#"
        },
        {
            titulo: "Therapy",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
                                    <h3 className="text-4xl font-semibold text-white text-center" >{servicio.titulo}</h3>
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
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 ">
                    <div className="relative w-full md:w-1/2">
                        <img
                            src="ruta-de-la-imagen.jpg"
                            alt="Masajista trabajando"
                            className="rounded-lg shadow-lg"
                        />
                        <div className="absolute top-0 left-0 bg-blue-500 w-16 h-16 rounded-br-lg"></div>
                    </div>
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-blue-600">
                            Deep Tissue <span className="text-blue-800">Massage</span>
                        </h2>
                        <p className="text-gray-700 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam...
                        </p>
                        <p className="text-gray-700 mt-4">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis...
                        </p>
                        <button
                            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
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
