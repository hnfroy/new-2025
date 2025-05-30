import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import CTAContact from "../../../components/CTAContact";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function DetailProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      gsap.from(".project-detail", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [project]);

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
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-zinc-900">
        <p className="text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <section className="w-full bg-zinc-800 text-amber-100 py-20 relative">
        <div className="container px-4">
          <Link
            to="/all-projects"
            className="inline-block mb-6 text-amber-100 hover:text-amber-200"
          >
            ← Back to Projects
          </Link>   
          <div>
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <div className="text-sm text-gray-400 mb-6">
              <p><strong>Project Type:</strong> Website</p>
              <p><strong>Role:</strong> Designer, Developer</p>
              <p><strong>Tools:</strong> React, Tailwind, GSAP</p>
              <p><strong>Year:</strong> 2025</p>
            </div>
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
            className="relative w-full bg-zinc-800 text-amber-100 overflow-x-visible"
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

      <CTAContact />
      <Footer />
    </>
  );
}
