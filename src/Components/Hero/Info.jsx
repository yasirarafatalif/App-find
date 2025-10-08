import React from "react";
import { Download, Star, Play } from "lucide-react";
const Info = () => {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Trusted by Millions, Built for You</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 text-center">
        {/* Total Downloads */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium">Total Downloads</p>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-extrabold">29.6M</span>
            <Download className="w-8 h-8 text-white" />
          </div>
          <p className="text-sm text-purple-200">21% more than last month</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-20 bg-purple-400 opacity-50"></div>

        {/* Total Reviews */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium">Total Reviews</p>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-extrabold">906K</span>
            <Star className="w-8 h-8 text-white" />
          </div>
          <p className="text-sm text-purple-200">46% more than last month</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-20 bg-purple-400 opacity-50"></div>

        {/* Active Apps */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium">Active Apps</p>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-extrabold">132+</span>
            <Play className="w-8 h-8 text-white" />
          </div>
          <p className="text-sm text-purple-200">31 more will Launch</p>
        </div>
      </div>
    </section>
    );
};

export default Info;