import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Header() {
  return (
    <div className="flex item-center bg-[#fbfaf6] opacity-80 z-10 shadow-md rounded-sm sticky top-0 transparent">
      <div className="flex items-center space-x-5 p-3 pl-5 lg:pl-10">
        <p className="text-2xl lg:text-3xl px-3 text-[#595260]">
          Lorenzo Polato
        </p>
      </div>
      <div className="flex absolute right-5 lg:right-10  items-center text-[#595260] py-1  ">
        <SocialIcon
          url="https://www.linkedin.com/in/salubrejoe/"
          bgColor="#fbfaf6"
          fgColor="#595260"
        />
        <SocialIcon
          url="https://github.com/salubrejoe"
          bgColor="#fbfaf6"
          fgColor="#595260"
        />
        <Bars3Icon className="icon " />
      </div>
    </div>
  );
}

export default Header;
