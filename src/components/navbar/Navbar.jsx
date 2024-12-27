import React, { useState } from "react";
import { motion } from "framer-motion";
import { navbarMenu } from "../mockData/Data";
import { FaCartShopping } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className=" container flex justify-between items-center py-8 px-5">
          {/* Logo section */}
          <div className=" text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p className="">coders</p>
            <p className=" text-secondary">gym</p>
          </div>
          {/* Menu section */}
          <div className=" hidden md:block">
            <ul className=" flex items-center gap-6 text-gray-600">
              {navbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.links}
                    className=" inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icon section */}
          <div className=" flex items-center gap-4">
            <button className=" text-2xl hover:bg-primary p-2 rounded-full hover:text-white duration-200">
              <IoSearch />
            </button>
            <button className=" text-2xl hover:bg-primary p-2 rounded-full hover:text-white duration-200">
              <FaCartShopping />
            </button>
            <button className=" hover:bg-primary hover:text-white text-primary font-semibold rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* Mobile Hamburger Menu section */}
          <motion.div onClick={() => setOpen(!open)} className=" md:hidden">
            {open ? (
              <RxCross2 className=" text-4xl p-1 bg-primary text-white font-bold  rounded-full cursor-pointer" />
            ) : (
              <MdMenuOpen className=" text-4xl cursor-pointer" />
            )}
          </motion.div>
        </div>
        {/* mobile sidebar section */}
        <ResponsiveMenu open={open} />
      </nav>
    </>
  );
};

export default Navbar;
