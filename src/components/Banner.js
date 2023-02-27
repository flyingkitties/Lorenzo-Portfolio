import Image from "next/image";
import React from "react";
import BImage from "../../public/images/Shutterstock_2149385873.jpg";
import Typewriter from "typewriter-effect";

function Banner() {
  return (
    <div className="flex flex-col h-screen  ">
      {/* add h-screen */}

      <div className="grid grid-cols-2  gap-7 p-20  ">
        {/* 1 box */}
        <div className="row-span-3 bg-[#FFFFFF] rounded-lg shadow-lg z-5 drop-shadow-2xl ">
          <div className="relative bg-gradient-to-b from-[#DFDFDE] rounded-t-lg p-2 pb-10 ">
            <p className="p-1 text-left text-[#595260] font-semibold">
              About me
            </p>{" "}
          </div>
          box 1
        </div>
        {/* 2 box */}
        <div className="row-span-1 bg-[#FFFFFF] rounded-lg shadow-lg z-5 drop-shadow-2xl">
          <div className="relative bg-gradient-to-b from-[#DFDFDE] rounded-t-lg p-2 pb-10 ">
            <p className="p-1 text-left  text-[#595260] font-semibold">
              Skills
            </p>{" "}
          </div>
          <p className="p-14"> box 2</p>
        </div>
        {/* 3 Box */}
        <div className="row-span-2 bg-[#FFFFFF] rounded-lg shadow-lg z-5 drop-shadow-2xl">
          <div className="relative bg-gradient-to-b from-[#DFDFDE] rounded-t-lg p-2 pb-10  ">
            <p className="p-1 text-left  text-[#595260] font-semibold">
              GitHub
            </p>{" "}
          </div>
          <p className="p-24"> box 3</p>
        </div>
        {/* 4 box */}
        <div className="col-span-2 bg-[#FFFFFF] rounded-lg shadow-lg z-5 drop-shadow-2xl">
          <div className="relative bg-gradient-to-b from-[#DFDFDE] rounded-t-lg p-2 pb-10  ">
            <p className="p-1 text-left  text-[#595260] font-semibold">
              Work Experience
            </p>{" "}
          </div>
          <p className="p-10">box 4</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;

// [#7209b7]
