import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuildReveal from "@/components/BuildReveal";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BuildReveal />
        <Services />
        <Portfolio />
        <About />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
