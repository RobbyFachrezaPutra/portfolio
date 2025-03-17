"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 z-50 flex justify-between items-center px-12 md:px-20 py-4 shadow-lg backdrop-blur-lg border-b-2 border-[#fffdf6]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-lg block text-stone-50">RFP.</div>
        <ul className="hidden md:flex gap-8 text-stone-50 ">
          <li>
            <a
              href="#home"
              className="hover:underline hover:text-cyan-400 transition-all duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:text-cyan-400 transition-all duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:underline hover:text-cyan-400 transition-all duration-300 ease-in-out"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:underline hover:text-cyan-400 transition-all duration-300 ease-in-out"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline hover:text-cyan-400 transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-stone-50 text-2xl transition-all duration-300 ease-in-out focus:outline-none"
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(!isOpen);
            console.log("menu State: ");
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            style={{ width: "24px", height: "24px" }}
          >
            {isOpen ? (
              <span className="w-6 flex justify-center">&times;</span>
            ) : (
              <span className="w-6 flex justify-center">&#9776;</span>
            )}
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 text-[#182541] text-center transition-all duration-300 absolute left-0 w-full top-full opacity-100 visible"
          >
            <a
              href="#home"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-3 hover:text-[#6bd2fd]"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block py-3 hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
