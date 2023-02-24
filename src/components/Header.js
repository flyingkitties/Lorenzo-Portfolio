import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-grow item-center bg-[#DFDFDE] z-10 shadow-md rounded-sm">
      <div className="flex items-center space-x-5 p-2 pl-5 lg:pl-10">
        <Image
          className=" flex  rounded-full "
          width={50}
          height={50}
          src="https://media.licdn.com/dms/image/D4D03AQHtEvT147hPuA/profile-displayphoto-shrink_200_200/0/1648204579075?e=1681948800&v=beta&t=lA-EyJME5Ok3zOmc_evEkmoRoQ00ptTe8U5etCW_8Ys"
        />
        <p className="text-2xl lg:text-3xl px-3 text-[#595260]">
          Lorenzo Polato
        </p>
      </div>
      <div className="flex absolute right-5 lg:right-10 top-3 items-center text-[#595260]  ">
        <SocialIcon
          url="https://www.linkedin.com/in/salubrejoe/"
          bgColor="#DFDFDE"
          fgColor="#595260"
        />
        <SocialIcon
          url="https://github.com/salubrejoe"
          bgColor="#DFDFDE"
          fgColor="#595260"
        />
        <Bars3Icon className="icon " />
      </div>
    </div>
  );
}

export default Header;
