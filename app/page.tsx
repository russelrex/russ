import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Projects />
      <Skills />
      {/* <Services /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
