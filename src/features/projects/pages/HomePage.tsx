import Hero from "../../../components/Hero";
import About from "../../../components/About";
import ProjectParallax from "../../../components/ProjectParallax";
import Nav from "../../../components/Nav";
import CTAContact from "../../../components/CTAContact";
import Footer from "../../../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <ProjectParallax />
      <CTAContact />
      <Footer />
    </div>
  );
}
