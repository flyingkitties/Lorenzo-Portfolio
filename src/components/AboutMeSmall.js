import React, { useState } from 'react';
import Image from 'next/image';
import Profile from '../../public/images/LoreProfile.jpeg';

function AboutMe() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };
  return (
    <div className=" px-6 items-center lg:px-10 ">
      <div className="flex py-5">
        <div className="flex pl-2 space-x-4 items-center text-center ">
          <Image
            className="rounded-full  "
            width={50}
            height={50}
            src={Profile}
            alt="Profile picture"
          />
        </div>

        <div className="items-center text-left pl-5 ">
          <h1 className="sm:text-2xl font-bold ">Lore P.</h1>
          <h2 className="sm:text-lg font-semibold ">iOS Developer</h2>
        </div>
      </div>
      <div
        className=" space-y-3 text-[#595260] text-justify px-1 
                "
      >
        <p>Hi! Welcome to my website.</p>
        <p className="">
          I am Lore, a junior developer who loves creating beautiful and
          functional apps with SwiftUI and UIKit.{' '}
        </p>

        <p className="pb-5 ">
          If you are interested in working with me or just want to say hi, feel
          free to{' '}
          <span className="link">
            <a href="mailto:lorenzo.polato@gmail.com">contact me</a>
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
