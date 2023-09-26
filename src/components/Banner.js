import React, { useState } from 'react';
import AboutMeSmall from './AboutMeSmall';
import ProjectsSmall from './ProjectsSmall';
import SkillsSmall from './SkillsSmall';
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid';

import AboutMeLarge from './AboutMeLarge';
import ProjectsLarge from './ProjectsLarge';
import ExpSmall from './ExpSmall';
import ExpLarge from './ExpLarge';

function Banner() {
  const [show, setShow] = useState(false);
  const [skillsShow, setSkillsShow] = useState(false);
  const [expShow, setExpShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };

  const skillsIsClicked = () => {
    setSkillsShow(!skillsShow);
  };

  const expIsClicked = () => {
    setExpShow(!expShow);
  };

  return (
    <div
      className="lg:grid lg:grid-cols-3 lg:grid-flow-row gap-10 p-10 lg:mx-3 
    xl:mx-10 space-y-10 lg:space-y-0"
      // min-h-[90vh]
    >
      {/* 1 box */}
      <div className=" lg:row-span-2 lg:col-span-1 ">
        {!show ? (
          <div
            className="bg-[#fbfaf6] opacity-80 rounded-2xl shadow-lg drop-shadow-2xl 
            min-h-full min-w-full"
            // lg:absolute top-0 right-[52%] bottom-[55%] lg:max-w-[630px]
          >
            <div
              className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center 
          rounded-t-2xl p-2 pb-5 "
            >
              <p className="p-1 text-left text-[#595260] font-semibold ">
                About me
              </p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={isClicked}
              />
            </div>

            <AboutMeSmall />
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
            <AboutMeLarge />
          </div>
        )}
      </div>
      {/* 2 box */}
      <div className="lg:col-span-2 lg:row-span-2">
        {!skillsShow ? (
          <div
            className="bg-[#fbfaf6] opacity-80 rounded-2xl shadow-lg drop-shadow-2xl 
          text-[#595260] lg:min-h-full min-w-full"
            //lg:absolute top-0 left-[51%] bottom-[19%] right-0 lg:max-w-[900px]
          >
            <div
              className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center 
          rounded-t-2xl p-2 pb-5 "
            >
              <p className="p-1 text-left text-[#595260] font-semibold ">
                Projects
              </p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={skillsIsClicked}
              />
            </div>
            <ProjectsSmall />
          </div>
        ) : (
          <div
            className=" bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg drop-shadow-2xl z-10 text-[#595260]
        lg:opacity-100 lg:bg-[#f0ebd8] "
            // lg:absolute top-0  right-0 bottom-[19%] left-0"
          >
            <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
              <p className="p-1 text-left text-[#595260] font-semibold ">
                Projects
              </p>
              <ArrowsPointingInIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={skillsIsClicked}
              />
            </div>
            <ProjectsLarge />
          </div>
        )}
      </div>

      {/* 4 Box */}
      <div className="col-span-2 row-span-2 text-[#595260] rounded-2xl">
        {!expShow ? (
          <div
            className=" bg-[#fbfaf6] opacity-80 rounded-2xl shadow-lg drop-shadow-2xl min-h-full
         "
            // lg:absolute left-0  top-[50%] right-[52%]  bottom-[19%]  lg:max-w-[630px]
          >
            <div
              className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center 
          rounded-t-2xl p-2 pb-5 "
            >
              <p className="p-1 text-left text-[#595260] font-semibold ">
                Experience
              </p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={expIsClicked}
              />
            </div>
            <ExpSmall />
          </div>
        ) : (
          <div
            className=" bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg z-10 drop-shadow-2xl
        lg:opacity-100 lg:bg-[#f0ebd8] "
            // lg:absolute top-0  right-0 bottom-[19%] left-0"
          >
            <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
              <p className="p-1 text-left font-semibold ">Experience</p>
              <ArrowsPointingInIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={expIsClicked}
              />
            </div>
            <ExpLarge />
          </div>
        )}
      </div>
      {/* 3 Box */}
      <div
        className="col-span-1 row-span-2 backdrop-blur bg-[#fbfaf6]/30 rounded-2xl shadow-lg drop-shadow-2xl "
        // lg:absolute top-0 right-[52%] bottom-[55%] lg:max-w-[630px]
      >
        <SkillsSmall />
      </div>
    </div>
  );
}

export default Banner;
