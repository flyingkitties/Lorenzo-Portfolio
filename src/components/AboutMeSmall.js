import React, { useState } from 'react';
import Image from 'next/image';
import Profile3 from '../../public/images/profile3.png';

function AboutMe() {
  return (
    <div className="px-6 items-center lg:px-10">
      <div className="flex py-5 items-center">
        <div className="flex pl-2 space-x-4 items-center text-center ">
          <Image
            className="rounded-full  "
            width={80}
            height={80}
            src={Profile3}
            alt="Profile picture"
          />
        </div>

        <div className="items-center text-left pl-5 ">
          <h1 className="sm:text-2xl font-bold ">Lore P.</h1>
          <h2 className="sm:text-lg font-semibold ">iOS Developer</h2>
        </div>
      </div>
      <div className=" space-y-4 xl:space-y-5 pb-3 text-left md:text-justify px-1">
        <p>Welcome!</p>
        <p className="">
          I'm Lore, an iOS developer who enjoys crafting intentional UIs and
          practical apps using SwiftUI and UIKit.
        </p>

        <p className=" ">
          If you'd like to collaborate or simply want to reach out, don't
          hesitate to{' '}
          <span className="link text-[#EE7B22] dark:text-[#98E4FF]">
            <a href="mailto:lorenzo.polato@gmail.com">get in touch </a>
            <span> - licurge@icloud.com</span>
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
