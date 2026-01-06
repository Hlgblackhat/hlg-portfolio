import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
