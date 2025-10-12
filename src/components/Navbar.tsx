"use client";

import menu from "../contents/menu";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoIosArrowDown,
  IoIosCart,
  IoIosSearch,
  IoMdMenu,
  IoMdClose,
} from "react-icons/io";

// ------------------- Logo -------------------
const LogoContainer = () => (
  <div
    className="w-28 md:w-36 lg:w-32 xl:w-40
               transform transition duration-500
               hover:scale-110 hover:-translate-y-2 hover:rotate-6
               hover:shadow-2xl hover:shadow-[#EFD372]/50"
  >
    <Image
      src="/Images/Logo.png"
      alt="Logo"
      width={200}
      height={200}
      className="w-full h-full"
    />
  </div>
);

// ------------------- Menu -------------------
const MenuContainer = ({ isMobile, closeMenu }: any) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (id: number) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <nav
      className={`${
        isMobile ? "flex flex-col gap-4 mt-4" : "flex gap-8 items-center"
      }`}
    >
      {menu.map((item) => (
        <li
          key={item.id}
          className="list-none relative rounded-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
        >
          {item.url ? (
            <Link
              href={item.url}
              onClick={isMobile ? closeMenu : undefined}
              className={`flex items-center font-semibold 
                          transition-colors duration-300 
                          ${
                            pathname === item.url
                              ? "text-gray-400"
                              : "text-[#294a5c]  "
                          }`}
            >
              {item.title}
            </Link>
          ) : (
            <>
              <button
                onClick={() => toggleSubmenu(item.id)}
                className="flex items-center gap-1 font-semibold transition-all duration-300 "
              >
                {item.title}
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openSubmenu === item.id ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <ul
                className={`absolute lg:left-0 left-[68px]  mt-2 w-max bg-white shadow-lg rounded-sm overflow-hidden
                            transition-all duration-500 transform origin-top
                            ${
                              openSubmenu === item.id
                                ? "scale-y-100 opacity-100"
                                : "scale-y-0 opacity-0 pointer-events-none"
                            }`}
              >
                {item.subMenu?.map((submenuItem, index) => (
                  <li
                    key={`${submenuItem.id}-${index}`}
                    className="py-2 pl-[12px] pr-[12px] hover:bg-[#F1F8F4] transition-colors  duration-300"
                  >
                    <Link
                      href={submenuItem.url}
                      onClick={() => {
                        setOpenSubmenu(null);
                        if (isMobile && closeMenu) closeMenu();
                      }}
                      className={`font-semibold ${
                        pathname === submenuItem.url
                          ? "text-gray-400"
                          : "text-[#294a5c]"
                      }`}
                    >
                      {submenuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </nav>
  );
};

// ------------------- Search + Cart -------------------
const SearchSection = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      console.log("Search clicked:", search);
      setSearch("");
    }
  };

  return (
    <div className="flex gap-4 items-center w-full lg:w-auto">
      {/* Search Input */}
      <div
        className="flex items-center py-1 px-2 bg-[#fafafa] rounded-full 
                   w-full md:w-[240px] lg:w-[260px] xl:w-[280px]
                   transition-shadow duration-300 hover:shadow-lg hover:shadow-[#7EB693]/50"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="bg-[#fafafa] outline-none flex-1 text-sm md:text-base"
        />
        <button
          onClick={handleSearch}
          className="transition-transform duration-300 hover:scale-110"
        >
          <span className="rounded-full bg-[#7eb693] text-white w-8 h-8 flex justify-center items-center">
            <IoIosSearch className="text-lg" />
          </span>
        </button>
      </div>

      {/* Cart Button */}
      <CartBtn />
    </div>
  );
};

const CartBtn = () => (
  <button
    className="flex items-center gap-1 rounded-full p-2 border border-gray-300 w-auto
               transform transition duration-300
               hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#274c5b]/40"
  >
    <span
      className="w-6 h-6 rounded-full bg-[#274c5b] text-white flex justify-center items-center
                 transition-transform duration-300 hover:scale-110"
    >
      <IoIosCart className="text-lg" />
    </span>
    <p className="text-[#274c5b] font-semibold hidden xl:block transition-colors duration-300 hover:text-[#1f3b44]">
      Cart (0)
    </p>
  </button>
);

// ------------------- Navbar -------------------
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-[100]">
      <div className="px-4 md:px-6 lg:px-10 xl:px-20 py-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-6 w-full">
          <LogoContainer />
          <div className="flex-1 flex justify-center">
            <MenuContainer isMobile={undefined} closeMenu={undefined} />
          </div>
          <div className="flex-shrink-0">
            <SearchSection />
          </div>
        </div>

        {/* Mobile & Tablet */}
        <div className="flex justify-between items-center lg:hidden">
          <LogoContainer />
          <button
            className="text-2xl transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Menu with Smooth Slide */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
                      ${
                        mobileOpen
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
        >
          <div className="flex flex-col px-4 pb-6 bg-white lg:hidden">
            <MenuContainer
              isMobile={true}
              closeMenu={() => setMobileOpen(false)}
            />
            <div className="mt-4">
              <SearchSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
