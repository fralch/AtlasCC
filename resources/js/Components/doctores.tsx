import React from "react";

const Doctores = () => {
    return (
        <div>
            {/* Doctors section - removed hidden class to show on all devices */}
            <div className='bg-[url("/img/FONDOS/doctores.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4 pb-20 md:pb-40'>
                <div className="mt-5 md:mt-10 text-center">
                    <h2 className="text-[#38b5ff] text-4xl md:text-5xl lg:text-7xl mx-auto md:ml-44 mt-10 md:mt-20">
                        {" "}
                        <span
                            className="text-[#004aaf]"
                            style={{ fontFamily: "Poppins", fontWeight: "300" }}
                        >
                            Sobre{" "}
                        </span>
                        <span
                            className="text-[#004aaf]"
                            style={{ fontFamily: "Poppins", fontWeight: "700" }}
                        >
                            Nosotros
                        </span>
                    </h2>
                </div>
                <div className="w-full md:w-[90%] lg:w-[80%] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {/* Doctor 1 */}
                        <div className="p-3 rounded-3xl max-w-[350px] w-full mx-auto">
                            <img 
                                src="/img/FOTOS/doctores1.png" 
                                alt="Doctor Mark Aldridge" 
                                className="w-full h-auto"
                            />
                            <h3
                                className="font-bold text-white mt-2"
                                style={{ fontWeight: "400" }}
                            >
                               Doctor  
                            </h3>
                            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#004aaf] mb-4">
                                Mark Aldridge
                            </p>
                        </div>
                        
                        {/* Doctor 2 */}
                        <div className="p-3 rounded-3xl max-w-[350px] w-full mx-auto">
                            <img 
                                src="/img/FOTOS/doctores2.png" 
                                alt="Doctor Adam" 
                                className="w-full h-auto"
                            />
                            <h3
                                className="font-bold text-white mt-2"
                                style={{ fontWeight: "400" }}
                            >
                               Doctor
                            </h3>
                            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#004aaf] mb-4">
                                Adam
                            </p>
                        </div>
                        
                        {/* Doctor 3 */}
                        <div className="p-3 rounded-3xl max-w-[350px] w-full mx-auto">
                            <img 
                                src="/img/FOTOS/doctores3.png" 
                                alt="Doctor Lorem ipsum" 
                                className="w-full h-auto"
                            />
                            <h3
                                className="font-bold text-white mt-2"
                                style={{ fontWeight: "400" }}
                            >
                                Doctor
                            </h3>
                            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#004aaf] mb-4">
                                Lorem ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success stories section */}
            <div className='bg-[url("/img/FONDOS/historias_exito.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4 pb-20 md:pb-40'>
                <div
                    className="flex flex-col lg:flex-row items-center mt-5 md:mt-10 max-w-7xl mx-auto px-4 md:px-8"
                    id="historias"
                >
                    {/* Text */}
                    <div className="flex-1 mb-8 lg:mb-0">
                        <h4
                            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-2"
                            style={{ fontWeight: "400" }}
                        >
                            Historias
                        </h4>
                        <h4 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4 md:mb-6">
                            de Éxito
                        </h4>
                        <p className="text-base md:text-lg leading-7 text-white">
                        "Mi nombre es Marta y soy de Santa Marta, Colombia. En agosto
                        sufrí un accidente automovilístico muy fuerte mientras viajaba
                        por la carretera con mi hermana, que estaba embarazada. Un
                        auto nos impactó y dimos tres vueltas sobre el pavimento. Fue
                        una experiencia muy traumática, pero gracias a Dios pudimos
                        salir adelante.
                        Después del accidente, comencé mi proceso de recuperación
                        con los médicos y el apoyo de los abogados. Mi hermana y yo
                        logramos sanar nuestras lesiones, y además, continuamos con
                        el proceso legal. Gracias a la ayuda de los especialistas,
                        logramos recibir la compensación que merecíamos por el daño
                        que sufrimos. Estoy muy agradecida con todo el equipo de Atlas
                        y con los abogados por ayudarnos en este momento tan difícil y
                        darnos la oportunidad de retomar nuestras vidas."
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/img/FOTOS/exito.png"
                            alt="Éxito"
                            className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctores;