import About from "./components/about";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Testimonial from "./components/tetimonial";
import Contact from "./components/contact";

export default function HomeView() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <Portfolio />

      <Experience />

      <Testimonial />

      <Contact />
    </>
  );
}
