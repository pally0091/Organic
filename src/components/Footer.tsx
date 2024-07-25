import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const BottomFooter = () => {
  return (
    <div className="p-1 border-t border-[#D4D4D4]">
      <p className="text-center p-1">
        Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates -
        Powered by <b>Webflow</b>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-5 mb-14">
        <div className="text-center lg:text-right px-10">
          <h2 className="font-semibold text-[30px]">Contact Us</h2>
          <div className="mt-[30px]">
            <p className="font-semibold">Email</p>
            <p className="text-[#525C60]">needhelp@Organia.com</p>
            <br />
            <p className="font-semibold">Phone</p>
            <p className="text-[#525C60]">+1 800 123 4567</p>
            <br />
            <p className="font-semibold">Address</p>
            <p className="text-[#525C60]">88 road, borklyn street, USA</p>
          </div>
        </div>
        <div className="border-s border-e border-[#D4D4D4] text-center px-10 flex flex-col items-center gap-8">
          <Image
            src="/Images/Logo.png"
            alt="logo"
            width={200}
            height={200}
          />
          <p className="text-[#525C60]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolores maiores doloribus? Consequuntur, quaerat laborum.
          </p>
          <div className="flex flex-row justify-center gap-2 mt-5">
            <a
              href="#"
              className="p-4 bg-[#eff6f1] rounded-full"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="p-4 bg-[#eff6f1] rounded-full"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="p-4 bg-[#eff6f1] rounded-full"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="p-4 bg-[#eff6f1] rounded-full"
            >
              <FaPinterest className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center lg:text-left px-10">
          <h2 className="font-semibold text-[30px]">Utility Pages</h2>
          <div className="mt-[30px] flex flex-col gap-4">
            <a
              href=""
              className="text-[#525C60]"
            >
              Style Guide
            </a>
            <a
              href=""
              className="text-[#525C60]"
            >
              404 Not Found
            </a>
            <a
              href=""
              className="text-[#525C60]"
            >
              Password Protected
            </a>
            <a
              href=""
              className="text-[#525C60]"
            >
              Licences
            </a>
            <a
              href=""
              className="text-[#525C60]"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Footer;
