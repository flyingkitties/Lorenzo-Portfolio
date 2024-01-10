import React from 'react';

function Footer() {
  return (
    <div
      className="flex items-center justify-center lg:justify-end backdrop-blur bg-[#fbfaf6]/30 dark:bg-gray-500/30 
    z-20 shadow-md rounded-sm p-5 text-[#fbfaf6] text-xs lg:text-sm"
    >
      <a
        href="https://www.ritaguilherme.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="link">© 2023 RG Builds</p>
      </a>
    </div>
  );
}

export default Footer;
