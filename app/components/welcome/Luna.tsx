"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Luna() {
  const [position2] = useState({ x: -60, y: -10 });
  const [position3] = useState({ x: -80, y: 0 });
  const [position4] = useState({ x: 0, y: 0 });
  const [displacement, setDisplacement] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handlerPosition = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setDisplacement({
        x: (e.clientX - centerX) / 30, // Movimiento más sutil
        y: (e.clientY - centerY) / 30,
      });
    };
    window.addEventListener("mousemove", handlerPosition);
    return () => window.removeEventListener("mousemove", handlerPosition);
  }, []);
  return (
    <div className="relative flex justify-end mt-20 overflow-hidden pt-10">
      <div className="relative w-[300px] h-[300px]">
        <motion.div
          className="absolute right-[-50px] z-20"
          animate={{ x: displacement.x + 0, y: displacement.y + 0 }} // Se mueve sutilmente sin cambiar la base
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Image width={300} height={300} alt="luna" src="/luna.png" />
        </motion.div>
        <motion.div
          className="absolute top-[-10px] left-[-60px] z-10"
          animate={{
            x: -displacement.x / 2 + position2.x,
            y: -displacement.y / 2 - position2.y,
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Image width={800} height={600} alt="luna" src="/nube-white.png" />
        </motion.div>
        <motion.div
          className="z-10 absolute bottom-0 left-[-80px]"
          animate={{
            x: displacement.x + 100 + position3.x,
            y: -displacement.y + position3.y,
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Image
            width={300}
            height={300}
            alt="luna"
            src="/nube-white-down.png"
          />
        </motion.div>
        <motion.div
          className="z-30 absolute bottom-0 right-0 w-96 h-40"
          animate={{
            x: displacement.x + 30 + position4.x,
            y: displacement.y + position4.y - 10,
          }} // Se mueve sutilmente sin cambiar la base
          transition={{ ease: "easeOut", duration: 0.8 }}
        >
          <Image width={600} height={600} alt="luna" src="/nube-black.png" />
        </motion.div>
      </div>
    </div>
  );
}
