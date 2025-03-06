import About from "./components/about";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";

export default function HomeView() {
  return (
    <div className="min-h-screen my-20 mx-4 space-y-10 md:space-y-20 justify-between">
      <section>
        <Hero />
      </section>

      <div className="mt-40 flex flex-col md:flex-row justify-between w-full items-start gap-8">
        <section className="md:w-1/2">
          <About />
        </section>

        <section className="md:w-1/2">
          <Skills />
        </section>
      </div>

      <div>
        <section>
          <Portfolio/>
        </section>
      </div>
    </div>
  );
}
