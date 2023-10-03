import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Header() {
  return (
    <div className="flex item-center backdrop-blur bg-[#fbfaf6]/30 dark:bg-gray-500/30 z-20 shadow-md rounded-sm sticky top-0">
      <div className="flex items-center space-x-5 p-3 pl-2 md:pl-5 ">
        <p className="text-2xl lg:text-3xl px-3 text-[#fbfaf6]">@Licurgen</p>
      </div>
      <div className="flex absolute right-2 md:right-5 items-center text-[#595260] py-1  ">
        <SocialIcon
          url="https://www.linkedin.com/in/salubrejoe/"
          bgColor="none"
          fgColor="#fbfaf6"
        />
        <SocialIcon
          url="https://github.com/salubrejoe"
          bgColor="none"
          fgColor="#fbfaf6"
        />
      </div>
    </div>
  );
}

export default Header;
