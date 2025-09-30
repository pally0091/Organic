/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/service/Banner Image.png')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[80px] text-[60px] font-bold  mt-5">
        Services
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[260px] bg-[#f9f8f8]">
      {/* Title Section */}
      <div className="max-w-[485px] w-full mx-auto flex flex-col items-center justify-center text-center">
        <span className="tag">What we Grow</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2">
          Better Agriculture for Better Future
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-10 gap-10 lg:gap-6">
        {/* Left Services */}
        <div className="w-full lg:w-[395px] p-2 text-center lg:text-right">
          <div className="mb-10 flex flex-col gap-1 items-center lg:items-end">
            <img
              src="/Images/service/Icon_dairy.png"
              alt="Dairy"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Dairy Products
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 items-center lg:items-end">
            <img
              src="/Images/service/Icon_store.png"
              alt="Store"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Store Services
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="flex flex-col gap-1 items-center lg:items-end">
            <img
              src="/Images/service/Icon_delivery.png"
              alt="Delivery"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Delivery Services
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="w-full lg:w-[450px] p-2">
          <img
            src="/Images/service/Image.png"
            alt="Service Image"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Right Services */}
        <div className="w-full lg:w-[395px] p-2 text-center lg:text-left">
          <div className="mb-10 flex flex-col gap-1 items-center lg:items-start">
            <img
              src="/Images/service/Icon_agriculture.png"
              alt="Agriculture"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Agricultural Services
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 items-center lg:items-start">
            <img
              src="/Images/service/Icon_organic.png"
              alt="Organic"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Organic Products
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 items-center lg:items-start">
            <img
              src="/Images/service/Icon_fresh.png"
              alt="Fresh"
              className="w-16 h-16"
            />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Fresh Vegetables
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Advertise = () => {
  return (
    // <div
    //   id="advertise"
    //   className="pt-[180px] pb-[535px] mb-[140px] px-[625px] text-center"
    // >
    //   <div>
    //     <span className="tag">Organic Only</span>
    //     <h1 className="text-5xl font-extrabold text-[45px] leading-tight text-center mt-2">
    //       Everyday Fresh & Clean
    //     </h1>
    //     <p className="mt-5">
    //       Simply dummy text of the printing and typesetting industry. Lorem had
    //       ceased to been the industry's standard dummy text ever since the{" "}
    //     </p>
    //     <FaCirclePlay className="text-7xl text-[#7EB693] mx-auto mt-12" />
    //   </div>
    // </div>

    <div
      id="advertise"
      className="px-4 sm:px-8 md:px-16 lg:px-[260px] xl:px-[625px] 
             pt-20 sm:pt-28 md:pt-36 lg:pt-[180px] 
             pb-20 sm:pb-40 md:pb-60 lg:pb-[535px] 
             mb-20 sm:mb-28 md:mb-32 lg:mb-[140px] text-center"
    >
      <div>
        <span className="tag">Organic Only</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-center mt-2">
          Everyday Fresh & Clean
        </h1>
        <p className="mt-5 text-sm sm:text-base max-w-2xl mx-auto">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
        </p>
        <FaCirclePlay className="text-5xl sm:text-6xl md:text-7xl text-[#7EB693] mx-auto mt-12" />
      </div>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Advertise />
    </div>
  );
};

export default ServicePage;
