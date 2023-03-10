import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Emoji from "../../public/images/EmojiDictionary.png";
import Itunes from "../../public/images/ItunesSearch.png";
import Nasa from "../../public/images/NASAPhotoApp.png";
import Streaming from "../../public/images/StremingServiceClone.png";
import ToDoApp from "../../public/images/ToDoApp.png";

function Skills() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };
  return (
    <div className="relative ">
      {!show ? (
        <div
          className=" bg-[#FFFFFF] rounded-lg shadow-lg drop-shadow-2xl
       md:max-w-[350px] lg:min-w-[600px]  md:absolute top-0 right-0 text-[#595260]">
          <div className="flex relative bg-gradient-to-b from-[#DFDFDE] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Projects
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" grid lg:grid-cols-3 grid-cols-2 lg:px-10 md:px-2 px-5 gap-x-5 mx-auto">
            <a
              href="https://github.com/Salubrejoe/Emoji-Dictionary"
              target="_blank"
              rel="noopener noreferrer">
              <div className="p-3 flex items-center cursor-pointer">
                <Image
                  src={Emoji}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2 "
                />
                <p className="p-4 text-sm">Emoji Dictionary</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/iTunes-Search"
              target="_blank"
              rel="noopener noreferrer">
              <div className="p-3 flex items-center cursor-pointer">
                <Image
                  src={Itunes}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">Itunes Search</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/NASAPhotoApp"
              target="_blank"
              rel="noopener noreferrer">
              <div className="p-3 flex items-center cursor-pointer">
                <Image
                  src={Nasa}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">NASA Photo App</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/StremingService-Clone"
              target="_blank"
              rel="noopener noreferrer">
              <div className="p-3 flex items-center cursor-pointer">
                <Image
                  src={Streaming}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">Streaming Clone</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/ToDoListApp"
              target="_blank"
              rel="noopener noreferrer">
              <div className="p-3 flex items-center cursor-pointer">
                <Image
                  src={ToDoApp}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">To Do App</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div
          className=" bg-[#FFFFFF] rounded-lg shadow-lg drop-shadow-2xl z-10
       md:max-w-[350px] lg:max-w-[500px] absolute top-0 right-0">
          <div className="flex relative bg-gradient-to-b from-[#DFDFDE] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Projects
            </p>
            <ArrowsPointingInIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>
          <div>
            <img
              src="https://github.com/Salubrejoe/Emoji-Dictionary/blob/main/First.GIF"
              alt="loading"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
