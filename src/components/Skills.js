import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Home.module.css';
import Emoji from '../../public/images/EmojiDictionary.png';
import EmojiDictionary1 from '../../public/images/screenShots/emojiDictionary1.png';
import EmojiDictionary2 from '../../public/images/screenShots/emojiDictionary2.png';
import EmojiDictionary3 from '../../public/images/screenShots/emojiDictionary3.png';
import EmojiDictionary4 from '../../public/images/screenShots/emojiDictionary4.png';
import Streaming from '../../public/images/Netflix.png';
import Netflix1 from '../../public/images/screenShots/Netflix1.png';
import Netflix2 from '../../public/images/screenShots/Netflix2.png';
import Netflix3 from '../../public/images/screenShots/Netflix3.png';
import Netflix4 from '../../public/images/screenShots/Netflix4.png';
import ToDoApp from '../../public/images/ToDoApp.png';
import ToDoApp1 from '../../public/images/screenShots/ToDo1.png';
import ToDoApp2 from '../../public/images/screenShots/ToDo2.png';
import Climates from '../../public/images/climates.png';
import Climates1 from '../../public/images/screenShots/climates1.png';
import Climates2 from '../../public/images/screenShots/climates2.png';
import Scoreboard from '../../public/images/scoreboard.png';
import Scoreboard1 from '../../public/images/screenShots/scoreboard1.png';
import Scoreboard2 from '../../public/images/screenShots/scoreboard2.png';
import Scoreboard3 from '../../public/images/screenShots/scoreboard3.png';

function Skills() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };

  return (
    <div className="">
      {!show ? (
        <div
          className="bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg drop-shadow-2xl text-[#595260]
         lg:absolute top-0 left-[51%] bottom-[19%] right-0 lg:max-w-[900px] ">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Projects
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-2 ld:px-24 sm:px-8 lg:px-10 md:px-20  p-5 sm:gap-5  gap-3">
            <a
              href="https://github.com/Salubrejoe/Emoji-Dictionary"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
                <Image
                  src={Emoji}
                  width={50}
                  height={50}
                  className="rounded-lg hover:border-2 "
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
                  src={Climates}
                  width={50}
                  height={50}
                  className="rounded-lg hover:border-2"
                />
                <p className="p-4 text-sm">Climates</p>
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
                  className="rounded-lg hover:border-2"
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
                  className="rounded-lg hover:border-2"
                />
                <p className="p-4 text-sm">To Do App</p>
              </div>
            </a>

            <a
              href="https://github.com/Salubrejoe/Pinch"
              target="_blank"
              rel="noopener noreferrer">
              <div className="projectButton">
                <Image
                  src={Scoreboard}
                  width={50}
                  height={50}
                  className="rounded-lg hover:border-2"
                />
                <p className="p-4 text-sm">Scoreboard</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div
          className=" bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg drop-shadow-2xl z-10 text-[#595260]
        lg:opacity-100 lg:bg-[#f0ebd8] lg:absolute top-0  right-0 bottom-[19%] left-0">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
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
                    className="rounded-lg hover:border-2 "
                  />
                  <p className="p-4 text-sm ">Emoji Dictionary</p>
                </div>
              </a>
              <Carousel
                showThumbs={false}
                width={150}
                swipeable="true"
                emulateTouch="true"
                className="control-dots dot">
                <div className=" flex items-center cursor-pointer ">
                  <Image
                    src={EmojiDictionary1}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={EmojiDictionary2}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={EmojiDictionary3}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={EmojiDictionary4}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
            </div>
            <div className=" expCards ">
              <a
                href="https://github.com/Salubrejoe/StremingService-Clone"
                target="_blank"
                rel="noopener noreferrer">
                <div className="p-3 flex items-center cursor-pointer">
                  <Image
                    src={Climates}
                    width={50}
                    height={50}
                    className="rounded-lg hover:border-2"
                  />
                  <p className="p-4 text-sm">Climates</p>
                </div>
              </a>
              <Carousel
                showThumbs={false}
                width={150}
                swipeable="true"
                emulateTouch="true"
                className="control-dots dot">
                <div className=" flex items-center cursor-pointer ">
                  <Image
                    src={Climates1}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Climates2}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
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
                    className="rounded-lg hover:border-2"
                  />
                  <p className="p-4 text-sm">Streaming Clone</p>
                </div>
              </a>
              <Carousel
                showThumbs={false}
                width={150}
                swipeable="true"
                emulateTouch="true"
                className="control-dots dot">
                <div className=" flex items-center cursor-pointer ">
                  <Image
                    src={Netflix1}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Netflix2}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Netflix3}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Netflix4}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
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
                    className="rounded-lg hover:border-2"
                  />
                  <p className="p-4 text-sm">To Do App</p>
                </div>
              </a>
              <Carousel
                showThumbs={false}
                width={150}
                swipeable="true"
                emulateTouch="true"
                className="control-dots dot">
                <div className=" flex items-center cursor-pointer ">
                  <Image
                    src={ToDoApp1}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={ToDoApp2}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
            </div>

            <div className=" expCards ">
              <a
                href="https://github.com/Salubrejoe/Pinch"
                target="_blank"
                rel="noopener noreferrer">
                <div className="p-3 flex items-center cursor-pointer">
                  <Image
                    src={Scoreboard}
                    width={50}
                    height={50}
                    className="rounded-lg hover:border-2"
                  />
                  <p className="p-4 text-sm">Scoreboard</p>
                </div>
              </a>
              <Carousel
                showThumbs={false}
                width={150}
                swipeable="true"
                emulateTouch="true"
                className="control-dots dot">
                <div className=" flex items-center cursor-pointer ">
                  <Image
                    src={Scoreboard1}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Scoreboard2}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src={Scoreboard3}
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
