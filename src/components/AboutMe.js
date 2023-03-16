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
    <div className="">
      {!show ? (
        <div
          className="bg-[#fbfaf6] opacity-80 rounded-2xl shadow-lg drop-shadow-2xl 
        lg:absolute top-0 right-[52%] bottom-[55%] lg:max-w-[630px] ">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              About me
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" px-6 items-center  lg:px-10 ">
            <div className="flex py-5">
              <div className="flex pl-2 space-x-4 items-center text-center ">
                <Image
                  className="rounded-full  "
                  width={50}
                  height={50}
                  src="https://media.licdn.com/dms/image/D4D03AQHtEvT147hPuA/profile-displayphoto-shrink_200_200/0/1648204579075?e=1681948800&v=beta&t=lA-EyJME5Ok3zOmc_evEkmoRoQ00ptTe8U5etCW_8Ys"
                />
              </div>

              <div className="items-center text-left pl-5 ">
                <h2 className="sm:text-2xl font-bold ">Lorenzo Polato</h2>
                <h3 className="sm:text-lg font-semibold ">
                  Swift and UIKit Developer
                </h3>
              </div>
            </div>
            <div
              className=" space-y-3 text-[#595260] text-justify px-1 
                ">
              <p>Hi! Welcome to my website.</p>
              <p className="">
                I am Lore, a junior developer who loves creating beautiful and
                functional apps with Swift and UIKit.{" "}
              </p>

              <p className="pb-5 ">
                If you are interested in working with me or just want to say hi,
                feel free to{" "}
                <span className="link">
                  <a href="mailto:lorenzo.polato@gmail.com">contact me</a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="  bg-[#fbfaf6] opacity-80 rounded-2xl shadow-lg z-10 drop-shadow-2xl 
          lg:absolute top-0  right-0 bottom-[19%] left-0 lg:opacity-100 lg:bg-[#f0ebd8]
         ">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              About me
            </p>
            <ArrowsPointingInIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" px-6 items-center lg:px-10 ">
            <div className="flex py-5">
              <div className="flex pl-2 space-x-4 items-center text-center ">
                <Image
                  className="rounded-full  "
                  width={50}
                  height={50}
                  src="https://media.licdn.com/dms/image/D4D03AQHtEvT147hPuA/profile-displayphoto-shrink_200_200/0/1648204579075?e=1681948800&v=beta&t=lA-EyJME5Ok3zOmc_evEkmoRoQ00ptTe8U5etCW_8Ys"
                />
              </div>

              <div className="items-center text-left pl-5 ">
                <h2 className="sm:text-2xl font-bold ">Lorenzo Polato</h2>
                <h3 className="sm:text-lg font-semibold ">
                  Swift and UIKit Developer
                </h3>
              </div>
            </div>

            <div
              className=" space-y-3  text-[#595260] text-justify px-1 
             lg:space-y-5  lg:leading-relaxed ">
              <p className="">Hi! Welcome to my website.</p>
              <p>I am Lore, a junior iOS Developer. </p>
              <p>
                My experience with coding started in Uni when I studied Fortran,
                Python and LaTeX.
              </p>

              <div>
                <p className=" ">
                  Nowadays my focus has shifted to Swift and iOS development.
                  Apple’s own book series{" "}
                  <span className="link">
                    <a
                      href="https://developer.apple.com/learn/curriculum/"
                      target="_blank"
                      rel="noopener noreferrer">
                      (Link here)
                    </a>
                  </span>{" "}
                  helped me understand and tame UIKit during the last year and a
                  half. You can check out my personal projects on the side tab.
                </p>
                <p className="">
                  In the last few months I have started to learn SwiftUI and
                  Combine, too. For that I have been relying mostly on the
                  official documentation and WWDC sessions, but also on Udemy’s
                  SwiftUI Masterclass by Robert Petras.
                </p>
              </div>

              <p>
                When I am not coding I enjoy reading popular science and
                philosophy books, playing piano or guitar, or experiment with
                homemade cocktails.
              </p>
              <p className="pb-10 ">
                If you are interested in working with me or just want to say hi,
                feel free to{" "}
                <span className="link">
                  <a href="mailto:lorenzo.polato@gmail.com">contact me</a>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
