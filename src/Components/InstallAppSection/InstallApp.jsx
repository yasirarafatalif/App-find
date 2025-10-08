import React from 'react';

const InstallApp = () => {
    return (
   <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 flex items-center justify-center gap-3">
            Your Installed Apps
            {/* <AppLogo /> */}
          </h1>
          <p className="mt-3 text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>

        {/* Filter and Results Bar */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-indigo-500 font-semibold">1 Apps Found</p>
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-50 transition">
            <span>Sort By: Size</span>
            {/* <ChevronDownIcon className="w-4 h-4 text-gray-500" /> */}
          </button>
        </div>

        <hr className="border-t border-gray-200" />

        {/* App List */}
        <div className="mt-6 space-y-4">
          {/* Single App Item Card */}
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between transition hover:shadow-md">
            
            {/* Left side: Icon and Details */}
            <div className="flex items-center gap-4">
              {/* App Icon */}
              <div className="w-16 h-16 bg-purple-600 rounded-xl flex-shrink-0">
                {/* You can place the actual app icon image here */}
                {/* <img src="/path/to/icon.png" alt="App Icon" className="w-full h-full object-cover rounded-xl" /> */}
              </div>

              {/* App Info */}
              <div>
                <h2 className="font-semibold text-gray-900">
                  FLIP - Focus Timer for Study
                </h2>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    {/* <ArrowDownTrayIcon className="w-4 h-4" /> */}
                    <span>3M</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {/* <StarIcon className="w-4 h-4 text-yellow-500" /> */}
                    <span>4.3</span>
                  </div>
                  <span>290 MB</span>
                </div>
              </div>
            </div>

            {/* Right side: Uninstall Button */}
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg text-sm hover:bg-green-600 transition-colors">
              Uninstall
            </button>
          </div>
          
          {/* You can add more app items here */}
        </div>
      </div>
    </div>
    );
};

export default InstallApp;