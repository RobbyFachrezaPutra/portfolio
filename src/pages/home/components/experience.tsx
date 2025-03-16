export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <div className="container">
        <div className="w-full">
          <h2 className="text-lg md:text-xl lg:text-xl font-bold text-stone-50 pb-8">
            EXPERIENCE
          </h2>

          <div className="border-l-4 pl-4 mb-6">
            <h3 className="text-lg lg:text-xl font-semibold text-stone-50">
              Self-Learning & Personal Projects
            </h3>
            <p className="text-sm text-stone-300">2024 - Sekarang</p>
            <p className="text-base lg:text-lg text-zinc-300">
              Mempelajari pengembangan web secara mandiri dengan fokus pada
              Next.js, TypeScript, dan Tailwind CSS. Mengembangkan proyek kecil
              untuk memahami konsep UI/UX, state management, dan integrasi API.
            </p>
          </div>

          <div className="border-l-4 pl-4 mb-6">
            <h3 className="text-lg lg:text-xl font-semibold text-stone-50">
              Code Challenges & Mini Projects
            </h3>
            <p className="text-sm text-stone-300">2024 - Sekarang</p>
            <p className="text-base lg:text-lg text-zinc-300">
              Mengerjakan berbagai tantangan coding untuk memperdalam pemahaman
              dalam React, JavaScript, dan fundamental back-end dengan Node.js.
              Membuat proyek sederhana untuk menerapkan best practice dalam
              pengembangan web modern.
            </p>
          </div>

          <div className="border-l-4 pl-4">
            <h3 className="text-lg lg:text-xl font-semibold text-stone-50">
              Open Source & GitHub Contributions
            </h3>
            <p className="text-sm text-stone-300">2024 - Sekarang</p>
            <p className="text-base lg:text-lg text-zinc-300">
              Berkontribusi dalam proyek open-source dan membagikan kode melalui
              repository GitHub. Beberapa proyek dapat dilihat di
              <a
                href="https://github.com/USERNAME"
                className="text-blue-500 underline"
              >
                {" "}
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
