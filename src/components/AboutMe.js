import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/solid';
import Profile from '../../public/images/LoreProfile.jpeg';

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
        lg:absolute top-0 right-[52%] bottom-[55%] lg:max-w-[630px] "
        >
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
                  src={Profile}
                />
              </div>

              <div className="items-center text-left pl-5 ">
                <h2 className="sm:text-2xl font-bold ">Lore P.</h2>
                <h3 className="sm:text-lg font-semibold ">iOS Developer</h3>
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
                If you are interested in working with me or just want to say hi,
                feel free to{' '}
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
         "
        >
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
                  src="https://media.licdn.com/dms/image/D4E35AQFz5qdM__FujQ/profile-framedphoto-shrink_100_100/0/1685440839642?e=1686052800&v=beta&t=d7b50K01hQE9g7XtxWHJiVAku-WoE9kvhCefU82WbDQ"
                />
              </div>

              <div className="items-center text-left pl-5 ">
                <h2 className="sm:text-2xl font-bold ">Lore P.</h2>
                <h3 className="sm:text-lg font-semibold ">iOS Developer</h3>
              </div>
            </div>

            <div
              className=" space-y-3  text-[#595260] text-justify px-1 
             lg:space-y-4  lg:leading-relaxed "
            >
              <div className="space-y-1 lg:space-y-2 font-semibold">
                <p className="">Hi I am Lore!</p>
                <p>Welcome to my website! </p>
              </div>

              <div className="space-y-3 lg:space-y-4">
                <p>
                  I'm a junior iOS developer with a passion for Swift and
                  SwiftUI. My journey in the world of iOS development started
                  not too long ago, but I've quickly become addicted to the
                  power and elegance of SwiftUI.
                </p>

                <p className=" ">
                  Simplicity is at the core of my development philosophy. I
                  believe in crafting clean and intuitive user interfaces that
                  not only look great but also provide a seamless experience. I
                  strive to create apps that users can effortlessly navigate and
                  enjoy.
                </p>
                <p className="">
                  Eagerness to learn is my driving force. The ever-evolving
                  nature of technology keeps me motivated to constantly expand
                  my skillset. I actively seek out new challenges and
                  opportunities for growth, always looking to enhance my
                  knowledge and improve my coding practices.
                </p>

                <p>
                  I am enthusiastic about collaborating with experienced
                  developers and being part of a team that values innovation and
                  creativity. Working in a collaborative environment allows me
                  to learn from others while contributing my unique
                  perspectives.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the latest
                  trends in the iOS development community, reading tech blogs,
                  or experimenting with new app ideas. I'm always excited to
                  discuss new projects and ideas, so feel free to reach out!
                </p>
                <p>
                  Thank you for visiting my website. Let's connect and create
                  amazing experiences together!
                </p>
              </div>
              <p className="pb-10 text-center">
                <span className="link text-[#EE7B22]">
                  <a href="mailto:lorenzo.polato@gmail.com">Contact me</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutMe;
