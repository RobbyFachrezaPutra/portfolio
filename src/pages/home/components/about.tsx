"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap gap-10">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-lg md:text-xl lg:text-xl text-stone-50 pb-8">
              ABOUT ME
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300">
              Saya seorang Junior Full-Stack Web Developer yang antusias dalam
              membangun aplikasi web yang modern dan efisien. Saat ini, saya
              mendalami Next.js, TypeScript, dan Tailwind CSS, serta memiliki
              pemahaman dasar tentang back-end development dengan Node.js dan
              Express.js. Saya percaya bahwa teknologi dapat menciptakan
              pengalaman digital yang lebih baik. Dengan semangat belajar
              tinggi, saya berkomitmen untuk terus meningkatkan keterampilan dan
              memberikan solusi terbaik dalam pengembangan web.
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-lg md:text-xl lg:text-xl text-stone-50 pb-6">
              CORE SKILLS & KEY VALUES
            </h2>

            <div className="flex flex-wrap gap-4 pb-6">
              {[
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm transition duration-300 hover:bg-cyan-400 hover:text-slate-800 hover:scale-110"
                >
                  {skill}
                </span>
              ))}
            </div>

            <ul className="text-base sm:text-lg lg:text-xl list-disc pl-4 text-zinc-300">
              <li>Ketepatan Waktu</li>
              <li>Perhatian terhadap Detail</li>
              <li>Komunikasi yang Jelas & Efektif</li>
              <li>Terus belajar dan berkembang</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
