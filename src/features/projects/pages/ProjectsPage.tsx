import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import CTAContact from "../../../components/CTAContact";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    id: 1,
    title: "KI Komunal Website",
    image: "/assets/img/projects/kikomunal.webp",
  },
  {
    id: 2,
    title: "Pengaduan WebApp",
    image: "/assets/img/projects/pengaduan.webp",
  },
  {
    id: 3,
    title: "Hakcipta WebApp",
    image: "/assets/img/projects/ehakcipta.webp",
  },
  {
    id: 4,
    title: "Muda Penuh Kreasi Website",
    image: "/assets/img/projects/mpkreasi.webp",
  },
  {
    id: 5,
    title: "Inti Ragam Perkasa Website",
    image: "/assets/img/projects/intrakasa.webp",
  },
];

export default function ProjectsPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const isLeft = index % 2 === 0; // Kiri-kanan berdasarkan grid
          const fromX = isLeft ? -100 : 100;

          gsap.fromTo(
            card,
            { x: fromX, opacity: 0, scale: 0.95 },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.6, // Delay bergantian
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <div className="w-full bg-zinc-800 text-white py-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-amber-100 mb-12 text-center">
            All Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-block mt-2 text-amber-100 hover:text-amber-200 underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTAContact />
      <Footer />
    </>
  );
}
