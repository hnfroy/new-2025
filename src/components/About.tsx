import { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const circleRef = useRef<HTMLDivElement>(null);
  const textCircleRef = useRef<SVGGElement>(null);
  const svgSpinRef = useRef<SVGSVGElement>(null);
  const starRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.to(textCircleRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
      transformOrigin: "50% 50%",
    });

    gsap.to(svgSpinRef.current, {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
      transformOrigin: "50% 50%",
    });

    const ctx = gsap.context(() => {
      if (starRef.current) {
        gsap.to(starRef.current, {
          rotation: "+=360",
          duration: 30,
          ease: "linear",
          repeat: -1,
        });

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
    <div className="w-full bg-zinc-800 py-16">
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-10">
        <div className="text-center md:text-left ">
          <p className="text-amber-100 font-medium text-xl leading-relaxed">
            UI/UX Designer based in Indonesia, focused on effective <br />
            problem-solving through mobile app and website design. <br />
            With hands-on experience, I create impactful digital <br />
            experiences that support innovation and user satisfaction.
          </p>
        </div>

        <div className="flex items-center gap-12">
          <svg ref={starRef} width="100" height="100" className="mx-auto" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" enable-background="new 0 0 256 256">
            <g><g><g><path fill="#fef3c6" d="M126.6,10.4c-0.4,0.2-1.2,4.8-2.4,13.4c-3.3,25.3-5.9,39-9.8,50.5c-6,17.9-14.9,28.6-29.9,36c-12.1,6-28.5,9.7-60.7,13.9C10.9,126,10,126.2,10,128c0,1.8,0.9,2.1,10.1,3.2c48.2,6.1,66.4,11.8,79.6,25c12.9,12.9,18.6,30.6,24.5,75.9c1.7,12.9,1.9,13.8,3.7,13.8s2.1-0.9,3.5-12.1c6-46.8,11.7-64.6,24.8-77.6c13.2-13.2,31.4-18.9,79.6-25c9.2-1.2,10.1-1.5,10.1-3.2c0-1.8-0.9-2-13.8-3.7c-25-3.2-38.4-5.9-49.6-9.5c-18.5-6-29.3-14.8-36.7-29.7c-6.3-12.7-9.9-28.5-14.4-62.9c-1-7.5-1.7-11.4-2.1-11.7C128.5,9.9,127.5,9.9,126.6,10.4z"/></g></g></g>
          </svg>
          <a href="" aria-label="About Me">
            <div ref={circleRef} className="relative w-44 h-44">
              <div className="absolute inset-0 rounded-full border-4 border-amber-100"></div>
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <g ref={textCircleRef}>
                  <text fill="#fef3c6" fontSize="14" fontWeight="bold">
                    <textPath
                      href="#circlePath"
                      startOffset="0"
                      // side="left"
                      textLength="470"
                      spacing="auto"
                    >
                      ABOUT ME • ABOUT ME • ABOUT ME • ABOUT ME •
                    </textPath>
                  </text>
                </g>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-amber-100 font-bold text-3xl">HANIF</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
