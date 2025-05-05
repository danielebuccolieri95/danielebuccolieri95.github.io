import React from "react";
import logo from "../assets/logo.png";
const ChiSiamo = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Testo */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Chi Siamo
          </h2>
          <p className="text-gray-300 mb-6">
            Black Padel è più di un circolo: è una community di sportivi, amici
            e appassionati. Il nostro obiettivo? Offrire un’esperienza
            indimenticabile in un ambiente moderno, professionale e carico di
            energia.
          </p>
          <p className="text-gray-400">
            Dal 2023 siamo il punto di riferimento per chi vuole giocare,
            allenarsi e divertirsi in un contesto di qualità, con campi
            all’avanguardia e staff altamente qualificato.
          </p>
        </div>

        {/* Immagine */}
        <div className="flex-1">
          <img
            src={logo}
            alt="Team Black Padel"
            className="rounded-2xl shadow-lg w-[full] h-[300px] md:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
