import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import WorkExp from "./WorkExp";

function Banner() {
  return (
    <div
      className="p-10 space-y-10 lg:space-y-0
    lg:grid lg:grid-cols-2 lg:gap-5 ">
      <AboutMe />
      {/* 2 box */}
      <Skills />

      {/* 3 Box */}
      <WorkExp />
      {/* 4 box */}
    </div>
  );
}

export default Banner;

// [#7209b7]
