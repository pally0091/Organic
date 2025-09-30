"use client";
import menu from "../contents/menu";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";

const LogoContainer = () => {
  return (
    <div className="w-40">
      <Image
        src="/Images/Logo.png"
        alt=""
        width={200}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

const MenuContainer = () => {
  const [open, setOpen] = useState(false);
  const handleSubmenu = () => {
    setOpen(!open);
  };
  const pathname = usePathname();

  return (
    <nav className="flex gap-10 items-center">
      {menu.map((item) => (
        <li key={item.id} className="list-none relative`">
          {item.url ? (
            <Link
              href={item.url}
              className={`flex items-center font-semibold text-[#294a5c] ${
                pathname === item.url ? "text-gray-400 " : "text-black"
              }`}
            >
              {item.title}
            </Link>
          ) : (
            <>
              <Link
                href="#"
                onClick={handleSubmenu}
                className=" flex items-center gap-1 font-semibold "
              >
                {item.title}
                <IoIosArrowDown
                  className={`${
                    open ? "-rotate-180" : ""
                  } transition-all duration-300`}
                />
              </Link>
              <ul
                className={`${
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                } transition-all duration-300 bg-white p-4 rounded-md absolute shadow-md shadow-gray-400 flex flex-col justify-start gap-2 z-50`}
              >
                {item.subMenu?.map((submenuItem) => (
                  <li
                    className="relative text-base text-black duration-500 py-2 px-2"
                    key={submenuItem.id}
                  >
                    <Link
                      href={submenuItem.url}
                      onClick={handleSubmenu}
                      className={`text-[#294a5c] font-semibold ${
                        pathname === submenuItem.url
                          ? "text-gray-400 "
                          : "text-black"
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

const SearchSection = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search) {
      console.log("search clicked", search);
      setSearch("");
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[380px] flex items-center justify-between gap-2 p-2 bg-[#fafafa] rounded-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#fafafa] outline-none focus:outline-none w-[340px]"
        />
        <button onClick={handleSearch} className="">
          <p className="rounded-full bg-[#7eb693] text-white w-8 h-8 text-center flex justify-center items-center">
            <IoIosSearch className="text-lg " />
          </p>
        </button>
      </div>
      <CartBtn />
    </div>
  );
};

const CartBtn = () => {
  return (
    <button className="flex items-center gap-1 rounded-full p-2 border border-gray-300 w-[120px]">
      <p className="w-8 h-8 rounded-full bg-[#274c5b] text-white flex justify-center items-center">
        <IoIosCart className="text-lg" />
      </p>
      <p className="text-[#274c5b] font-semibold">Cart (0)</p>
    </button>
  );
};
const Navbar = () => {
  return (
    // <div className="flex justify-between items-center px-[80px] py-[30px] z-100">
    //   <LogoContainer />
    //   <MenuContainer />

    //   <SearchSection />
    // </div>

    //responsive

    <div
      className="flex flex-col md:flex-row justify-between items-center 
                px-4 md:px-20 py-4 md:py-8 gap-4 md:gap-0 z-[100]"
    >
      <LogoContainer />
      <MenuContainer />
      <SearchSection />
    </div>
  );
};

export default Navbar;
