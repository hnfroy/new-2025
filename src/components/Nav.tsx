import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LogoH from "../../public/assets/img/logo-h.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          y: -50,
          opacity: 0,
          pointerEvents: "none",
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-zinc-800/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-2 md:mx-16 px-4 py-4 flex justify-between items-center relative">
        <img src={LogoH} alt="" className="w-12" />

        <button
          className="space-y-1.5 group relative z-50 bg-transparent border-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-amber-100 transform transition duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-amber-100 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-amber-100 transform transition duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col items-center justify-center text-white text-2xl gap-8 opacity-0 pointer-events-none z-40"
      >
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-100"
        >
          <h1>Home</h1>
        </a>
        <a
          href="/me"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-100"
        >
          <h1>Me</h1>
        </a>
        <a
          href="#work"
          onClick={() => setIsOpen(false)}
          className="hover:text-amber-100"
        >
          <h1>Work</h1>
        </a>
      </div>
    </nav>
  );
}
