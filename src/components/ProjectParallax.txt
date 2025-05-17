import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectParallax() {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animasi teks heading slide dari kiri
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    const ctx = gsap.context(() => {
      // Parallax image scroll effect
      imagesRef.current.forEach((container) => {
        const img = container?.querySelector("img");
        if (img && container) {
          gsap.fromTo(
            img,
            { y: 50, scale: 1.1 },
            {
              y: -50,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      // Fade in + slide from left/right based on index
      projectRefs.current.forEach((project, index) => {
        if (project) {
          const fromX = index % 2 === 0 ? -100 : 100; // Genap (0, 2, 4...) dari kiri, Ganjil dari kanan

          gsap.fromTo(
            project,
            { x: fromX, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: project,
                start: "top 70%",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "KI Komunal Website",
      description: "Deskripsi project satu yang sangat menarik.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alignImage: "md:justify-start",
      alignText: "md:items-start md:text-left",
    },
    {
      id: 2,
      title: "Pengaduan WebApp",
      description: "Deskripsi project dua yang tak kalah keren.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alignImage: "md:justify-end",
      alignText: "md:items-end md:text-right",
    },
    {
      id: 3,
      title: "Hakcipta WebApp",
      description: "Design Website & Dashboard Backoffice.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alignImage: "md:justify-start",
      alignText: "md:items-start md:text-left",
    },
    {
      id: 4,
      title: "Inti Ragam Perkasa Website",
      description: "Deskripsi project tiga yang luar biasa.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alignImage: "md:justify-end",
      alignText: "md:items-end md:text-right",
    },
  ];

  return (
    <div className="w-full bg-zinc-800">
      <div className="container mx-auto bg-zinc-800 py-20 space-y-32">
        {/* 🔠 Heading Portofolio */}
        <h2
          ref={headingRef}
          className="text-4xl text-hero md:text-6xl font-bold text-amber-100"
        >
          Portofolio.
        </h2>

        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="container mx-auto p-6 flex flex-col md:flex-row"
          >
            <div
              className={`flex w-full ${project.alignImage} justify-center relative`}
            >
              <div
                ref={(el) => (imagesRef.current[index] = el)}
                className="w-full md:w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center text-center ${project.alignText} justify-center px-8 group`}
                >
                  <div className="rounded-lg p-4 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm">
                    <h2 className="text-2xl md:text-6xl font-bold text-amber-100 drop-shadow-md">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-amber-100 drop-shadow-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
