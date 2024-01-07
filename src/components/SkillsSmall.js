import Image from 'next/image';
import React from 'react';
import tamper from '../../public/images/Tmpr-logo.jpeg';
import appleDark from '../../public/images/apple/Dark.png';

function BuzzWords() {
  return (
    <div className="">
      <p className="headerTitle m-2">On the App Store</p>
      <div className="grid grid-cols-2 lg:flex lg:flex-col m-5 mx-auto px-10">
        <div className="lg:flex lg:pb-2 justify-center ">
          <Image
            src={tamper}
            className="rounded-3xl w-full max-w-xs lg:w-28 "
            height={100}
            width={100}
            alt="Tamper App Logo"
          />
        </div>
        <div className="grid grid-rows-2 pl-3 lg:px-0 md:pl-5 p-2 text-white text-xs sm:text-sm md:text-base lg:text-sm font-light content-between ">
          <div className="row-span-2 sm:space-y-2 lg:space-y-1 self-center lg:text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold sm:pb-2">
              Tmpr - Dial in Timer
            </p>
            <p>Record your recipes.</p>
            <p>Time the shots.</p>
            <p>Enjoy your coffee.</p>
          </div>
          <div className="lg:flex justify-center">
            <a
              href=" https://apps.apple.com/gb/app/tmpr/id6473798369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={appleDark}
                className="rounded-lg max-w-[200px] pt-2 sm:pt-5 lg:p-0 lg:w-32 lg:mt-3 hover:opacity-75 "
                height={4491}
                width={1552}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuzzWords;
