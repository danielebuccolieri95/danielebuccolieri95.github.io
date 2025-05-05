import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import sfondo from "../assets/sfondo hero.png";
import pallina from "../assets/images-removebg-preview.png";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // chiudi il menu mobile dopo click
    }
  };
  const [showBalls, setShowBalls] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowBalls(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const ballPositions = [
    { top: "26%", left: "10%" },
    { top: "39%", right: "12%" },
    { top: "70%", left: "40%" },
    { top: "15%", right: "30%" },
    { top: "83%", left: "8%" },
    { top: "83%", right: "10%" },
  ];
  return (
    <header
      id="hero"
      className="relative h-screen bg-black text-white overflow-hidden"
    >
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black bg-opacity-70">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-widest text-white cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          BLACK<span className="text-lime-400">PADEL</span>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold uppercase">
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("campi")}
          >
            Chi siamo
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("servizi")}
          >
            Servizi
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("eventi")}
          >
            Eventi
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("contatti")}
          >
            Contatti
          </li>
        </ul>

        {/* CTA desktop */}
        <a
          href="https://playtomic.io/black-padel-club/4bbf487e-7c74-47bb-a862-78229b4b4f26?q=PADEL~2025-04-09~~~"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:block bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition">
            Prenota Ora
          </button>
        </a>

        {/* Mobile Menu Icon (burger) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-6 z-40 text-sm font-semibold uppercase md:hidden">
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            Home
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("campi")}
          >
            Chi siamo
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("servizi")}
          >
            Servizi
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("eventi")}
          >
            Eventi
          </li>
          <li
            className="hover:text-lime-400 cursor-pointer"
            onClick={() => scrollToSection("contatti")}
          >
            Contatti
          </li>
          <a
            href="https://playtomic.io/black-padel-club/4bbf487e-7c74-47bb-a862-78229b4b4f26?q=PADEL~2025-04-09~~~"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <button className="bg-lime-400 text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition">
              Prenota Ora
            </button>
          </a>
        </ul>
      )}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Benvenuto al <span className="text-lime-400">BLACK PADEL</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Dove il gioco diventa passione
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://playtomic.io/black-padel-club/4bbf487e-7c74-47bb-a862-78229b4b4f26?q=PADEL~2025-04-09~~~"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">
              Prenota un campo
            </button>
          </a>
          <button
            onClick={() => scrollToSection("campi")}
            className="border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
          >
            Scopri il circolo
          </button>
        </div>
      </div>

      {/* Background Overlay / Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={sfondo}
          alt="Padel action"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      {showBalls &&
        ballPositions.map((pos, idx) => (
          <motion.img
            key={idx}
            src={pallina}
            initial={{ y: -300, rotate: 0, opacity: 0 }}
            animate={{
              y: [-300, 0, -20, 0],
              rotate: 360,
              opacity: 1,
            }}
            transition={{
              delay: idx * 0.3,
              duration: 1.6,
              ease: "easeOut",
            }}
            className="w-16 h-16 absolute"
            style={pos}
          />
        ))}
    </header>
  );
};

export default HeroSection;
