import React from 'react';
import ShoppingList from '../../public/images/ShoppingList.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Emoji from '../../public/images/EmojiDictionary.png';
import Streaming from '../../public/images/Netflix.png';
import ToDoApp from '../../public/images/ToDoApp.png';
import MaxOut from '../../public/images/maxOut.png';
import Scoreboard from '../../public/images/scoreboard.png';
import Image from 'next/image';
import maxOut1 from '../../public/images/screenShots/maxOut/1.PNG';
import maxOut2 from '../../public/images/screenShots/maxOut/2.PNG';
import maxOut3 from '../../public/images/screenShots/maxOut/3.PNG';
import maxOut4 from '../../public/images/screenShots/maxOut/4.PNG';
import maxOut5 from '../../public/images/screenShots/maxOut/5.PNG';
import maxOut6 from '../../public/images/screenShots/maxOut/6.PNG';
import maxOut7 from '../../public/images/screenShots/maxOut/7.PNG';
import maxOut8 from '../../public/images/screenShots/maxOut/8.PNG';
import maxOut9 from '../../public/images/screenShots/maxOut/9.PNG';
import tuner from '../../public/images/tuner.png';
import tuner1 from '../../public/images/screenShots/tuner/1.PNG';
import tuner2 from '../../public/images/screenShots/tuner/2.PNG';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

function ProjectsLarge() {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 50,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    // color: 'black',
  };

  const slideStyles = {};
  return (
    <div
      className="  px-24 sm:px-8 lg:px-10 md:px-20  p-5 flex overflow-scroll overflow-x-scroll scrollbar-thin
 scrollbar-track-gray-500/20 "
    >
      {/* Card 1 */}
      <div className=" expCards ">
        <div className="p-3 flex items-center cursor-pointer">
          <Image
            src={MaxOut}
            width={50}
            height={50}
            className="rounded-lg hover:border-2"
            alt="Climates logo"
          />
          <p className="p-4 text-sm">Max Out</p>
        </div>

        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              className=""
              src={maxOut1}
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut2}
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut3}
              alt="Screen 3"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut4}
              alt="Screen 4"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut5}
              alt="Screen 4"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut6}
              alt="Screen 6"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut7}
              alt="Screen 7"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut8}
              alt="Screen 8"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={maxOut9}
              alt="Screen 9"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 2 */}
      <div className=" expCards ">
        <div className="p-3 flex items-center cursor-pointer">
          <Image
            src={tuner}
            width={50}
            height={50}
            className="rounded-lg hover:border-2"
            alt="Climates logo"
          />
          <p className="p-4 text-sm">Tuner</p>
        </div>

        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className="flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={tuner1}
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src={tuner2}
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 3 */}
      <div className=" expCards ">
        <a
          href="https://github.com/Salubrejoe/Pinch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-3 flex items-center cursor-pointer">
            <Image
              src={Scoreboard}
              width={50}
              height={50}
              className="rounded-lg hover:border-2"
              alt="Scoreboard logo"
            />
            <p className="p-4 text-sm">Scoreboard</p>
          </div>
        </a>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939714149_12cb03d6a2_k.jpg"
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52940025793_9b7e209b04_k.jpg"
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52938973927_834e648129_k.jpg"
              alt="Screen 3"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 4 */}
      <div className=" expCards ">
        <a
          href="https://github.com/Salubrejoe/ToDoListApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-3 flex items-center cursor-pointer">
            <Image
              src={ToDoApp}
              width={50}
              height={50}
              className="rounded-lg hover:border-2"
              alt="ToDoApp logo"
            />
            <p className="p-4 text-sm">To Do App</p>
          </div>
        </a>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52938973857_2e8c46fde6_k.jpg"
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52940025738_e918363074_k.jpg"
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 5 */}
      <div className=" expCards ">
        <a
          href="https://github.com/Salubrejoe/Emoji-Dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52940025753_f9090ed787_k.jpg"
              alt="Loading"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939714104_d1ef503f71_k.jpg"
              alt="Loading"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939569716_0ad7ee22e3_k.jpg"
              alt="Loading"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52938973887_8147b28b58_k.jpg"
              alt="Loading"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 6 */}
      <div className=" expCards ">
        <a
          href="https://github.com/Salubrejoe/StremingService-Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-3 flex items-center cursor-pointer">
            <Image
              src={Streaming}
              width={50}
              height={50}
              className="rounded-lg hover:border-2"
              alt="Streaming logo"
            />
            <p className="p-4 text-sm">Streaming Clone</p>
          </div>
        </a>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52938973952_496cc41e2c_k.jpg"
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939714479_6755cbb778_k.jpg"
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939569906_440b688fee_k.jpg"
              alt="Screen 3"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939958855_1c4e35dedd_k.jpg"
              alt="Screen 4"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
      {/* Card 7  */}
      <div className="expCards ">
        <a
          href="https://github.com/Salubrejoe/Emoji-Dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-3 flex items-center cursor-pointer">
            <Image
              src={Emoji}
              width={50}
              height={50}
              className="rounded-lg hover:border-2"
              alt="Emoji Dictionary icon"
            />
            <p className="p-4 text-sm ">Emoji Dictionary</p>
          </div>
        </a>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          width={250}
          swipeable="true"
          emulateTouch="true"
          className="flex control-dots items-center justify-center"
          // statusFormatter={(current, total) =>
          //   `Current slide: ${current} / Total: ${total}`
          // }
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  ...arrowStyles,
                  zIndex: 10,
                  left: 0,
                }}
              >
                <ChevronLeftIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, zIndex: 10, right: 0 }}
              >
                <ChevronRightIcon className="icon text-[#EE7B22]" />
              </button>
            )
          }
        >
          <div
            className=" flex items-center cursor-pointer "
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939569891_b22619dffd_k.jpg"
              alt="Screen 1"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52938974002_6340a5d117_k.jpg"
              alt="Screen 2"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52940025963_e767640bb0_k.jpg"
              alt="Screen 3"
              width={150}
              height={150}
            />
          </div>
          <div
            className=" flex items-center cursor-pointer"
            style={{
              marginRight: 30,
              marginLeft: 30,
            }}
          >
            <Image
              src="https://live.staticflickr.com/65535/52939569936_fb653ca9d1_k.jpg"
              alt="Screen 4"
              width={150}
              height={150}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectsLarge;
