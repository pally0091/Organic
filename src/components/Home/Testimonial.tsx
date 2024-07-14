import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div>
        <Image
          src="/Images/t-Background.png"
          alt=""
          width={1920}
          height={900}
        />
      </div>
      <div className="absolute w-full top-auto flex justify-center flex-col items-center max-w-[1100px]">
        <div className="flex flex-col justify-center items-center gap-[60px]">
          <div className="max-w-[780px] w-full">
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="tag mb-2">Testimonial</span>
              <h1 className="text-5xl font-extrabold text-[50px] leading-tight">
                What Our Customer Saying?
              </h1>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <div>
                <Image
                  src="/Images/testimonia-avater.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <p>⭐⭐⭐⭐⭐</p>
              <p className="text-center py-2 text-lg">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <p className="text-2xl font-semibold">Sara Taylor</p>
              <p className="text-sm">Consumer</p>
            </div>
          </div>
          <hr className="w-full border border-[#E0E0E0] bg-[#E0E0E0]" />
          <div className="w-full grid grid-cols-4 gap-20">
            <div className="w-[200px] h-[200px] border-2 border-[#7EB693] rounded-full p-2 overflow-hidden flex justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-full h-full rounded-full">
                <h2 className="text-[50px] font-semibold leading-0">100%</h2>
                <p>Organic</p>
              </div>
            </div>
            <div className="w-[200px] h-[200px] border-2 border-[#7EB693] rounded-full p-2 overflow-hidden flex justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-full h-full rounded-full">
                <h2 className="text-[50px] font-semibold leading-0">285</h2>
                <p>Active Product</p>
              </div>
            </div>
            <div className="w-[200px] h-[200px] border-2 border-[#7EB693] rounded-full p-2 overflow-hidden flex justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-full h-full rounded-full">
                <h2 className="text-[50px] font-semibold leading-0">350+</h2>
                <p>Organic Orchads</p>
              </div>
            </div>
            <div className="w-[200px] h-[200px] border-2 border-[#7EB693] rounded-full p-2 overflow-hidden flex justify-center items-center">
              <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-full h-full rounded-full">
                <h2 className="text-[50px] font-semibold leading-0">25+</h2>
                <p>Years of Farming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
