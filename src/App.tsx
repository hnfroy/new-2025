import { useEffect, useState } from "react";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import About from "./components/About";
import StarScroll from "./components/StarScroll";
import ProjectParallax from "./components/ProjectParallax";
import CTAContact from "./components/CTAContact";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Hapus splash screen dari DOM
  };

  return (
    <>
      <SmoothScrollWrapper>
        {/* {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <>
            <Hero />
            <About />
          </>
        )} */}
        <Hero />
        <About />
        <ProjectParallax />
        <CTAContact />
        <Footer />
      </SmoothScrollWrapper>
    </>
  );
}
