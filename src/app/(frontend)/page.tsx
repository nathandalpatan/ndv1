import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import AboutMe from "@/components/homepage/AboutMe";
import Contact from "@/components/homepage/Contact";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";

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
