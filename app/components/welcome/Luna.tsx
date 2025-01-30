"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Luna() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlerMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
    };

    window.addEventListener("mousemove", handlerMouseMove);
    return () => window.removeEventListener("mousemove", handlerMouseMove);
  }, []);

  return (
    <div className="md:h-screen relative bottom-0 mt-4 w-full h-80 md:w-[40rem] md:h-[40rem] md:mt-auto md:justify-self-end">
      {/* Imagen Luna */}
      <motion.div
        animate={{
          x: mousePosition.x / 15,
          y: mousePosition.y / 15,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="absolute bottom-0 right-[-3rem] z-20 h-60 w-60 md:h-[26rem] md:w-[26rem]"
      >
        <Image width={600} height={600} src="/luna.png" alt="luna" />
      </motion.div>

      {/* Imagen Nube White */}
      <motion.div
        animate={{
          x: mousePosition.x / 25,
          y: mousePosition.y / 25,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="absolute z-10 h-32 w-80 right-10 top-20 md:h-[28rem] md:w-[28rem] md:top-[16rem] md:right-32"
      >
        <Image width={600} height={600} src="/nube-white.png" alt="nube-white" />
      </motion.div>

      {/* Imagen Nube White Down */}
      <motion.div
        animate={{
          x: mousePosition.x / 20,
          y: mousePosition.y / 20,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="absolute z-10 h-32 w-80 right-0 bottom-0 md:h-[25rem] md:w-[25rem] md:bottom-[-12rem] md:right-[6rem]"
      >
        <Image width={600} height={600} src="/nube-white-down.png" alt="nube-white-down" />
      </motion.div>

      {/* Imagen Nube Black */}
      <motion.div
        animate={{
          x: mousePosition.x / 30,
          y: mousePosition.y / 30,
        }}
        transition={{ ease: "easeOut", duration: 0.2 }}
        className="absolute z-30 h-40 w-60 right-0 bottom-[-1rem] md:h-[25rem] md:w-[25rem] md:bottom-[-10rem]"
      >
        <Image width={600} height={600} src="/nube-black.png" alt="nube-black" />
      </motion.div>
    </div>
  );
}
