import { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function StarScroll() {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (starRef.current) {
        // 1. Animasi berputar pelan terus menerus
        gsap.to(starRef.current, {
          rotation: "+=360",
          duration: 30, // Semakin besar durasinya, makin pelan
          ease: "linear",
          repeat: -1, // Loop forever
        });

        // 2. Animasi tambahan saat scroll
        gsap.to(starRef.current, {
          rotation: "+=360",
          scrollTrigger: {
            trigger: starRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-6 flex justify-center">
        <div
          ref={starRef}
          className="relative w-18 h-18 flex justify-center items-center"
        >
          {/* Bintang 4 Titik */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="15" r="10" fill="black" />
            <circle cx="50" cy="85" r="10" fill="black" />
            <circle cx="15" cy="50" r="10" fill="black" />
            <circle cx="85" cy="50" r="10" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  );
}
