import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <div className="py-24 px-4 md:px-10 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {/* First Image */}
        <div className="group relative w-full max-w-[500px] overflow-hidden rounded-lg shadow-lg transition-all duration-500">
          <Image
            src="/Images/Frame1.png"
            alt="Frame1"
            width={500}
            height={300}
            className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          ></div>
          {/* Subtle light shimmer */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
          ></div>
        </div>

        {/* Second Image */}
        <div className="group relative w-full max-w-[500px] overflow-hidden rounded-lg shadow-lg transition-all duration-500">
          <Image
            src="/Images/Frame2.png"
            alt="Frame2"
            width={500}
            height={300}
            className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
          ></div>
          {/* Subtle light shimmer */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
