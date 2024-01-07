import React from 'react';
import Image from 'next/image';
import Profile from '../../public/images/profile/profile-2024.jpeg';

function AboutMeLarge() {
  return (
    <div
      className=" px-6 items-center lg:px-20 rounded-b-2xl shadow-lg drop-shadow-2xl 
    bg-[#fbfaf6] pb-2 dark:bg-[#1C1C1E] dark:text-[#fbfaf6]"
    >
      <div className="flex py-5 lg:py-10 items-center">
        <div className="flex pl-2 space-x-4 items-center text-center ">
          <Image
            className="rounded-full  "
            width={80}
            height={80}
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
 lg:space-y-4  lg:leading-relaxed dark:text-[#fbfaf6]"
      >
        <div className="space-y-1 lg:pb-10 font-semibold">
          <p className="">Welcome!</p>
        </div>

        <div className="space-y-3 lg:space-y-5">
          <p>
            I embarked on my journey in iOS development two years ago, initially
            diving into UIKit and then embracing SwiftUI. My passion lies in
            creating intentional and visually appealing user interfaces.
          </p>

          <p className=" ">
            Over time, I've gathered experience across various Apple frameworks
            and have utilised both on device and cloud databases for my apps.
          </p>
          <p className="">
            What fuels my enthusiasm is an appetite for learning. Technology is
            a dynamic and ever-evolving realm, and I thrive on seeking out new
            challenges and opportunities for growth. Constantly expanding my
            knowledge and refining my coding practices is my way of staying
            ahead in this fast-paced field.
          </p>

          <p>
            I'm genuinely excited about collaborating with experienced
            developers and being part of a team that values innovation and
            creativity. Working collaboratively not only allows me to learn from
            others but also enables me to contribute my unique perspectives to
            exciting projects.
          </p>
          <p>
            Thank you for taking the time to visit my website. I'm always open
            to discussions about new projects and opportunities.
          </p>
          <p>
            Don't hesitate to reach out. let's connect and create amazing
            experiences together!
          </p>
        </div>
        <p className="py-10 text-center">
          <span className="link text-[#EE7B22] dark:text-[#98E4FF]">
            <a href="mailto:lorenzo.polato@gmail.com">Contact me</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default AboutMeLarge;
