import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AboutMe from "@/components/homepage/AboutMe";
import Contact from "@/components/homepage/Contact";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center pt-20">
        NOTE THAT THIS IS NOT THE FINAL VISION... STILL PLANNING... LOL
      </div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
