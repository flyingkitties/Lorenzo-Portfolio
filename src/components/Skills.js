import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../styles/Home.module.css';
import Emoji from '../../public/images/EmojiDictionary.png';
import ShoppingList from '../../public/images/ShoppingList.png';
import Streaming from '../../public/images/Netflix.png';
import ToDoApp from '../../public/images/ToDoApp.png';
import Climates from '../../public/images/Climates.png';
import Scoreboard from '../../public/images/scoreboard.png';

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
                  src={ShoppingList}
                  width={50}
                  height={50}
                  className="rounded-lg hover:border-2 "
                />
                <p className="p-4 text-sm ">Shopping List</p>
              </div>
            </a>
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
                    src={ShoppingList}
                    width={50}
                    height={50}
                    className="rounded-lg hover:border-2 "
                  />
                  <p className="p-4 text-sm ">Shopping List</p>
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
                    src="https://live.staticflickr.com/65535/52940025753_f9090ed787_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939714104_d1ef503f71_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939569716_0ad7ee22e3_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52938973887_8147b28b58_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
              </Carousel>
            </div>
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
                    src="https://live.staticflickr.com/65535/52939569891_b22619dffd_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52938974002_6340a5d117_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52940025963_e767640bb0_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939569936_fb653ca9d1_k.jpg"
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
                    src="https://live.staticflickr.com/65535/52939569951_7210e5ec2e_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52940026018_329ff6e246_k.jpg"
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
                    src="https://live.staticflickr.com/65535/52938973952_496cc41e2c_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939714479_6755cbb778_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939569906_440b688fee_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52939958855_1c4e35dedd_k.jpg"
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
                    src="https://live.staticflickr.com/65535/52938973857_2e8c46fde6_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52940025738_e918363074_k.jpg"
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
                    src="https://live.staticflickr.com/65535/52939714149_12cb03d6a2_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52940025793_9b7e209b04_k.jpg"
                    alt="Loading"
                    width={150}
                    height={150}
                  />
                </div>
                <div className=" flex items-center cursor-pointer">
                  <Image
                    src="https://live.staticflickr.com/65535/52938973927_834e648129_k.jpg"
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

// Images from Flickr
// img src="https://live.staticflickr.com/65535/52938974002_6340a5d117_k.jpg"
// src = 'https://live.staticflickr.com/65535/52940025963_e767640bb0_k.jpg';
// src = 'https://live.staticflickr.com/65535/52939569891_b22619dffd_k.jpg';
// src = 'https://live.staticflickr.com/65535/52939569936_fb653ca9d1_k.jpg';

// src = 'https://live.staticflickr.com/65535/52939569951_7210e5ec2e_k.jpg';
// src = 'https://live.staticflickr.com/65535/52940026018_329ff6e246_k.jpg';

//  src="https://live.staticflickr.com/65535/52938973952_496cc41e2c_k.jpg"
//  src="https://live.staticflickr.com/65535/52939714479_6755cbb778_k.jpg"
// src="https://live.staticflickr.com/65535/52939569906_440b688fee_k.jpg"
// src="https://live.staticflickr.com/65535/52939958855_1c4e35dedd_k.jpg"

// src="https://live.staticflickr.com/65535/52938973857_2e8c46fde6_k.jpg"
// src="https://live.staticflickr.com/65535/52940025738_e918363074_k.jpg"

// src="https://live.staticflickr.com/65535/52939714149_12cb03d6a2_k.jpg"
// src="https://live.staticflickr.com/65535/52940025793_9b7e209b04_k.jpg"
// src="https://live.staticflickr.com/65535/52938973927_834e648129_k.jpg"

// src = 'https://live.staticflickr.com/65535/52940025753_f9090ed787_k.jpg';
// src = 'https://live.staticflickr.com/65535/52939714104_d1ef503f71_k.jpg';
// src = 'https://live.staticflickr.com/65535/52939569716_0ad7ee22e3_k.jpg';
// src = 'https://live.staticflickr.com/65535/52938973887_8147b28b58_k.jpg';
