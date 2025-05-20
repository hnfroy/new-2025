import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Nav from "../../../components/Nav";
import CTAContact from "../../../components/CTAContact";
import Footer from "../../../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id.toString() === id);

  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const sections = galleryRef.current!.querySelectorAll(".gallery-item");
      const totalWidth = Array.from(sections).reduce(
        (acc, section) => acc + (section as HTMLElement).offsetWidth + 16, // +gap
        0
      );

      gsap.to(galleryRef.current, {
        x: () => `-${totalWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!project) {
    return <div className="text-center text-red-500 mt-20">Project not found</div>;
  }

  return (
    <>
      <Nav />
      <section className="w-full bg-zinc-800 text-amber-100 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">          
          <div>
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-xl mb-10"
            />
            <p className="text-lg leading-relaxed mb-8">{project.desc}</p>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex gap-4 flex-wrap">
                {project.tech.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-[60px] h-[60px] object-contain"
                    />
                    <span className="mt-1 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div 
            ref={containerRef}
            className="relative w-full bg-zinc-800 text-amber-100 overflow-hidden"
          > 
            <div
              ref={galleryRef}
              className="flex gap-4 py-10 w-max gallery-track"
            >
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="gallery-item flex-shrink-0 w-[70vw] md:w-[75vw] md:h-[800px] rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`project ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section
        ref={containerRef}
        className="relative w-full bg-zinc-800 text-amber-100 overflow-hidden"
      >
        <div
          ref={galleryRef}
          className="flex gap-4 px-10 py-20 w-max gallery-track"
        >
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className="gallery-item flex-shrink-0 w-[80vw] h-[820px] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`project ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section> */}

      <CTAContact />
      <Footer />
    </>
  );
}
