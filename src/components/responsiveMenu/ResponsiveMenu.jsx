import { motion, AnimatePresence } from "framer-motion";

import React from "react";
import { navbarMenu } from "../mockData/Data";

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "linear" }}
            className=" absolute top-16 left-0 w-full h-screen z-20"
          >
            <div className=" bg-primary text-xl font-semibold text-white uppercase py-10 m-6 rounded-xl">
              <ul className=" flex flex-col gap-5 justify-center items-center">
                {navbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.links}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
