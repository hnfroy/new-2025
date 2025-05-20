import { useEffect, useRef } from "react";
import { gsap } from 'gsap'

export default function Hero() {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const floatingTxtRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      textRef1.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 }
    )
      .fromTo(
        textRef2.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.1 }
      )
      .fromTo(
        textRef3.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.1 }
      )
      .fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 },
        "-=0.8"
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      floatingTxtRef.current,
      { y: 0 },
      {
        y: -10,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="w-full bg-zinc-800 pt-6">
      <div className="container h-screen p-6 flex flex-col justify-center items-center">
        <div className="w-full">
          <p 
          ref={floatingTxtRef}
          className="text-amber-100 font-semibold text-2xl">
            UI/UX Designer <br />
            Frontend Developer
          </p>
        </div>
        <h1
          ref={textRef1}
          className="w-full text-left text-hero text-4xl md:text-5xl font-bold text-amber-100 mb-2"
        >
          Crafting
        </h1>
        <h1
          ref={textRef2}
          className="w-full text-right text-hero text-4xl md:text-5xl font-bold text-amber-100 mb-2"
        >
          Seamless
        </h1>
        <h1
          ref={textRef3}
          className="w-full text-left text-hero text-4xl md:text-5xl font-bold text-amber-100 mb-6"
        >
          Experiences
        </h1>
      </div>
    </div>
  );
}
