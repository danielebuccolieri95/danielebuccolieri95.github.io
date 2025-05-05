import React from "react";

const servizi = [
  {
    title: "Prenotazione Campi",
    icon: "🎾",
    description:
      "Prenota in pochi clic il tuo campo preferito, anche in notturna.",
  },
  {
    title: "Lezioni & Corsi",
    icon: "🧑‍🏫",
    description:
      "Allenamenti personalizzati con maestri qualificati per adulti e bambini.",
  },
  {
    title: "Tornei & Eventi",
    icon: "🏆",
    description:
      "Competizioni settimanali e tornei a tema per tutti i livelli.",
  },
  {
    title: "Shop & Merchandising",
    icon: "🛍️",
    description:
      "Abbigliamento tecnico, accessori e gadget firmati Black Padel.",
  },
  {
    title: "Area Relax & Bar",
    icon: "☕",
    description:
      "Rilassati prima o dopo il match nella nostra zona lounge con bar.",
  },
  {
    title: "Noleggio Attrezzatura",
    icon: "🎒",
    description:
      "Racchette e palline sempre disponibili per ogni livello di gioco.",
  },
];

const ServiziOfferti = () => {
  return (
    <section id="servizi" className="text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          I Nostri Servizi
        </h2>
        <p className="text-gray-400">
          Tutto quello che serve per vivere il padel al massimo.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {servizi.map((servizio, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-6 rounded-2xl shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{servizio.icon}</div>
            <h3 className="text-xl font-bold mb-2">{servizio.title}</h3>
            <p className="text-gray-400 text-sm">{servizio.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiziOfferti;
