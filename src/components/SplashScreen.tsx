import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll saat splash
    document.body.classList.add("overflow-hidden");

    const tl = gsap.timeline({
      delay: 0.8,
    });

    tl.to(splashRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        document.body.classList.remove("overflow-hidden");
        onFinish();
      },
    });
  }, [onFinish]);

  return (
    <div
      ref={splashRef}
      className="w-full h-full fixed top-0 left-0 bg-white flex justify-center items-center z-50 transition-opacity duration-1000"
    >
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-800">Welcome</h1>
        <p className="mt-4 text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
