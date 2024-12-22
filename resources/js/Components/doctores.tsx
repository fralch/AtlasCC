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
                            <button
                                className="bg-white text-[#004aaf] px-4 py-2 rounded-xl"
                                style={{ fontWeight: "400" }}
                            >
                                View Profile
                            </button>
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
                            <button
                                className="bg-white text-[#004aaf] px-4 py-2 rounded-xl"
                                style={{ fontWeight: "400" }}
                            >
                                View Profile
                            </button>
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
                            <button
                                className="bg-white text-[#004aaf] px-4 py-2 rounded-xl"
                                style={{ fontWeight: "400" }}
                            >
                                View Profile
                            </button>
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
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit augue duis dolore te feugait nulla facilisi.
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
