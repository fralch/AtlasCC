import React from "react";

const Nosotros = () => {
    return (
        <div className='bg-[url("/img/FONDOS/about.png")] bg-cover bg-center bg-no-repeat bg-[#004aaf] p-4'>
            <h1 className="text-[#38b5ff]  text-7xl ml-44 mt-20">
                {" "}
                <span className="text-[#38b5ff]" style={{ fontFamily: 'Poppins' , fontWeight: '300' }}>Sobre </span>
                <span className="text-[#38b5ff]" style={{ fontFamily: 'Poppins' , fontWeight: '700' }}>Nosotros</span>
            </h1>

            <div className="flex flex-row items-center ml-40">
                <p className="ml-10 bg-white py-10 px-10 w-2/4 mr-52 text-lg rounded-3xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                   
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
