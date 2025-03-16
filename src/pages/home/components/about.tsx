export default function About() {
  return (
    <section id="about" className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full mb-10 lg:w-1/2">
            <h2 className="font-bold text-lg md:text-xl lg:text-xl text-stone-50 pb-8">
              ABOUT
            </h2>
            <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300">
              Saya adalah seorang Junior Full-Stack Web Developer dengan minat
              mendalam dalam membangun aplikasi web yang interaktif, efisien,
              dan scalable. Saya percaya bahwa teknologi memiliki kekuatan untuk
              menciptakan pengalaman digital yang lebih baik, dan saya
              berkomitmen untuk terus belajar serta mengembangkan keterampilan
              saya di bidang ini. Saat ini, saya fokus mendalami Next.js,
              TypeScript, dan Tailwind CSS untuk membangun antarmuka pengguna
              yang responsif dan modern. Saya juga memiliki pemahaman dasar
              tentang back-end development menggunakan Node.js dan Express.js,
              serta konsep pengelolaan database seperti MongoDB.
            </p>
          </div>

          <div className="w-full lg:px-6 mb-10 lg:w-1/2">
            <p className="text-base sm:text-lg lg:text-xl justify-center text-zinc-300 lg:pt-14">
              Selain keterampilan teknis, saya menjunjung tinggi prinsip kerja
              yang profesional, termasuk problem-solving yang efektif,
              komunikasi yang jelas, serta penulisan kode yang bersih dan
              maintainable. Saya selalu terbuka terhadap tantangan baru dan
              berusaha memberikan solusi terbaik dalam setiap proyek yang saya
              kerjakan. Dengan semangat belajar yang tinggi, saya siap untuk
              menghadapi tantangan dan terus meningkatkan keterampilan saya di
              dunia pengembangan web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
