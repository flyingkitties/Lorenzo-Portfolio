import React, { useState } from 'react';
import AboutMeSmall from './AboutMeSmall';
import ProjectsSmall from './ProjectsSmall';
import SkillsSmall from './SkillsSmall';
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid';
import AboutMeLarge from './AboutMeLarge';
import ExpSmall from './ExpSmall';
import ExpLarge from './ExpLarge';

function Banner() {
  const [show, setShow] = useState(false);
  const [expShow, setExpShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };

  const expIsClicked = () => {
    setExpShow(!expShow);
  };

  return (
    <div
      className="flex flex-col lg:grid lg:grid-rows-hScreen lg:grid-cols-3 auto-rows-auto gap-10 p-5 md:p-12 lg:mx-3 
    xl:mx-10 max-h-screen"
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
          <div className="lg:relative top-0 bottom-0 left-0 right-0 h-[100%] ">
            {/* Header */}
            <div className="headerTransparent">
              <p className="headerTitle">About me</p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 relative right-2 cursor-pointer"
                onClick={isClicked}
              />
            </div>
            {/* end of Header */}
            {/* Body */}
            <div className="flex items-center regularBody h-[87%] darkModeBody lg:mb-12 pb-3 lg:pb-0">
              <AboutMeSmall />
            </div>
          </div>
        ) : (
          <div className="lg:relative top-0 bottom-0 left-0 right-0 z-10">
            {/* Header */}
            <div className="headerTransparent">
              <p className="headerTitle">About me</p>
              <ArrowsPointingInIcon
                className="h-4 w-4 relative right-2 cursor-pointer"
                onClick={isClicked}
              />
            </div>
            {/* Body */}
            <AboutMeLarge />
          </div>
        )}
      </div>
      {/* 4 Box (small screen only)*/}
      <div className="lg:hidden">
        <div className="bodyTransparent">
          <SkillsSmall />
        </div>
      </div>
      {/* 2 box */}
      <div className={` ${show ? 'hidden' : 'lg:col-span-1 lg:row-span-2 '}`}>
        <div className="lg:relative top-0 bottom-0 left-0 right-0 h-[100%]">
          {/* Header */}
          <div className="headerTransparent">
            <p className="headerTitle">Projects</p>
          </div>
          {/* Body */}
          <div
            className={`regularBody darkModeBody lg:relative bottom-0 left-0 right-0 
            top-0 h-[94%] ${
              show || expShow ? 'lg:min-h-[500px]' : 'lg:min-h-[655px]'
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
        }
        ${show && 'hidden'}`}
      >
        {!expShow ? (
          <div className="lg:relative top-0 bottom-0 left-0 right-0 h-[87%]">
            {/* Header */}
            <div className="headerTransparent">
              <p className="headerTitle">Experience</p>
              <ArrowsPointingOutIcon
                className="h-4 w-4 relative right-2 cursor-pointer"
                onClick={expIsClicked}
              />
            </div>
            {/* Body */}
            <div
              className="regularBody h-[100%] darkModeBody rounded-b-2xl
         "
            >
              <ExpSmall />
            </div>
          </div>
        ) : (
          <div className="lg:relative top-0 bottom-0 left-0 right-0 z-10">
            {/* Header */}
            <div className="headerTransparent">
              <p className="headerTitle">Experience</p>
              <ArrowsPointingInIcon
                className="h-4 w-4 relative right-2 cursor-pointer"
                onClick={expIsClicked}
              />
            </div>
            <ExpLarge />
          </div>
        )}
      </div>
      {/* 4 Box (Large screen only)*/}
      <div
        className={`hidden lg:grid lg:col-span-1 lg:row-span-1 ${
          show && 'hidden!'
        } ${setExpShow && 'hidden!'}`}
      >
        <div className="bodyTransparent">
          <SkillsSmall />
        </div>
      </div>
    </div>
  );
}

export default Banner;
