import React from 'react';

function ExpSmall() {
  return (
    <div
      className="flex p-3 px-5 overflow-scroll overflow-x-scroll 
scrollbar-thin scrollbar-track-gray-600/20 min-h-full space-x-5 w-full "
    >
      <div className="expCards">
        <div className="p-5 text-center">
          <h1 className="text-xl py-2 font-bold">Failsafe Administrator</h1>
          <h2 className="font-semibold">NHS Trust - Brighton</h2>
          <h2 className="text-sm font-light">April 2022 to April 2023</h2>
        </div>
      </div>

      <div className="expCards">
        <div className="p-5 text-center">
          <h1 className="text-xl py-2 font-bold">Bar Manager</h1>
          <h2 className="font-semibold">Dough Lover - Brighton</h2>
          <h2 className="text-sm font-light">
            September 2017 to September 2021
          </h2>
        </div>
      </div>
      <div className="expCards justify-center">
        <div className="p-2 text-center ">
          <a
            href="https://www.linkedin.com/in/salubrejoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl font-bold link hover:text-[#EE7B22]">
              Check my LinkedIn
            </h1>
          </a>
          <h2 className="font-semibold">For more information</h2>
        </div>
      </div>
    </div>
  );
}

export default ExpSmall;
