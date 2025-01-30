import React from "react";
import Luna from "./Luna";

export default function Portada() {
  return (
    <div className="md:flex md:flex-row overflow-hidden">

    <div className="flex flex-col w-full md:w-1/2 text-center items-center">
      <h1 className="text-6xl font-black text-white italic mt-[140px]">
        GeoDev
      </h1>
      <h2 className="text-2xl font-bold text-white mt-4">
        Un Desarrollador Full Stack
      </h2>
      <h3 className="text-white font-extralight justify w-80 mt-4">{`"Impulsemos tus ideas hacia el éxito
          con soluciones digitales innovadoras. 
          ¡Hablemos de tu próximo proyecto!"`}</h3>
      <div className="bg-naranja w-64 h-12 flex items-center justify-center rounded-lg mt-10">
        <span className="text-white font-bold text-2xl italic">CONTÁCTAME</span>
      </div>
    </div>
      <Luna />
    </div>
  );
}
