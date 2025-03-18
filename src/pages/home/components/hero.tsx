"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-24 lg:py-36">
      <div className="container flex justify-center items-center">
        <div className="flex flex-wrap">
          <motion.div
            className="w-full self-center px-4 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-base font-semibold text-stone-50 mb-1 md:text-xl">
              Hai, saya{" "}
              <span className="block font-bold text-3xl mt-1 lg:text-5xl">
                Robby F. Putra
              </span>
            </h1>
            <p className="font-medium text-lg text-stone-50 mb-5 lg:text-2xl ">
              Full Stack Web Developer
            </p>
            <p className="font-medium text-base text-zinc-300 mb-5">
              Eksplorasi, inovasi, dan membangun pengalaman digital
            </p>
            <a href="#contact">
              <button className="px-4 py-2 sm:px-6 sm:py-3 text-cyan-900 text-sm sm:text-base border bg-cyan-400 rounded-xl hover:text-cyan-400 hover:bg-cyan-900 transform transition-all duration-300 ease-in-out hover:scale-105 sm:hover:scale-110 mt-5">
                Hire Me
              </button>
            </a>
          </motion.div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <Image
                src="/asset/Hero-picture.png"
                alt="Robby Fachreza Putra"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
