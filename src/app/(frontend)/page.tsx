import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AboutMe from "@/components/homepage/AboutMe";
import Contact from "@/components/homepage/Contact";
import HeroSection from "@/components/homepage/HeroSection";

export default function Home() {
  return (
    <div>
      <Header />
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
