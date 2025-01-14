import React from "react";

const Nosotros = () => {
    return (
        <div className='bg-[url("/img/FONDOS/about.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4'>
            <h1 className="text-[#38b5ff] text-4xl md:text-5xl lg:text-7xl text-center md:text-left md:ml-44 mt-10 md:mt-20">
                {" "}
                <span
                    className="text-[#38b5ff]"
                    style={{ fontFamily: "Poppins", fontWeight: "300" }}
                >
                    Sobre{" "}
                </span>
                <span
                    className="text-[#38b5ff]"
                    style={{ fontFamily: "Poppins", fontWeight: "700" }}
                >
                    Nosotros
                </span>
            </h1>

            <div className="flex flex-col md:flex-row items-center md:ml-40 mt-6 md:mt-0">
                <p className="bg-white py-4 px-4 sm:py-6 sm:px-6 lg:py-10 lg:px-10 w-full md:w-3/4 lg:w-3/4 text-sm sm:text-base lg:text-lg rounded-3xl mx-4 md:mx-0 md:mr-8 mb-6 md:mb-0">
                    En Atlas CC, nos especializamos en ayudarte a recuperar tu
                    bienestar después de un accidente o cualquier otra lesión.
                    Contamos con un equipo comprometido de profesionales,
                    incluyendo dos doctores estadounidenses y especialistas de
                    diversos países, quienes están dedicados a ofrecerte la
                    mejor atención posible. Nuestra fundadora, Nahomi Salcedo,
                    aporta más de 15 años de experiencia ayudando a las personas
                    a alcanzar su recuperación física y emocional, asegurándose
                    de que reciban los derechos que merecen. Su liderazgo y
                    pasión han sido fundamentales para que Atlas CC sea un
                    referente en el sector de la salud quiropráctica. Con más de
                    3 años en el mercado, Atlas CC se ha consolidado como una
                    clínica de confianza que ofrece atención personalizada y
                    soluciones efectivas para cada paciente. Estamos aquí para
                    acompañarte en cada paso de tu proceso de recuperación,
                    devolviéndote la calidad de vida que mereces.
                </p>
                <div className="relative inline-block w-full md:w-auto px-4 md:px-0">
                    <img
                        src="/img/nosotros.png"
                        alt=""
                        className="m-0 relative z-10 drop-shadow-[3px_5px_50px_rgba(255,255,255,0.9)] w-full md:w-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
