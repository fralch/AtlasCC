import React from "react";

const Nosotros = () => {
    return (
        <div className='bg-[url("/img/FONDOS/about.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4'>
            <h1 className="text-[#38b5ff]  text-7xl ml-44 mt-20">
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

            <div className="flex flex-row items-center ml-40">
                <p className="bg-white py-6 px-6 sm:py-8 sm:px-8 lg:py-10 lg:px-10 w-full md:w-3/4 lg:w-3/4 text-base sm:text-lg rounded-3xl ml-4 md:ml-10 lg:mr-20 lg:ml-0">
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
                <div className="relative inline-block">
                    <img
                        src="/img/nosotros.png"
                        alt=""
                        className="m-0 relative z-10 drop-shadow-[3px_5px_50px_rgba(255,255,255,0.9)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
