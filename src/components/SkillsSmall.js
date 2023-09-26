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
    <div className=" grid grid-flow-row grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-5 lg:gap-5 p-8 min-h-full">
      <Image
        className="skillsImage"
        src={cloudKit}
        height={528}
        width={566}
        alt="cloudKit logo"
      />

      <Image
        className="skillsImage"
        src={coreData}
        height={200}
        width={200}
        alt="coreData logo"
      />

      <Image
        className="skillsImage"
        src={firebase}
        height={528}
        width={566}
        alt="firebase logo"
      />

      <Image
        className="skillsImage"
        src={healthKit}
        height={528}
        width={566}
        alt="healthKit logo"
      />

      <Image
        className="skillsImage"
        src={realmDB}
        height={528}
        width={566}
        alt="realmDB logo"
      />

      <Image
        className="skillsImage"
        src={swiftUI}
        height={528}
        width={566}
        alt="swiftUI"
      />

      <Image
        className="skillsImage"
        src={uIKit}
        height={528}
        width={566}
        alt="uIKit logo"
      />

      <Image
        className="skillsImage"
        src={watchKit}
        height={528}
        width={566}
        alt="watchKit logo"
      />

      <Image
        className="skillsImage"
        src={widgetKit}
        height={528}
        width={566}
        alt="widgetKit logo"
      />
    </div>
  );
}

export default BuzzWords;
