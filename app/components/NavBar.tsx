import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-[90%] h-16 bg-white/2 backdrop-blur-sm flex justify-between items-center rounded-xl">

      <Image
        width={80}
        height={80}
        alt="logo"
        src={"/logo.png"}
      />
      <ul className="flex">
        <li>
          < IoLogoGithub className="w-8 h-8 mx-4 text-white" />
        </li>
        <li>
          <RxLinkedinLogo  className="w-8 h-8 text-white" />
        </li>
      </ul>
    </nav>
  );
}
