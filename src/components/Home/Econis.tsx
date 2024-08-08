/* eslint-disable @next/next/no-img-element */
import React from "react";

const Econis = () => {
  return (
    <div className="">
      <div className="relative">
        <img
          src="/Images/eco.png"
          alt=""
        />
        <div className="max-w-[785px] w-full h-[720px] p-16 bg-white absolute top-28 right-64 rounded-2xl flex flex-col gap-9">
          <div>
            <span className="tag">Eco Friendly</span>
            <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
              Econis is a Friendly Organic Store
            </h1>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Start with Our Company First
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Learn How to Grow Yourself
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">
              Farming Strategies of Today
            </h4>
            <p className="mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Econis;
