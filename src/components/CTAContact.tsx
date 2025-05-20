import { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CTAContact() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatingBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text = marqueeRef.current?.querySelector(".marquee-text");
      if (text) {
        gsap.to(text, {
          xPercent: -50,
          duration: 10,
          repeat: -1,
          ease: "none",
        });
      }

      if (contentRef.current) {
        const children = contentRef.current.children;
        gsap.from(children, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          ease: "expoScale(0.5,7,none)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        });
      }

      if (floatingBtnRef.current) {
        gsap.fromTo(
          floatingBtnRef.current,
          { y: 0 },
          {
            y: -20,
            duration: 1.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      } else {
        console.warn("Floating button ref is null");
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-zinc-800 text-amber-100 relative overflow-hidden py-20">
      {/* Marquee Text Background */}
      <div
        ref={marqueeRef}
        className="absolute top-32 -left-1/2 w-[200%] overflow-hidden rotate-[-7deg] z-0"
      >
        <div className="marquee-text whitespace-nowrap text-[12vw] font-extrabold text-gray-200 opacity-10 leading-none">
          CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME •
        </div>
      </div>

      {/* CTA Content */}
      <div
        ref={contentRef}
        className="container mx-auto p-6 text-center relative z-10"
      >
        <h2 className="text-2xl md:text-6xl font-bold text-amber-100 mb-4">
          Let’s Work Together.
        </h2>
        <p className="text-lg text-amber-100 mb-8">
          Have a project in mind or just want to say hi? My inbox is always open!
        </p>
        <div className="relative py-16">
          <a
            ref={floatingBtnRef}
            href="mailto:hnfroy@gmail.com"
            className="absolute bottom-12 left-1/2 bg-amber-100 text-black px-6 py-4 rounded-full text-lg font-semibold shadow-lg cursor-pointer hover:bg-amber-200 transition z-50 select-none"
            style={{ transform: "translateX(-50%)" }}
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
