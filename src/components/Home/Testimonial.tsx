import Image from "next/image";
// import React from "react";

const Testimonial = () => {
  return (
    <div
      className="relative flex items-center justify-center mb-12 lg:mb-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/t-Background.png')" }}
    >
      <div className="w-full flex justify-center flex-col items-center max-w-[1100px] py-10 px-6 md:px-12">
        <div className="flex flex-col justify-center items-center gap-[60px]">
          {/* Title */}
          <div className="max-w-[780px] w-full text-center">
            <span className="tag mb-2">Testimonial</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              What Our Customer Saying?
            </h1>
          </div>

          {/* Avatar + Review */}
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/Images/testimonia-avater.png"
              alt="Customer Avatar"
              width={100}
              height={100}
            />
            <p>⭐⭐⭐⭐⭐</p>
            <p className="text-center py-2 text-base md:text-lg max-w-[700px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <p className="text-xl md:text-2xl font-semibold">Sara Taylor</p>
            <p className="text-sm">Consumer</p>
          </div>

          {/* Divider */}
          <hr className="w-full border border-[#E0E0E0] bg-[#E0E0E0]" />

          {/* Stats Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-20">
            {[
              { value: "100%", label: "Organic" },
              { value: "285", label: "Active Product" },
              { value: "350+", label: "Organic Orchads" },
              { value: "25+", label: "Years of Farming" },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] border-2 border-[#7EB693] rounded-full p-2 flex justify-center items-center mx-auto"
              >
                <div className="flex flex-col items-center justify-center bg-[#F1F1F1] w-full h-full rounded-full">
                  <h2 className="text-2xl md:text-4xl font-semibold">
                    {item.value}
                  </h2>
                  <p className="text-sm md:text-base text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
