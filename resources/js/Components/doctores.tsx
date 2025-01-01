import React from "react";

const Doctores = () => {
    return (
        <div>
            <div className='bg-[url("/img/FONDOS/doctores.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4 pb-40'>
                <div className="mt-10 text-center">
                    <h2 className="text-[#38b5ff] text-7xl ml-44 mt-20">
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
                <div className="w-[80%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Membresía 1 */}
                        <div className="p-3 rounded-3xl w-[350px] mx-auto">
                            <img src="/img/FOTOS/doctores1.png" alt="" />
                            <h3
                                className="font-bold text-white"
                                style={{ fontWeight: "400" }}
                            >
                                Lorem ipsum
                            </h3>
                            <p className="text-3xl font-semibold text-[#004aaf] mb-4">
                                Lorem ipsum
                            </p>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh{" "}
                            </p>
                           
                        </div>
                        <div className="p-3 rounded-3xl w-[350px] mx-auto">
                            <img src="/img/FOTOS/doctores2.png" alt="" />
                            <h3
                                className="font-bold text-white"
                                style={{ fontWeight: "400" }}
                            >
                                Lorem ipsum
                            </h3>
                            <p className="text-3xl font-semibold text-[#004aaf] mb-4">
                                Lorem ipsum
                            </p>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh{" "}
                            </p>
                           
                        </div>
                        <div className="p-3 rounded-3xl w-[350px] mx-auto">
                            <img src="/img/FOTOS/doctores3.png" alt="" />
                            <h3
                                className="font-bold text-white"
                                style={{ fontWeight: "400" }}
                            >
                                Lorem ipsum
                            </h3>
                            <p className="text-3xl font-semibold text-[#004aaf] mb-4">
                                Lorem ipsum
                            </p>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam nonummy nibh{" "}
                            </p>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[url("/img/FONDOS/historias_exito.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4 pb-40' >
                <div
                    className="flex flex-col lg:flex-row items-center  mt-10  max-w-7xl mx-auto"
                    id="historias"
                >
                    {/* Texto */}
                    <div className="flex-1">
                        <h4
                            className="text-8xl font-bold text-white mb-2"
                            style={{ fontWeight: "400" }}
                        >
                            Historias
                        </h4>
                        <h4 className="text-8xl font-bold text-white mb-6">
                            de Éxito
                        </h4>
                        <p className="text-lg leading-7 text-white">
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
                    {/* Imagen */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/img/FOTOS/exito.png"
                            alt="Éxito"
                            className="rounded-lg shadow-lg w-1/2  object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctores;
