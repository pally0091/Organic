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
    <div id="aboutBanner">
      <div className="relative text-center">
        <img
          src="/Images/contact-banner.jpg"
          alt=""
        />
        <p className="absolute inset-0 flex items-center justify-center text-[80px] font-bold ">
          Contact Us
        </p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div>
      <Banner />
      <div className="px-[260px] mt-[200px]">
        <div className="flex gap-[75px] items-center">
          <div className="max-w-[624px] w-full overflow-hidden rounded-xl">
            <img
              className="w-full"
              src="/Images/contact_intro.jpg"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">
              We'd love to talk about how we can work together.
            </h1>
            <p className="mt-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="my-8 gap-4 flex flex-col">
              <div className="p-3 flex items-center gap-5 border border-gray-200 rounded-2xl w-1/2 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300">
                <img
                  src="/Images/message_icon.png"
                  alt=""
                  className="w-[90px] h-[90px]"
                />
                <div>
                  <h4 className="text-2xl font-semibold">Massege</h4>
                  <a href="mailto:support@organic.com">support@organic.com</a>
                </div>
              </div>
              <div className="p-3 flex items-center gap-5 border border-gray-200 rounded-2xl w-1/2 hover:shadow-lg hover:shadow-gray-200 transition-all duration-300">
                <img
                  src="/Images/phone_icon.png"
                  alt=""
                  className="w-[90px] h-[90px]"
                />
                <div>
                  <h4 className="text-2xl font-semibold">Contact Us</h4>
                  <a href="tel:+01 123 456 789">+01 123 456 789</a>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-[60px] h-[60px] flex justify-center items-center bg-[#EFF6F1] rounded-full"
              >
                <FaInstagram className="text-xl font-semibold" />
              </a>
              <a
                href="#"
                className="w-[60px] h-[60px] flex justify-center items-center bg-[#EFF6F1] rounded-full"
              >
                <FaFacebook className="text-xl font-semibold" />
              </a>
              <a
                href="#"
                className="w-[60px] h-[60px] flex justify-center items-center bg-[#EFF6F1] rounded-full"
              >
                <FaTwitter className="text-xl font-semibold" />
              </a>
              <a
                href="#"
                className="w-[60px] h-[60px] flex justify-center items-center bg-[#EFF6F1] rounded-full"
              >
                <FaPinterest className="text-xl font-semibold" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <div className="my-[140px] w-full">
        <Subscribe />
      </div>
    </div>
  );
};

export default ContactPage;
