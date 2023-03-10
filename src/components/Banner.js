import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import WorkExp from "./WorkExp";

function Banner() {
  return (
    <div className="relative  h-screen ">
      {/* add h-screen */}

      <div className="p-10 space-y-10 md:space-y-0">
        <AboutMe />
        {/* 2 box */}
        <Skills />

        {/* 3 Box */}
        <WorkExp />
        {/* 4 box */}
      </div>
    </div>
  );
}

export default Banner;

// [#7209b7]
