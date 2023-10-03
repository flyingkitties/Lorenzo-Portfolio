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
      className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-3 gap-10 p-10 lg:mx-3 
    xl:mx-10"
    >
      {/* 1 box */}
      <div
        className={` ${
          show
            ? 'relative lg:row-span-full col-span-3'
            : 'relative lg:row-span-1 lg:col-span-2'
        }`}
      >
        {!show ? (
          <div className="lg:absolute top-0 bottom-12 left-0 right-0">
            {/* Header */}
            <div
              className="flex justify-between backdrop-blur
               bg-[#fbfaf6]/30 dark:bg-gray-500/30 items-center 
          rounded-t-2xl p-2 text-[#fbfaf6]"
            >
              <p className="p-1 text-left font-semibold">About me</p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={isClicked}
              />
            </div>
            {/* end of Header */}
            {/* Body */}
            <div
              className=" rounded-b-2xl shadow-lg drop-shadow-2xl 
             bg-[#fbfaf6] h-[100%]"
            >
              <AboutMeSmall />
            </div>
          </div>
        ) : (
          <div className="lg:absolute top-0 bottom-0 left-0 right-0 z-10">
            {/* Header */}
            <div
              className="flex justify-between backdrop-blur
               bg-[#fbfaf6]/30 dark:bg-gray-500/30 items-center 
          rounded-t-2xl p-2 text-[#fbfaf6]"
            >
              <p className="p-1 text-left font-semibold ">About me</p>
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
      <div className="lg:col-span-1 lg:row-span-2">
        <div className="lg:relative">
          {/* Header */}
          <div
            className="flex justify-between backdrop-blur
               bg-[#fbfaf6]/30 dark:bg-gray-500/30 items-center 
          rounded-t-2xl p-2 text-[#fbfaf6]"
          >
            <p className="p-1 text-left text-[#fbfaf6] font-semibold ">
              Projects
            </p>
          </div>
          <div
            className={`rounded-b-2xl shadow-lg drop-shadow-2xl  bg-[#fbfaf6]
          lg:absolute bottom-0 left-0 right-0 top-12 ${
            show || expShow ? 'min-h-[600px]' : 'min-h-[655px]'
          }`}
          >
            <ProjectsSmall />
          </div>
        </div>
      </div>

      {/* 3 Box */}
      <div
        className={` ${
          expShow
            ? 'relative lg:row-span-full col-span-3'
            : 'relative lg:row-span-1 lg:col-span-1'
        }`}
      >
        {!expShow ? (
          <div className="lg:absolute top-0 bottom-12 left-0 right-0">
            {/* Header */}
            <div
              className="flex justify-between backdrop-blur
               bg-[#fbfaf6]/30 dark:bg-gray-500/30 items-center 
          rounded-t-2xl p-2 text-[#fbfaf6]"
            >
              <p className="p-1 text-left font-semibold ">Experience</p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 absolute right-4 cursor-pointer"
                onClick={expIsClicked}
              />
            </div>
            {/* Body */}
            <div
              className="rounded-b-2xl shadow-lg drop-shadow-2xl 
             bg-[#fbfaf6] h-[100%]
         "
            >
              <ExpSmall />
            </div>
          </div>
        ) : (
          <div className="lg:absolute top-0 bottom-0 left-0 right-0 z-10">
            {/* Header */}
            <div
              className="flex justify-between backdrop-blur
               bg-[#fbfaf6]/30 dark:bg-gray-500/30 items-center 
          rounded-t-2xl p-2 text-[#fbfaf6] "
            >
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
      {/* 4 Box */}
      <div className="lg:col-span-1 lg:row-span-1">
        <div
          className="backdrop-blur bg-[#fbfaf6]/30 
        rounded-2xl shadow-lg drop-shadow-2xl lg:min-h-full"
        >
          <SkillsSmall />
        </div>
      </div>
    </div>
  );
}

export default Banner;
