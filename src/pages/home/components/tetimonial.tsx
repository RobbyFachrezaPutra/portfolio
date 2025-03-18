export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="w-full px-4 md:px-8 lg:px-12 py-16 md:py-24"
    >
      <div className="container">
        <div className="w-full">
          <h2 className="font-bold text-lg md:text-xl lg:text-xl text-stone-50 pb-8">
            TESTIMONIALS
          </h2>

          <div className="border-l-4 pl-4 mb-6">
            <p className="text-base lg:text-lg text-zinc-300 italic">
              "Bekerja dengan Robby sangat menyenangkan! Kualitas kodenya rapi,
              responsif terhadap feedback, dan selalu menyelesaikan tugas tepat
              waktu."
            </p>
            <p className="text-sm text-stone-200 mt-2">— Agung, CEO Startup</p>
          </div>

          <div className="border-l-4 pl-4 mb-6">
            <p className="text-base lg:text-lg text-zinc-300 italic">
              "Sangat profesional dan komunikatif! Website yang dibuatnya
              memiliki UI/UX yang sangat baik."
            </p>
            <p className="text-sm text-stone-200 mt-2">— Anggi, CEO Startup</p>
          </div>

          <div className="border-l-4 pl-4">
            <p className="text-base lg:text-lg text-zinc-300 italic">
              "Saya sangat merekomendasikan Robby bagi siapa pun yang mencari
              developer berbakat dengan kemampuan komunikasi yang luar biasa!"
            </p>
            <p className="text-sm text-stone-200 mt-2">— Yuda, CEO Startup</p>
          </div>
        </div>
      </div>
    </section>
  );
}
