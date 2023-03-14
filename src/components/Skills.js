import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import Emoji from "../../public/images/EmojiDictionary.png";
import Itunes from "../../public/images/ItunesSearch.png";
import Nasa from "../../public/images/NASAPhotoApp.png";
import Streaming from "../../public/images/StremingServiceClone.png";
import ToDoApp from "../../public/images/ToDoApp.png";
import Fructus from "../../public/images/Fructus.png";
import Pitch from "../../public/images/Pitch.jpeg";

function Skills() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };
  return (
    <div className="row-span-2">
      {!show ? (
        <div className="bg-[#fbfaf6] opacity-80  rounded-lg shadow-lg drop-shadow-2xl text-[#595260]">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Projects
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 px-24 sm:px-8 lg:px-10 md:px-20  p-5 sm:gap-5  gap-3">
            <a
              href="https://github.com/Salubrejoe/Emoji-Dictionary"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
                <Image
                  src={Emoji}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2 "
                />
                <p className="p-4 text-sm ">Emoji Dictionary</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/iTunes-Search"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
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
              <div className="projectButton">
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
              <div className="projectButton">
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
              <div className="projectButton">
                <Image
                  src={ToDoApp}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">To Do App</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/Fructus"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
                <Image
                  src={Fructus}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">Fructus App</p>
              </div>
            </a>
            <a
              href="https://github.com/Salubrejoe/Pinch"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
                <Image
                  src={Pitch}
                  width={50}
                  height={50}
                  className="rounded-full hover:border-2"
                />
                <p className="p-4 text-sm">Pitch App</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className=" bg-[#fbfaf6] opacity-80  rounded-lg shadow-lg drop-shadow-2xl z-10 text-[#595260]">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-lg p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Projects
            </p>
            <ArrowsPointingInIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div
            className="  px-24 sm:px-8 lg:px-10 md:px-20  p-5 flex overflow-scroll overflow-x-scroll scrollbar-thin
             scrollbar-track-gray-500/20 ">
            <div className=" expCards ">
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
                  <p className="p-4 text-sm ">Emoji Dictionary</p>
                </div>
              </a>
              <div>
                <Image
                  src={require("../../public/images/GIFs/Emoji1.gif")}
                  alt="Loading"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className=" expCards ">
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
              <div>
                <Image
                  src={require("../../public/images/GIFs/iTunesSearch.gif")}
                  alt="Loading"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className=" expCards ">
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
              <div>
                <Image
                  src={require("../../public/images/GIFs/AppStoreLayout.gif")}
                  alt="Loading"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className=" expCards ">
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
              <div>
                <Image
                  src={require("../../public/images/GIFs/StreamingClone.gif")}
                  alt="Loading"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className=" expCards ">
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
              <div>
                <Image
                  src={require("../../public/images/GIFs/To Do.gif")}
                  alt="Loading"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className=" expCards ">
              <a
                href="https://github.com/Salubrejoe/Fructus"
                target="_blank"
                rel="noopener noreferrer">
                <div className="p-3 flex items-center cursor-pointer">
                  <Image
                    src={Fructus}
                    width={50}
                    height={50}
                    className="rounded-full hover:border-2"
                  />
                  <p className="p-4 text-sm">Fructus App</p>
                </div>
              </a>
              <div>
                {/* <Image
                  src={require("../../public/images/GIFs/Fructus.GIF")}
                  alt="Loading"
                  width={150}
                  height={150}
                /> */}
              </div>
            </div>
            <div className=" expCards ">
              <a
                href="https://github.com/Salubrejoe/Pinch"
                target="_blank"
                rel="noopener noreferrer">
                <div className="p-3 flex items-center cursor-pointer">
                  <Image
                    src={Pitch}
                    width={50}
                    height={50}
                    className="rounded-full hover:border-2"
                  />
                  <p className="p-4 text-sm">Pitch App</p>
                </div>
              </a>
              <div>
                {/* <Image
                  src={require("../../public/images/GIFs/Pinch.GIF")}
                  alt="Loading"
                  width={150}
                  height={150}
                /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
