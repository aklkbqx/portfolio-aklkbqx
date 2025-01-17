'use client';

import Image from "next/image";

const Home = () => {
  const bg = require(`@/assets/images/home-bg.jpeg`);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">

      {/* <Image
        src={bg}
        className={"w-full h-full opacity-[0.2]"}
        alt="Background Image" /> */}

      <div className="text-center flex-col gap-5 flex absolute">
        <h1 className="text-[5rem] tracking-[2rem]">AKALAK KRUABOON</h1>
        <div>
          <h1 className="text-xl tracking-[0.5rem]">FLLSTACK DEVELOPER</h1>
          <h1 className="text-xl tracking-[0.5rem]">Web & Mobile Application</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;