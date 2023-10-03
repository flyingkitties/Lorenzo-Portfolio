import React from 'react';

function WorkExp() {
  return (
    <div
      className=" flex pb-8 px-3 lg:px-14 py-3 lg:py-14 space-x-7 lg:space-x-10  overflow-scroll overflow-x-scroll scrollbar-thin
 scrollbar-track-gray-500/20 rounded-b-2xl shadow-lg drop-shadow-2xl 
    bg-[#fbfaf6] "
    >
      <div className="expCardsLG">
        <div className="p-2 lg:p-8">
          <h1 className="text-xl font-bold">Failsafe Administrator</h1>
          <h2 className="font-semibold">NHS Trust - Brighton</h2>
          <h2 className="text-sm font-light">April 2022 to January 2023</h2>
        </div>
        <div className="px-5">
          <ul className="cardsText">
            <li>
              Deal effectively, in a tactful and sensitive manner, using own
              judgment and initiative, in respect of all telephone/written
              communications from patients, patients&apos; relatives, hospital
              staff, opticians, GPs and other individuals or organisations.
            </li>
            <li>
              Book appointments for patients contacting the Administration
              Centre making sure patients are seen within the nationally
              prescribed maximum waiting times.
            </li>
            <li>
              Work with the Failsafe Team of the Hospital Eye Service aiming to
              reduce the waiting list that had accumulated during the pandemic.
            </li>
            <li>
              Keep up-to-date with any computerised systems introduced and
              attend any training required. Proficient in the computerised
              patient administration system (PAS).
            </li>
          </ul>
        </div>
      </div>
      <div className="expCardsLG">
        <div className="p-2 lg:p-8">
          <h1 className="text-xl font-bold">Bar Manager</h1>
          <h2 className="font-semibold">Dough Lover - Brighton</h2>
          <h2 className="text-sm font-light">
            September 2017 to September 2021
          </h2>
        </div>
        <div className="px-5">
          <ul className="cardsText">
            <li>
              Involved on the opening of this new business, developed the drinks
              menu, new suppliers&apos; relationship, profit reports and GPs for
              the business.
            </li>
            <li>
              Trained new staff members on the high-quality customer service and
              company standards.
            </li>
            <li>
              Trusted with weekly rotas and covered the General Manager&apos;s
              responsibilities while she was on Holidays.
            </li>
            <li>
              Involved in the office work including data entry, filing systems
              and some bookkeeping.
            </li>
            <li>
              Took charge of the health and safety and Alcohol licence laws
              record keeping and its maintenance.
            </li>
          </ul>
        </div>
      </div>
      <div className="expCardsLG justify-center">
        <div className="p-2 lg:p-8 text-center ">
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

export default WorkExp;
