export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 text-center gap-8"
    >
      <div className="md:w-1/2">
        <h1 className="text-center md:text-start text-3xl sm:text-3xl lg:text-5xl font-bold text-[#fffdf6] tracking-tight">
         Hey, I'm <br />Robby Fachreza Putra
        </h1>
        <p className="text-center md:text-start text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#fffdf6] mt-2">
          Full Stack Web Developer
        </p>
        <p className="text-center md:text-start text-base sm:text-lg lg:text-xl text-[#aba8a8] mt-4">
          Learning, Coding, and Creating Digital Experiences
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
      <button className="text-white text-xl sm:text-2xl md:text-3 xl">Hire Me</button></div>
    </section>
  );
}
