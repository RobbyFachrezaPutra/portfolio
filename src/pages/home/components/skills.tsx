"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <div className="container">
        <div className="w-full">
          <h2 className="text-base md:text-lg lg:text-xl font-bold text-stone-50 pb-8">
            SKILLS
          </h2>
          <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300 pb-4">
            Saya memiliki keterampilan dalam berbagai aspek pengembangan web,
            baik di sisi front-end maupun back-end, serta alat pendukung yang
            membantu dalam pengembangan aplikasi yang efisien.
          </p>
          <ul className="pl-8 list-disc text-base sm:text-lg lg:text-xl justify-center text-zinc-300">
            <motion.li
              className="pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <strong>Front-End:</strong> Next.js, React, TypeScript, Tailwind
              CSS
            </motion.li>
            <motion.li
              className="pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Back-End:</strong> Node.js, Express.js (pemahaman dasar)
            </motion.li>
            <motion.li
              className="pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong>Database:</strong> MongoDB (pemahaman dasar)
            </motion.li>
            <motion.li
              className="pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
            >
              <strong>Tools & DevOps:</strong> Git, GitHub
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
