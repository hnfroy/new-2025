import { useEffect, useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectParallax() {
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const floatingBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
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
                scrub: 0.8,
              },
            }
          );
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
      image:
        "../../public/assets/img/projects/kikomunal.webp",
      alignImage: "md:justify-start",
      alignText: "md:items-start md:text-left",
    },
    {
      id: 2,
      title: "Pengaduan WebApp",
      image:
        "../../public/assets/img/projects/pengaduan.webp",
      alignImage: "md:justify-end",
      alignText: "md:items-end md:text-right",
    },
    {
      id: 3,
      title: "Hakcipta WebApp",
      image:
        "../../public/assets/img/projects/ehakcipta.webp",
      alignImage: "md:justify-start",
      alignText: "md:items-start md:text-left",
    },
    {
      id: 4,
      title: "Muda Penuh Kreasi Website",
      image:
        "../../public/assets/img/projects/mpkreasi.webp",
      alignImage: "md:justify-end",
      alignText: "md:items-end md:text-right",
    },
    {
      id: 5,
      title: "Inti Ragam Perkasa Website",
      image:
        "../../public/assets/img/projects/intrakasa.webp",
      alignImage: "md:justify-start",
      alignText: "md:items-start md:text-left",
    },
  ];

  return (
    <div className="w-full bg-zinc-800">
      <div className="container mx-auto bg-zinc-800 py-20 space-y-32">
        <h2
          ref={headingRef}
          className="text-4xl text-hero md:text-6xl font-bold text-amber-100"
        >
          Featured <br />Projects.
        </h2>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el
            }}
            className="container mx-auto p-6 flex flex-col md:flex-row"
          >
            <div
              className={`flex w-full ${project.alignImage} justify-center relative`}
            >
              <div
                ref={(el) => {
                  imagesRef.current[index] = el
                }}
                className="w-full md:w-1/2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[575px] h-[390px] rounded-lg shadow-lg object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center text-center ${project.alignText} justify-center px-8 group`}
                >
                  <div className="rounded-lg p-4 transition duration-300 backdrop-blur-none group-hover:backdrop-blur-sm">
                    <h2 className="text-2xl md:text-6xl font-bold text-amber-100 drop-shadow-md">
                      {project.title}
                    </h2>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-block mt-4 bg-amber-100 text-black px-4 py-2 rounded-full font-semibold hover:bg-amber-200 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative py-16">
        <Link
  ref={floatingBtnRef}
  to="/projects"
  className="absolute bottom-12 left-1/2 bg-amber-100 text-black px-6 py-4 rounded-full text-lg font-semibold shadow-lg cursor-pointer hover:bg-amber-200 transition z-50 select-none"
  style={{ transform: "translateX(-50%)" }}
  aria-label="See All Projects"
>
  See All Projects
</Link>

        </div>
      </div>
    </div>
  );
}
