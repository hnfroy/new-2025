import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import CTAContact from "../../../components/CTAContact";

const allProjects = [
  {
    slug: "ki-komunal-website",
    title: "KI Komunal Website",
    image: "/assets/img/projects/kikomunal.webp",
    description: "Deskripsi untuk KI Komunal Website...",
  },
  {
    slug: "pengaduan-webapp",
    title: "Pengaduan WebApp",
    image: "/assets/img/projects/pengaduan.webp",
    description: "Deskripsi untuk Pengaduan WebApp...",
  },
  {
    slug: "hakcipta-webapp",
    title: "Hakcipta WebApp",
    image: "/assets/img/projects/ehakcipta.webp",
    description: "Deskripsi untuk Hakcipta WebApp...",
  },
  {
    slug: "muda-penuh-kreasi-website",
    title: "Muda Penuh Kreasi Website",
    image: "/assets/img/projects/mpkreasi.webp",
    description: "Deskripsi untuk Muda Penuh Kreasi...",
  },
  {
    slug: "inti-ragam-perkasa-website",
    title: "Inti Ragam Perkasa Website",
    image: "/assets/img/projects/intrakasa.webp",
    description: "Deskripsi untuk Inti Ragam Perkasa...",
  },
];

export default function DetailProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find((p) => p.slug === slug);

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
      <div className="project-detail bg-zinc-900 text-white py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            {project.title}
          </h1>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <p className="text-lg text-gray-300">{project.description}</p>
        </div>
      </div>
      <CTAContact />
      <Footer />
    </>
  );
}
