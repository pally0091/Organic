import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
const MobileFooter = () => {
  return (
    <div>
      <div className="block lg:hidden px-4 sm:px-10 mb-14">
        <div className="grid grid-cols-1 gap-6">
          {/* Logo + Lorem + Social */}
          <div className="text-center px-4">
            <Image
              src="/Images/Logo.png"
              alt="logo"
              width={200}
              height={200}
              className="mx-auto"
            />
            <p className="text-[#525C60] mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis dolores maiores doloribus? Consequuntur, quaerat
              laborum.
            </p>

            <div className="flex flex-row justify-center gap-4 mt-5">
              {[FaFacebook, FaInstagram, FaTwitter, FaPinterest].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-4 bg-[#eff6f1] rounded-full flex items-center justify-center
                 transform transition duration-300 hover:scale-125 
                 hover:-translate-y-2 hover:rotate-3
                 hover:shadow-lg hover:shadow-[#EFD372]/60
                 animate-hoverPulse"
                  >
                    <Icon className="text-2xl text-[#264a59]" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center px-4">
            <h2 className="font-semibold text-[30px]">Contact Us</h2>
            <div className="mt-4">
              <p className="font-semibold">Email</p>
              <p className="text-[#525C60]">needhelp@Organia.com</p>
              <p className="font-semibold mt-2">Phone</p>
              <p className="text-[#525C60]">+1 800 123 4567</p>
              <p className="font-semibold mt-2">Address</p>
              <p className="text-[#525C60]">88 road, borklyn street, USA</p>
            </div>
          </div>

          {/* Utility Pages */}
          <div className="text-center px-4">
            <h2 className="font-semibold text-[30px]">Utility Pages</h2>
            <div className="mt-4 flex flex-col gap-2">
              {[
                "Style Guide",
                "404 Not Found",
                "Password Protected",
                "Licences",
                "Changelog",
              ].map((page, idx) => (
                <a
                  key={idx}
                  href=""
                  className="text-[#525C60] hover:text-[#264a59] transition"
                >
                  {page}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Copyright */}
          <div className="p-1 border-t border-[#D4D4D4] mt-6">
            <p className="text-center p-1 text-sm">
              Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b>{" "}
              Templates - Powered by <b>Webflow</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
