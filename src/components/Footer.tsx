// import Image from "next/image";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitter,
// } from "react-icons/fa6";

// const BottomFooter = () => {
//   return (
//     <div className="p-1 border-t border-[#D4D4D4]">
//       <p className="text-center p-1">
//         Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates -
//         Powered by <b>Webflow</b>
//       </p>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-5 mb-14">
//         <div className="text-center lg:text-right px-10">
//           <h2 className="font-semibold text-[30px]">Contact Us</h2>
//           <div className="mt-[30px]">
//             <p className="font-semibold">Email</p>
//             <p className="text-[#525C60]">needhelp@Organia.com</p>
//             <br />
//             <p className="font-semibold">Phone</p>
//             <p className="text-[#525C60]">+1 800 123 4567</p>
//             <br />
//             <p className="font-semibold">Address</p>
//             <p className="text-[#525C60]">88 road, borklyn street, USA</p>
//           </div>
//         </div>
//         <div className="border-s border-e border-[#D4D4D4] text-center px-10 flex flex-col items-center gap-8">
//           <Image src="/Images/Logo.png" alt="logo" width={200} height={200} />
//           <p className="text-[#525C60]">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
//             dolores maiores doloribus? Consequuntur, quaerat laborum.
//           </p>
//           <div className="flex flex-row justify-center gap-2 mt-5">
//             <a href="#" className="p-4 bg-[#eff6f1] rounded-full">
//               <FaFacebook className="text-2xl" />
//             </a>
//             <a href="#" className="p-4 bg-[#eff6f1] rounded-full">
//               <FaInstagram className="text-2xl" />
//             </a>
//             <a href="#" className="p-4 bg-[#eff6f1] rounded-full">
//               <FaTwitter className="text-2xl" />
//             </a>
//             <a href="#" className="p-4 bg-[#eff6f1] rounded-full">
//               <FaPinterest className="text-2xl" />
//             </a>
//           </div>
//         </div>
//         <div className="text-center lg:text-left px-10">
//           <h2 className="font-semibold text-[30px]">Utility Pages</h2>
//           <div className="mt-[30px] flex flex-col gap-4">
//             <a href="" className="text-[#525C60]">
//               Style Guide
//             </a>
//             <a href="" className="text-[#525C60]">
//               404 Not Found
//             </a>
//             <a href="" className="text-[#525C60]">
//               Password Protected
//             </a>
//             <a href="" className="text-[#525C60]">
//               Licences
//             </a>
//             <a href="" className="text-[#525C60]">
//               Changelog
//             </a>
//           </div>
//         </div>
//       </div>
//       <BottomFooter />

//     </div>
//   );
// };

// export default Footer;

import MobileFooter from "@/MobileFooter";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      {/* ================= Desktop Footer ================= */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-1 mt-5 mb-14">
        {/* Contact Us */}
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

        {/* Logo + Lorem + Social */}
        <div className="border-s border-e border-[#D4D4D4] text-center px-10 flex flex-col items-center gap-8">
          <Image src="/Images/Logo.png" alt="logo" width={200} height={200} />
          <p className="text-[#525C60] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            dolores maiores doloribus? Consequuntur, quaerat laborum.
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

        {/* Utility Pages */}
        <div className="text-center lg:text-left px-10">
          <h2 className="font-semibold text-[30px]">Utility Pages</h2>
          <div className="mt-[30px] flex flex-col gap-4">
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
      </div>

      {/* Desktop Copyright */}
      <div className="hidden lg:block p-1 border-t border-[#D4D4D4]">
        <p className="text-center p-1 text-sm">
          Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates
          - Powered by <b>Webflow</b>
        </p>
      </div>

      {/* ================= Mobile Footer ================= */}
      <MobileFooter />
    </div>
  );
};

export default Footer;
