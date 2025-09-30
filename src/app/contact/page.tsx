/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ContactForm from "@/components/contact/ContactForm";
import Subscribe from "@/components/Subscribe";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="aboutBanner"
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/contact-banner.jpg')" }}
    >
      <p className="absolute inset-0 flex items-center justify-center lg:text-[60px] text-[60px] font-bold  mt-5">
        Contact Us
      </p>
    </div>
  );
};

const Location = () => {
  return (
    // <div className="mt-[80px] px-[260px] rounded-2xl overflow-hidden">
    //   <div className="relative">
    //     <img
    //       src="/Images/contact_location.jpg"
    //       alt=""
    //       className="w-full h-auto object-cover rounded-2xl"
    //     />
    //     <div className="absolute inset-y-0 right-28 flex items-center justify-center rounded-2xl">
    //       <div className="bg-white py-11 px-14 rounded-2xl max-w-[515px] w-full">
    //         <span className="tag">Location</span>
    //         <h1 className="text-5xl font-bold leading-tight">Our Farms</h1>
    //         <p className="mt-3">
    //           Established fact that a reader will be distracted by the readable
    //           content of a page when looking a layout. The point of using.
    //         </p>
    //         <div className="flex gap-2 mt-5">
    //           <img src="/Images/pin.png" alt="" className="w-[50px] h-[50px]" />
    //           <div className="">
    //             <h1 className="text-lg font-bold">New York, USA:</h1>
    //             <p>
    //               299 Park Avenue New York,
    //               <br /> New York 10171
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex gap-2 mt-5">
    //           <img src="/Images/pin.png" alt="" className="w-[50px] h-[50px]" />
    //           <div className="">
    //             <h1 className="text-lg font-bold">London, UK:</h1>
    //             <p>
    //               30 Stamford Street,
    //               <br /> London SE1 9LQ
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-20 px-4 sm:px-8 md:px-12 lg:px-[180px] xl:px-[260px]">
      <div className="relative">
        {/* Background Image */}
        <img
          src="/Images/contact_location.jpg"
          alt="Location"
          className="w-full h-auto object-cover rounded-2xl"
        />

        {/* Location Card */}
        <div className="static lg:absolute lg:inset-y-0 lg:right-28 flex items-center justify-center mt-6 lg:mt-0">
          <div className="bg-white py-8 sm:py-11 px-6 sm:px-10 md:px-14 rounded-2xl max-w-full lg:max-w-[515px] w-full shadow-lg">
            <span className="tag">Location</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Our Farms
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using.
            </p>

            {/* New York */}
            <div className="flex gap-3 mt-5 items-start">
              <img
                src="/Images/pin.png"
                alt=""
                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
              <div>
                <h2 className="text-base sm:text-lg font-bold">
                  New York, USA:
                </h2>
                <p className="text-sm sm:text-base">
                  299 Park Avenue New York,
                  <br /> New York 10171
                </p>
              </div>
            </div>

            {/* London */}
            <div className="flex gap-3 mt-5 items-start">
              <img
                src="/Images/pin.png"
                alt=""
                className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
              />
              <div>
                <h2 className="text-base sm:text-lg font-bold">London, UK:</h2>
                <p className="text-sm sm:text-base">
                  30 Stamford Street,
                  <br /> London SE1 9LQ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <Banner />

      <div className="px-4 sm:px-8 md:px-12 lg:px-[180px] xl:px-[260px] mt-16 lg:mt-[200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[75px] items-center">
          {/* Image Section */}
          <div className="w-full max-w-[624px] overflow-hidden rounded-xl">
            <img
              className="w-full h-auto object-cover"
              src="/Images/contact_intro.jpg"
              alt=""
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              We'd love to talk about how we can work together.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            {/* Contact Info */}
            <div className="my-8 gap-4 flex flex-col sm:flex-row lg:flex-col">
              <div className="p-4 flex items-center gap-5 border border-gray-200 rounded-2xl w-full sm:w-1/2 lg:w-3/4 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300">
                <img
                  src="/Images/message_icon.png"
                  alt=""
                  className="w-16 h-16 sm:w-[90px] sm:h-[90px]"
                />
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold">Message</h4>
                  <a
                    href="mailto:support@organic.com"
                    className="text-sm sm:text-base"
                  >
                    support@organic.com
                  </a>
                </div>
              </div>
              <div className="p-4 flex items-center gap-5 border border-gray-200 rounded-2xl w-full sm:w-1/2 lg:w-3/4 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300">
                <img
                  src="/Images/phone_icon.png"
                  alt=""
                  className="w-16 h-16 sm:w-[90px] sm:h-[90px]"
                />
                <div>
                  <h4 className="text-lg sm:text-2xl font-semibold">
                    Contact Us
                  </h4>
                  <a
                    href="tel:+01 123 456 789"
                    className="text-sm sm:text-base"
                  >
                    +01 123 456 789
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaPinterest />, link: "#" },
              ].map((s, index) => (
                <a
                  key={index}
                  href={s.link}
                  className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex justify-center items-center bg-[#EFF6F1] rounded-full hover:bg-[#7eb693] hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Location />
      <ContactForm />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default ContactPage;
