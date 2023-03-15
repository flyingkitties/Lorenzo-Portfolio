import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";

function WorkExp() {
  const [show, setShow] = useState(false);

  const isClicked = () => {
    setShow(!show);
  };
  return (
    <div className="relative text-[#595260] ">
      {!show ? (
        <div
          className=" bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg z-5 drop-shadow-2xl
        lg:absolute top-80 lg:max-w-[630px] left-0">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
            <p className="p-1 text-left text-[#595260] font-semibold ">
              Experience
            </p>
            <ArrowsPointingOutIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>
          <div
            className=" w-full flex p-3 px-5 pb-5 
           overflow-scroll overflow-x-scroll scrollbar-thin scrollbar-track-gray-600/20">
            <div className="expCards">
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Failsafe Administrator</h1>
                <h3 className="font-semibold">NHS Trust - Brighton</h3>
                <h3 className="text-sm font-light">
                  April 2022 to January 2023
                </h3>
              </div>
            </div>

            <div className="expCards">
              <div className="p-2 text-center">
                <h1 className="text-xl font-bold">Bar Manager</h1>
                <h3 className="font-semibold">Dough Lover - Brighton</h3>
                <h3 className="text-sm font-light">
                  September 2017 to September 2021
                </h3>
              </div>
            </div>
            <div className="expCards justify-center">
              <div className="p-2 text-center ">
                <a
                  href="https://www.linkedin.com/in/salubrejoe/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h1 className="text-xl font-bold link hover:text-[#EE7B22]">
                    Check my LinkedIn
                  </h1>
                </a>
                <h3 className="font-semibold">For more information</h3>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" bg-[#fbfaf6] opacity-80  rounded-2xl shadow-lg z-5 drop-shadow-2xl
        lg:opacity-100 lg:bg-[#f0ebd8] lg:h-[540px]">
          <div className="flex relative bg-gradient-to-b from-[#f0ebd8] items-center rounded-t-2xl p-2 pb-5 ">
            <p className="p-1 text-left font-semibold ">Experience</p>
            <ArrowsPointingInIcon
              className="h-4 w-4 absolute right-4 cursor-pointer"
              onClick={isClicked}
            />
          </div>
          <div
            className=" flex pb-8 px-5 lg:space-x-10 overflow-scroll overflow-x-scroll scrollbar-thin
             scrollbar-track-gray-500/20 ">
            <div className="expCards ">
              <div className="p-2">
                <h1 className="text-xl font-bold">Failsafe Administrator</h1>
                <h3 className="font-semibold">NHS Trust - Brighton</h3>
                <h3 className="text-sm font-light">
                  April 2022 to January 2023
                </h3>
              </div>
              <div className="px-5">
                <ul className="cardsText">
                  <li>
                    Deal effectively, in a tactful and sensitive manner, using
                    own judgment and initiative, in respect of all
                    telephone/written communications from patients,
                    patients&apos; relatives, hospital staff, opticians, GPs and
                    other individuals or organisations.
                  </li>
                  <li>
                    Book appointments for patients contacting the Administration
                    Centre making sure patients are seen within the nationally
                    prescribed maximum waiting times.
                  </li>
                  <li>
                    Work with the Failsafe Team of the Hospital Eye Service
                    aiming to reduce the waiting list that had accumulated
                    during the pandemic.
                  </li>
                  <li>
                    Keep up-to-date with any computerised systems introduced and
                    attend any training required. Proficient in the computerised
                    patient administration system (PAS).
                  </li>
                </ul>
              </div>
            </div>
            <div className="expCards">
              <div className="p-2">
                <h1 className="text-xl font-bold">Bar Manager</h1>
                <h3 className="font-semibold">Dough Lover - Brighton</h3>
                <h3 className="text-sm font-light">
                  September 2017 to September 2021
                </h3>
              </div>
              <div className="px-5">
                <ul className="cardsText">
                  <li>
                    Involved on the opening of this new business, developed the
                    drinks menu, new suppliers&apos; relationship, profit
                    reports and GPs for the business.
                  </li>
                  <li>
                    Trained new staff members on the high-quality customer
                    service and company standards.
                  </li>
                  <li>
                    Trusted with weekly rotas and covered the General
                    Manager&apos;s responsibilities while she was on Holidays.
                  </li>
                  <li>
                    Involved in the office work including data entry, filing
                    systems and some bookkeeping.
                  </li>
                  <li>
                    Took charge of the health and safety and Alcohol licence
                    laws record keeping and its maintenance.
                  </li>
                </ul>
              </div>
            </div>
            <div className="expCards justify-center">
              <div className="p-2 text-center ">
                <a
                  href="https://www.linkedin.com/in/salubrejoe/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <h1 className="text-xl font-bold link hover:text-[#EE7B22]">
                    Check my LinkedIn
                  </h1>
                </a>
                <h3 className="font-semibold">For more information</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkExp;
