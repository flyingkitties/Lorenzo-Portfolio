import Image from 'next/image';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Emoji from '../../public/images/EmojiDictionary.png';
import ShoppingList from '../../public/images/ShoppingList.png';
import Streaming from '../../public/images/Netflix.png';
import ToDoApp from '../../public/images/ToDoApp.png';
import MaxOut from '../../public/images/maxOut.png';
import Scoreboard from '../../public/images/scoreboard.png';

function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 ld:px-24 sm:px-8 lg:px-10 
md:px-20 p-5 sm:gap-5 gap-3"
    >
      <div className="projectButton">
        <Image
          src={MaxOut}
          width={50}
          height={50}
          className="rounded-lg hover:border-2"
          alt="Climates logo"
        />
        <p className="p-4 text-sm">Max Out</p>
      </div>

      <a
        href="https://github.com/Salubrejoe/Pinch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectButton">
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
      <a
        href="https://github.com/Salubrejoe/ToDoListApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectButton">
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
      <a
        href="https://github.com/Salubrejoe/Emoji-Dictionary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectButton">
          <Image
            src={ShoppingList}
            width={50}
            height={50}
            className="rounded-lg hover:border-2"
            alt="ShoppingList logo"
          />
          <p className="p-4 text-sm ">Shopping List</p>
        </div>
      </a>
      <a
        href="https://github.com/Salubrejoe/StremingService-Clone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectButton">
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
      <a
        href="https://github.com/Salubrejoe/Emoji-Dictionary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projectButton">
          <Image
            src={Emoji}
            width={50}
            height={50}
            className="rounded-lg hover:border-2"
            alt="Emoji logo"
          />
          <p className="p-4 text-sm ">Emoji Dictionary</p>
        </div>
      </a>
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
