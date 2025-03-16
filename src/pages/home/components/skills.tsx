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
            <li>
              <strong>Front-End:</strong> Next.js, React, TypeScript, Tailwind
              CSS
            </li>
            <li>
              <strong>Back-End:</strong> Node.js, Express.js (pemahaman dasar)
            </li>
            <li>
              <strong>Database:</strong> MongoDB (pemahaman dasar)
            </li>
            <li>
              <strong>Tools & DevOps:</strong> Git, GitHub, API Integration,
              CI/CD (pemahaman dasar)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
