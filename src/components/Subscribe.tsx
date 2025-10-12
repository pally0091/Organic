import React from "react";

const Subscribe = () => {
  return (
    <div
      className="max-w-[1400px] w-full rounded-lg mx-auto mb-32 h-auto px-4 sm:px-6 md:px-10 lg:px-20 py-28 flex flex-col lg:flex-row items-center justify-between gap-8"
      id="subscribe"
    >
      {/* Heading */}
      <h2 className="max-w-full lg:max-w-[360px] w-full text-3xl sm:text-4xl lg:text-5xl text-white font-semibold  lg:text-left">
        Subscribe to our Newsletter
      </h2>

      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full lg:w-auto">
        <input
          className="w-full sm:w-[350px] rounded-2xl px-4 py-3 
               border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#264a59] 
               focus:border-[#264a59] transition-all duration-300 ease-out
               hover:border-[#264a59] hover:shadow-sm hover:shadow-[#264a59]/30"
          type="email"
          placeholder="Your Email Address"
        />
        <button
          className="w-full sm:w-[220px] px-4 py-3 rounded-2xl bg-[#264a59] text-white font-semibold 
                     transition-all duration-300 ease-out
                     hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:shadow-[#264a59]/50"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
