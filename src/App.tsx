import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectParallax from "./components/ProjectParallax";
import CTAContact from "./components/CTAContact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <SmoothScrollWrapper>
        <Hero />
        <About />
        <ProjectParallax />
        <CTAContact />
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
}
