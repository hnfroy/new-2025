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
    slug: "ki-komunal-website",
    title: "KI Komunal Website",
    image: "/assets/img/projects/kikomunal.webp",
    url: "https://kikomunal-indonesia.dgip.go.id/",
    description: "Deskripsi untuk KI Komunal Website...",
  },
  {
    slug: "pengaduan-webapp",
    title: "Pengaduan WebApp",
    image: "/assets/img/projects/pengaduan.webp",
    url: "https://pengaduan.dgip.go.id",
    description: "Deskripsi untuk Pengaduan WebApp...",
  },
  {
    slug: "hakcipta-webapp",
    title: "Hakcipta WebApp",
    image: "/assets/img/projects/ehakcipta.webp",
    url: "https://e-hakcipta.dgip.go.id",
    description: "Deskripsi untuk Hakcipta WebApp...",
  },
  {
    slug: "fumira-cipta-multidistribusindo-website",
    title: "Fumira Cipta Multidistribusindo Website",
    image: "/assets/img/projects/prj-shop.webp",
    url: "https://mpkreasi.com",
    description: "Deskripsi untuk Fumira Cipta Multidistribusindo...",
  },
  {
    slug: "indonesia-transfer-knowledge",
    title: "Indonesia Transfer Knowledge Website",
    image: "/assets/img/projects/prj-itk.webp",
    url: "https://mpkreasi.com",
    description: "Deskripsi untuk Indonesia Transfer Knowledge...",
  },
  {
    slug: "muda-penuh-kreasi-website",
    title: "Muda Penuh Kreasi Website",
    image: "/assets/img/projects/mpkreasi.webp",
    url: "https://mpkreasi.com",
    description: "Deskripsi untuk Muda Penuh Kreasi...",
  },
  {
    slug: "logip-website",
    title: "Logip Marketing Agency Website",
    image: "/assets/img/projects/case-marketing.webp",
    description: "Deskripsi untuk Logip Marketing Agency...",
  },
  {
    slug: "inti-ragam-perkasa-website",
    title: "Inti Ragam Perkasa Website",
    image: "/assets/img/projects/intrakasa.webp",
    url: "https://intrakasa.com",
    description: "Deskripsi untuk Inti Ragam Perkasa...",
  },
  {
    slug: "company-profile-website",
    title: "Company Profile Website",
    image: "/assets/img/projects/case-compro.webp",
    description: "Deskripsi untuk Company Profile...",
  },
  {
    slug: "asean-japan-website",
    title: "50th Asean Japan Website",
    image: "/assets/img/projects/prj-asean.webp",
    description: "Deskripsi untuk 50th Asean Japan...",
  },
  {
    slug: "it-consultant-website",
    title: "IT Consultant Website",
    image: "/assets/img/projects/case-itconsultant.webp",
    description: "Deskripsi untuk IT Consultant...",
  },
  {
    slug: "sorot-tajam-website",
    title: "Sorot Tajam Website",
    image: "/assets/img/projects/prj-sorottajam.webp",
    url: "https://intrakasa.com",
    description: "Deskripsi untuk Sorot Tajam...",
  },
  {
    slug: "music-app",
    title: "Sync Music App",
    image: "/assets/img/projects/music-app.webp",
    // url: "https://intrakasa.com",
    description: "Deskripsi untuk Sync Music App...",
  },
];

export default function ProjectsPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const isLeftColumn = index % 2 === 0;
        const fromX = isLeftColumn ? "-100px" : "100px";

        gsap.fromTo(
          card,
          {
            x: fromX,
            opacity: 0,
            scale: 0.95,
          },
          {
            x: "0px",
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
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
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h2>

                  <div className="flex gap-3 flex-wrap">
                    {project.slug && (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="px-4 py-2 bg-amber-100 text-zinc-800 rounded hover:bg-amber-200 transition"
                      >
                        Detail
                      </Link>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-amber-100 text-amber-100 rounded hover:bg-amber-100 hover:text-zinc-900 transition"
                      >
                        Visit Site
                      </a>
                    )}
                  </div>
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
