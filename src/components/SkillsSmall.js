import Image from 'next/image';
import React from 'react';
import cloudKit from '../../public/images/Icons/CloudKit.png';
import coreData from '../../public/images/Icons/CoreData.png';
import firebase from '../../public/images/Icons/Firebase.png';
import healthKit from '../../public/images/Icons/HealthKit.png';
import realmDB from '../../public/images/Icons/RealmDB.png';
import swiftUI from '../../public/images/Icons/SwiftUI.png';
import uIKit from '../../public/images/Icons/UIKit.png';
import watchKit from '../../public/images/Icons/WatchKit.png';
import widgetKit from '../../public/images/Icons/WidgetKit.png';

function BuzzWords() {
  return (
    <div
      className=" grid grid-flow-row grid-cols-3 sm:grid-cols-4 
    lg:grid-cols-3 gap-5 md:gap-10 lg:gap-5 p-8 min-h-full justify-items-center
    content-between"
    >
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={cloudKit}
          height={200}
          width={200}
          alt="cloudKit logo"
        />
        <p>CloudKit</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={coreData}
          height={200}
          width={200}
          alt="coreData logo"
        />
        <p>CoreData</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={firebase}
          height={200}
          width={200}
          alt="firebase logo"
        />
        <p>Firebase</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={healthKit}
          height={200}
          width={200}
          alt="healthKit logo"
        />
        <p>HealthKit</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={realmDB}
          height={200}
          width={200}
          alt="realmDB logo"
        />
        <p>RealmDB</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={swiftUI}
          height={200}
          width={200}
          alt="swiftUI"
        />
        <p>SwiftUI</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={uIKit}
          height={200}
          width={200}
          alt="uIKit logo"
        />
        <p>UIKit</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={watchKit}
          height={200}
          width={200}
          alt="watchKit logo"
        />
        <p>WatchKit</p>
      </div>
      <div className="skillsLogo">
        <Image
          className="skillsImage"
          src={widgetKit}
          height={200}
          width={200}
          alt="widgetKit logo"
        />
        <p>WidgetKit</p>
      </div>
    </div>
  );
}

export default BuzzWords;
