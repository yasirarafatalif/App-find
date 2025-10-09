import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router';

const BuildApps = () => {
    return (
         <section className="bg-[#e9e9e9] flex flex-col items-center justify-center text-center py-20 px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        We Build{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)]">
          Productive Apps
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl mt-6 text-gray-700 italic text-lg">
        At <span className="font-semibold text-[#3e2d82]">HERO.IO</span>, we craft
        innovative apps designed to make everyday life simpler, smarter, and
        more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to='https://play.google.com/store/games?hl=en'>
        <button className="flex items-center gap-2 px-6 py-3 bg-white shadow-md rounded-[8px] hover:shadow-lg transition">
          <FaGooglePlay className="text-[#34a853] text-xl" />
          <span className="font-medium">Google Play</span>
        </button>
</Link>
        <Link to='https://www.apple.com/app-store/'>
        <button className="flex items-center gap-2 px-6 py-3 bg-white shadow-md rounded-[8px] hover:shadow-lg transition">
          <FaAppStoreIos className="text-[#007aff] text-xl" />
          <span className="font-medium">App Store</span>
        </button>
        </Link>
      </div>
    </section>
    );
};

export default BuildApps;