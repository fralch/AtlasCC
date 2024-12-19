import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0} // Sin espacio entre slides
            slidesPerView={1} // Un slide visible a la vez
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 3000, // Tiempo en milisegundos entre cada deslizamiento
            }}
            style={{ width: "99vw", height: "85vh" }} // Tamaño del contenedor
        >
            {/* Slide con imagen */}
            <SwiperSlide>
                <img
                    src="https://www.unir.net/wp-content/uploads/2022/08/senior-patient-and-nurse-in-hospital-picture-id1157106508-1.jpg"
                    alt="Imagen 1"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "47%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        textAlign: "left",
                    }}
                >
                    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10">
                        <div className="text-left max-w-lg">
                            <div className="flex flex-row">
                                <h1 className="text-[#004aaf] text-3xl md:text-5xl font-bold leading-tight ">
                                    We’re here to help <br />
                                    <span className="text-[#007dff] md:text-7xl ">
                                        Your Health
                                    </span>
                                </h1>
                                <img
                                    src="/img/cuadrado.png"
                                    alt=""
                                    className="w-10 ml-2"
                                />
                            </div>
                            <p className="text-gray-700 mt-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec non pulvinar tortor.
                            </p>
                            <button className="mt-6 bg-[#004aaf] text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-xl ">
                                Programa tu Cita
                            </button>
                        </div>
                    </section>
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "47%",
                        right: "-5%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        textAlign: "left",
                    }}
                >
                    <section className="container mx-auto py-10">
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto md:mx-0">
                            <h2 className="text-[#004aaf] font-bold text-2xl mb-4">
                                ¡Agenda tu cita hoy mismo!
                            </h2>
                            <p className="text-gray-700 mb-4 text-sm">
                                Enter your contacts below to schedule an
                                appointment or discuss it with us in details.
                            </p>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Your name*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email address*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#004aaf] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </SwiperSlide>
            {/* Slide con imagen */}
            <SwiperSlide>
                <img
                    src="https://i.ytimg.com/vi/Vgk6ZpCcr1I/maxresdefault.jpg"
                    alt="Imagen 1"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "47%",
                        left: "20%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        textAlign: "left",
                    }}
                >
                    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-10">
                        <div className="text-left max-w-lg">
                            <div className="flex flex-row">
                                <h1 className="text-[#004aaf] text-3xl md:text-5xl font-bold leading-tight ">
                                    We’re here to help <br />
                                    <span className="text-[#007dff] md:text-7xl ">
                                        Your Health
                                    </span>
                                </h1>
                                <img
                                    src="/img/cuadrado.png"
                                    alt=""
                                    className="w-10 ml-2"
                                />
                            </div>
                            <p className="text-gray-700 mt-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec non pulvinar tortor.
                            </p>
                            <button className="mt-6 bg-[#004aaf] text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-xl ">
                                Programa tu Cita
                            </button>
                        </div>
                    </section>
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "47%",
                        right: "-5%",
                        transform: "translate(-50%, -50%)",
                        color: "#fff",
                        textAlign: "left",
                    }}
                >
                    <section className="container mx-auto py-10">
                        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto md:mx-0">
                            <h2 className="text-[#004aaf] font-bold text-2xl mb-4">
                                ¡Agenda tu cita hoy mismo!
                            </h2>
                            <p className="text-gray-700 mb-4 text-sm">
                                Enter your contacts below to schedule an
                                appointment or discuss it with us in details.
                            </p>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Your name*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email address*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number*"
                                    className="w-full border-gray-300 border rounded-lg px-4 py-2 mb-4 focus:outline-none bg-slate-200 focus:bg-white text-black"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#004aaf] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
