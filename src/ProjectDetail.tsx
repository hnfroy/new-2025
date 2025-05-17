import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import projects from "./projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-zinc-900 text-white p-10"
    >
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4"
      />
      <p className="text-lg">{project.description}</p>

      <button
        onClick={() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            y: -50,
            duration: 0.6,
            onComplete: () => navigate("/"),
          });
        }}
        className="mt-10 px-4 py-2 bg-amber-500 rounded text-black"
      >
        ← Kembali
      </button>
    </div>
  );
}
