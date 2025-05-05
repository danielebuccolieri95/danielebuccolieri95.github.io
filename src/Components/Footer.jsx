import { Instagram, Youtube } from "lucide-react";
import playtomic from "../assets/logo playtomic.png";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Colonna 1: Logo */}
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <img
            src={logo}
            alt="Playtomic"
            className="text-xl w-[30vh] font-bold"
          />
          {/* <img src={logo} className="text-xl font-bold">
            Black Padel
          </img> */}
        </div>

        {/* Colonna 2: Contatti */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contatti</h3>
          <p className="text-sm">Via Esempio 123, Roma</p>
          <p className="text-sm">Tel: +39 123 456 7890</p>
          <p className="text-sm">Email: info@blackpadel.it</p>
        </div>

        {/* Colonna 3: Sezioni */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Naviga</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm hover:underline transition-all duration-200 text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("campi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm hover:underline transition-all duration-200 text-left"
              >
                Scopri il Circolo
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("servizi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm hover:underline transition-all duration-200 text-left"
              >
                Servizi
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("eventi")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm hover:underline transition-all duration-200 text-left"
              >
                Eventi e Prezzi
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("contatti")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm hover:underline transition-all duration-200 text-left"
              >
                Contatti
              </button>
            </li>
          </ul>
        </div>

        {/* Colonna 4: Social */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white text-lg font-semibold">Seguici</h3>
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white hover:text-primary transition" />
            </a>
            <a
              href="https://www.playtomic.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={playtomic}
                alt="Playtomic"
                className="w-6 h-6 object-contain hover:scale-110 transition"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-white hover:text-primary transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} Black Padel. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
