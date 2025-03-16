"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 md:h-14 z-50 flex  justify-between p-6 items-center shadow-lg cursor-pointer backdrop-blur-lg border-b-2 border-[#fffdf6]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-lg py-6 block text-stone-50">RFP.</div>
        <ul className="hidden md:flex gap-2 text-stone-50 ">
          <li>
            <a
              href="#home"
              className="hover:underline hover:text-[#6bd2fd] transition-all duration-300 ease-in-out"
            >
              Home,
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:text-[#6bd2fd] transition-all duration-300 ease-in-out"
            >
              About,
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:underline hover:text-[#6bd2fd] transition-all duration-300 ease-in-out"
            >
              Skills,
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:underline hover:text-[#6bd2fd] transition-all duration-300 ease-in-out"
            >
              Portfolio,
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline hover:text-[#6bd2fd] transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-stone-50 text-2xl transition-all duration-300 ease-in-out focus:outline-none "
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("menu State: ");
          }}
        >
          {isOpen ? (
            <span className="text-stone-50">&times;</span>
          ) : (
            <span className="text-stone-50">&#9776;</span>
          )}
        </button>
      </div>

      <div
        className={`md:hidden bg-white/80  text-[#182541] text-center transition-all duration-300 absolute left-0 w-full top-full ${
          isOpen ? "block" : "hidden"
        }`}
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
      </div>
    </nav>
  );
};

export default Navbar;
