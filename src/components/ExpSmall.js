import React from 'react';

function ExpSmall() {
  return (
    <div
      className="flex p-3 px-5 overflow-scroll overflow-x-scroll 
 min-h-full space-x-5 w-full scrollbarBox darkModeBody"
    >
      <div className="expCards darkModeBody">
        <div className="p-5 text-center">
          <h1 className="text-xl py-2 font-bold">Bank Admin</h1>
          <h2 className="font-semibold">NHS Trust - Brighton</h2>
          <h2 className="text-sm font-light">2023</h2>
        </div>
      </div>
      <div className="expCards darkModeBody">
        <div className="p-5 text-center">
          <h1 className="text-xl py-2 font-bold">Failsafe Administrator</h1>
          <h2 className="font-semibold">NHS Trust - Brighton</h2>
          <h2 className="text-sm font-light">2022 to 2023</h2>
        </div>
      </div>

      <div className="expCards darkModeBody">
        <div className="p-5 text-center">
          <h1 className="text-xl py-2 font-bold">Bar Manager</h1>
          <h2 className="font-semibold">Dough Lover - Brighton</h2>
          <h2 className="text-sm font-light">2017 to 2021</h2>
        </div>
      </div>
      <div className="expCards justify-center darkModeBody">
        <div className="p-2 text-center ">
          <a
            href="https://www.linkedin.com/in/salubrejoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-xl font-bold link ">Check my LinkedIn</h1>
          </a>
          <h2 className="font-semibold">For more information</h2>
        </div>
      </div>
    </div>
  );
}

export default ExpSmall;
