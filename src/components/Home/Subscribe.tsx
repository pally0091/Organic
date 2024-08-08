import React from "react";

const Subscribe = () => {
  return (
    <div
      className="max-w-[1400px] w-full mx-auto mb-[120px] h-80 px-20 flex items-center justify-center"
      id="subscribe"
    >
      <div className="w-full flex justify-between items-center">
        <h2 className="max-w-[360px] w-full text-5xl text-white font-semibold">
          Subscribe to our Newsletter
        </h2>
        <div className="flex gap-2">
          <input
            className="w-[350px] rounded-2xl px-4 focus:outline-[#264a59]"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="w-[220px] p-4 rounded-2xl bg-[#264a59] text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
