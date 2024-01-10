import Image from 'next/image';
import React from 'react';
import tamper from '../../public/images/Tmpr-logo.jpeg';
import appleDark from '../../public/images/apple/Dark.png';

function BuzzWords() {
  return (
    <div className="">
      <p className="headerTitle m-2">On the App Store</p>
      <div className="grid grid-cols-2 gap-5 lg:gap-0 lg:flex lg:flex-col m-5 mx-auto lg:px-5 lg:p-0 md:px-16 p-5">
        <div className="lg:flex lg:pb-2 justify-center  max-w-[300px] lg:max-w-none shrink">
          <Image
            src={tamper}
            className="rounded-3xl w-full lg:w-24 center"
            height={80}
            width={80}
            alt="Tamper App Logo"
          />
        </div>
        <div className="grid grid-rows-2 shrink-0 lg:px-0 text-white text-xs sm:text-sm md:text-base lg:text-sm font-light content-between ">
          <div className="row-span-2 sm:space-y-2 lg:space-y-1 self-center lg:text-center">
            <p className="text-base sm:text-base md:text-lg font-bold sm:pb-2">
              Tmpr - Dial in Timer
            </p>
            <p>Record your recipes.</p>
            <p>Time the shots.</p>
            <p>Enjoy your coffee.</p>
          </div>
          <div className="lg:flex justify-center ">
            <a
              href=" https://apps.apple.com/gb/app/tmpr/id6473798369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={appleDark}
                className=" rounded-lg shrink pt-2 sm:pt-5 lg:p-0 lg:w-32 lg:mt-3 hover:opacity-75 "
                height={449.1}
                width={155.2}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuzzWords;
