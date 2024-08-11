/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/service/Banner Image.png"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold ">
          Services
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-[200px] px-[260px] bg-[#f9f8f8]">
      <div className="max-w-[485px] w-full mx-auto flex flex-col items-center justify-center">
        <span className="tag">What we Grow</span>
        <h1 className="text-5xl font-extrabold text-[45px] leading-tight text-center mt-2">
          Better Agriculture for Better Future
        </h1>
      </div>
      <div className="flex items-center justify-between w-full mt-5">
        <div className="w-[395px] p-2 text-right">
          <div className="mb-10 flex flex-col gap-1 justify-end items-end">
            <img
              src="/Images/service/Icon_dairy.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Dairy Products</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 justify-end items-end">
            <img
              src="/Images/service/Icon_store.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Store Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-end items-end">
            <img
              src="/Images/service/Icon_delivery.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Delivery Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
        <div className="w-[450px] p-2">
          <img
            src="/Images/service/Image.png"
            alt="Image"
            className="w-full"
          />
        </div>
        <div className="w-[395px] p-2 text-left">
          <div className="mb-10 flex flex-col gap-1 justify-end items-start">
            <img
              src="/Images/service/Icon_agriculture.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Agricultural Services</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 justify-end items-start">
            <img
              src="/Images/service/Icon_organic.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Organic Products</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className="mb-10 flex flex-col gap-1 justify-end items-start">
            <img
              src="/Images/service/Icon_fresh.png"
              alt="w-16 h-16"
            />
            <h3 className="text-2xl font-semibold">Fresh Vegetables</h3>
            <p>
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
    <div
      id="advertise"
      className="pt-[180px] pb-[535px] mb-[140px] px-[625px] text-center"
    >
      <div>
        <span className="tag">Organic Only</span>
        <h1 className="text-5xl font-extrabold text-[45px] leading-tight text-center mt-2">
          Everyday Fresh & Clean
        </h1>
        <p className="mt-5">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the{" "}
        </p>
        <FaCirclePlay className="text-7xl text-[#7EB693] mx-auto mt-12" />
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
