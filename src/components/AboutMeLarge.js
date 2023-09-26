import React from 'react';
import Profile from '../../public/images/LoreProfile.jpeg';
import Image from 'next/image';

function AboutMeLarge() {
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
        className=" space-y-3  text-[#595260] text-justify px-1 
 lg:space-y-4  lg:leading-relaxed "
      >
        <div className="space-y-1 lg:space-y-2 font-semibold">
          <p className="">Hi I am Lore!</p>
          <p>Welcome to my website! </p>
        </div>

        <div className="space-y-3 lg:space-y-4">
          <p>
            I'm a junior iOS developer with a passion for Swift and SwiftUI. My
            journey in the world of iOS development started not too long ago,
            but I've quickly become addicted to the power and elegance of
            SwiftUI.
          </p>

          <p className=" ">
            Simplicity is at the core of my development philosophy. I believe in
            crafting clean and intuitive user interfaces that not only look
            great but also provide a seamless experience. I strive to create
            apps that users can effortlessly navigate and enjoy.
          </p>
          <p className="">
            Eagerness to learn is my driving force. The ever-evolving nature of
            technology keeps me motivated to constantly expand my skillset. I
            actively seek out new challenges and opportunities for growth,
            always looking to enhance my knowledge and improve my coding
            practices.
          </p>

          <p>
            I am enthusiastic about collaborating with experienced developers
            and being part of a team that values innovation and creativity.
            Working in a collaborative environment allows me to learn from
            others while contributing my unique perspectives.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest trends in
            the iOS development community, reading tech blogs, or experimenting
            with new app ideas. I'm always excited to discuss new projects and
            ideas, so feel free to reach out!
          </p>
          <p>
            Thank you for visiting my website. Let's connect and create amazing
            experiences together!
          </p>
        </div>
        <p className="pb-10 text-center">
          <span className="link text-[#EE7B22]">
            <a href="mailto:lorenzo.polato@gmail.com">Contact me</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMeLarge;
