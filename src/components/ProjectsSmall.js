import React from 'react';
import ToDoApp from '../../public/images/ToDoApp.png';
import MaxOut from '../../public/images/maxOut.png';
import Scoreboard from '../../public/images/scoreboard.png';
import Image from 'next/image';
import maxOut1 from '../../public/images/screenShots/maxOut/1.1.png';
import maxOut2 from '../../public/images/screenShots/maxOut/1.2.png';
import maxOut3 from '../../public/images/screenShots/maxOut/1.3.png';
import maxOut4 from '../../public/images/screenShots/maxOut/1.4.png';
import maxOut5 from '../../public/images/screenShots/maxOut/1.5.png';
import maxOut6 from '../../public/images/screenShots/maxOut/1.6.png';
import maxOut7 from '../../public/images/screenShots/maxOut/1.7.png';
import maxOut8 from '../../public/images/screenShots/maxOut/1.8.png';
import maxOut9 from '../../public/images/screenShots/maxOut/1.9.png';
import tuner from '../../public/images/tuner.png';
import tuner1 from '../../public/images/screenShots/tuner/1.1.png';
import tuner2 from '../../public/images/screenShots/tuner/1.2.png';
import ShoppingList from '../../public/images/ShoppingList.png';
import Emoji from '../../public/images/EmojiDictionary.png';
import Streaming from '../../public/images/Netflix.png';
import cloudKit from '../../public/images/Icons/CloudKit.png';
import coreData from '../../public/images/Icons/CoreData.png';
import firebase from '../../public/images/Icons/Firebase.png';
import healthKit from '../../public/images/Icons/HealthKit.png';
import realmDB from '../../public/images/Icons/RealmDB.png';
import swiftUI from '../../public/images/Icons/SwiftUI.png';
import uIKit from '../../public/images/Icons/UIKit.png';
import widgetKit from '../../public/images/Icons/WidgetKit.png';

function Skills() {
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 p-3 overflow-scroll overflow-y-scroll scrollbar-thin
 scrollbar-track-gray-500/20 min-w-full  "
    >
      {/* Card 1 */}
      <div className="projCards">
        <div className="projAppCards">
          <Image
            src={MaxOut}
            width={50}
            height={50}
            className="rounded-lg hover:border-2 h-full "
            alt="Max Out logo"
          />
          <p className="p-4 text-sm">Max Out</p>
        </div>
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={swiftUI}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={uIKit}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={healthKit}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={cloudKit}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={firebase}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={widgetKit}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              className=""
              src={maxOut1}
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut2}
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut3}
              alt="Screen 3"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut4}
              alt="Screen 4"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut5}
              alt="Screen 4"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut6}
              alt="Screen 6"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut7}
              alt="Screen 7"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut8}
              alt="Screen 8"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={maxOut9}
              alt="Screen 9"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="projCards">
        <div className="projAppCards">
          <Image
            src={tuner}
            width={50}
            height={50}
            className="rounded-lg hover:border-2"
            alt="Tuner logo"
          />
          <p className="p-4 text-sm">Tuner</p>
        </div>
        <hr className="border-white " />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={swiftUI}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src={tuner1}
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src={tuner2}
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className=" projCards ">
        <a
          href="https://github.com/Salubrejoe/Pinch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projAppCards">
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
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={swiftUI}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={coreData}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939714149_12cb03d6a2_k.jpg"
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52940025793_9b7e209b04_k.jpg"
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52938973927_834e648129_k.jpg"
              alt="Screen 3"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 4 */}
      <div className="projCards">
        <a
          href="https://github.com/Salubrejoe/ToDoListApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projAppCards">
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
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={uIKit}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={realmDB}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52938973857_2e8c46fde6_k.jpg"
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52940025738_e918363074_k.jpg"
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 5 */}
      <div className="projCards">
        <a
          href="https://github.com/Salubrejoe/Emoji-Dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projAppCards">
            <Image
              src={ShoppingList}
              width={50}
              height={50}
              className="rounded-lg hover:border-2 "
              alt="Shopping List Logo"
            />
            <p className="p-4 text-sm ">Shopping List</p>
          </div>
        </a>
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={swiftUI}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={firebase}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52940025753_f9090ed787_k.jpg"
              alt="Loading"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939714104_d1ef503f71_k.jpg"
              alt="Loading"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939569716_0ad7ee22e3_k.jpg"
              alt="Loading"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52938973887_8147b28b58_k.jpg"
              alt="Loading"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 6 */}
      <div className="projCards">
        <a
          href="https://github.com/Salubrejoe/StremingService-Clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projAppCards">
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
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={uIKit}
            height={20}
            width={20}
          />
          <Image
            alt="Tech Logo"
            src={coreData}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52938973952_496cc41e2c_k.jpg"
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939714479_6755cbb778_k.jpg"
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939569906_440b688fee_k.jpg"
              alt="Screen 3"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939958855_1c4e35dedd_k.jpg"
              alt="Screen 4"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* Card 7  */}
      <div className="projCards">
        <a
          href="https://github.com/Salubrejoe/Emoji-Dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projAppCards">
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
        <hr className="border-white" />
        <div className="techIcons">
          <Image
            alt="Tech Logo"
            src={uIKit}
            height={20}
            width={20}
          />
        </div>
        <hr className="border-white pb-3" />
        <div
          className="flex overflow-scroll overflow-x-scroll scrollbar-thin
    scrollbar-track-gray-500/20 space-x-5 px-4"
        >
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939569891_b22619dffd_k.jpg"
              alt="Screen 1"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52938974002_6340a5d117_k.jpg"
              alt="Screen 2"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52940025963_e767640bb0_k.jpg"
              alt="Screen 3"
              width={200}
              height={400}
            />
          </div>
          <div className="projImgCards">
            <Image
              src="https://live.staticflickr.com/65535/52939569936_fb653ca9d1_k.jpg"
              alt="Screen 4"
              width={200}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
