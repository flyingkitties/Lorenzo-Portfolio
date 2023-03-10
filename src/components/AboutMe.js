import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/solid";

function AboutMe() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };

  return (
    <div className="relative">
      {!show ? (
        <div
          onClick={isClicked}
          className=" bg-[#FFFFFF] rounded-lg shadow-lg drop-shadow-2xl 
          md:max-w-[350px] lg:min-w-[550px] md:absolute top-0 left-0">
          <div className="flex relative bg-gradient-to-b from-[#DFDFDE] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              About me
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" px-6 items-center  lg:px-10 ">
            <div className="flex pl-2 space-x-4 items-center text-center ">
              <Image
                className="rounded-full  "
                width={50}
                height={50}
                src="https://media.licdn.com/dms/image/D4D03AQHtEvT147hPuA/profile-displayphoto-shrink_200_200/0/1648204579075?e=1681948800&v=beta&t=lA-EyJME5Ok3zOmc_evEkmoRoQ00ptTe8U5etCW_8Ys"
              />
              <h2 className="text-2xl font-bold ">Lorenzo Polato</h2>
            </div>
            <div className="items-center text-left sm:pl-14 pl-8 pb-5 ">
              <h3 className="text-lg font-bold ">Swift and UIKit Developer</h3>
            </div>

            <div className=" space-y-3 text-[#595260] text-justify px-1">
              <p className="">
                Hi, I'm Lorenzo, a junior developer who loves creating beautiful
                and functional apps with Swift and UIKit.{" "}
              </p>

              <p className="pb-5 ">
                If you are interested in working with me or just want to say hi,
                feel free to contact me.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={isClicked}
          className="md:min-w-[500px]  bg-[#FFFFFF] rounded-lg shadow-lg z-10 drop-shadow-2xl
         absolute top-0 left-0 ">
          <div className="flex relative bg-gradient-to-b from-[#DFDFDE] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              About me
            </p>
            <ArrowsPointingInIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" px-6 items-center lg:px-10 ">
            <div className="flex pl-2 space-x-4 items-center text-center">
              <Image
                className="rounded-full  "
                width={50}
                height={50}
                src="https://media.licdn.com/dms/image/D4D03AQHtEvT147hPuA/profile-displayphoto-shrink_200_200/0/1648204579075?e=1681948800&v=beta&t=lA-EyJME5Ok3zOmc_evEkmoRoQ00ptTe8U5etCW_8Ys"
              />
              <h2 className="text-2xl font-bold ">Lorenzo Polato</h2>
            </div>
            <div className="items-center text-left pl-16 pb-5 pt-1">
              <h3 className="text-lg font-bold ">Swift and UIKit Developer</h3>
            </div>

            <div
              className=" space-y-3  text-[#595260] text-justify px-1 
             lg:space-y-5 indent-5 lg:leading-relaxed ">
              <p className="">
                Hi, I'm Lorenzo, a junior developer who loves creating beautiful
                and functional apps with Swift and UIKit.{" "}
              </p>

              <div>
                <p className=" ">
                  I started my education by following Apple's documentation and
                  book series Develop With Swift, and since then I have gained
                  more than one year of experience in developing iOS apps. Some
                  of the skills I have learned and applied include advanced
                  compositional layout, API retrieval, frameworks integration
                  (core motion, notification center, ..), usage of generics, and
                  async programming. You can check out some of my projects below
                  to see what I can do. As a developer I'm always eager to learn
                  new things and challenge myself.
                </p>
                <p className="">
                  When I'm not coding, I enjoy reading popular science and
                  philosophy books, playing piano and guitar, and experimenting
                  with homemade cocktails.
                </p>
              </div>

              <p className="pb-5 ">
                If you are interested in working with me or just want to say hi,
                feel free to contact me.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
