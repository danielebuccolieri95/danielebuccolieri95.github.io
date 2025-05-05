import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Daniele Buccolieri",
    time: "6 mesi fa",
    rating: 5,
    text: "Eccezionale! Uno dei migliori circoli a Roma.",
  },
  {
    name: "Vincenzo Carpenzano",
    time: "6 mesi fa",
    rating: 5,
    text: "Campi coperti in buono stato e con buona visibilità. Organizzazione perfetta grazie a Lino che conosce tutti e organizza partite.",
  },
  {
    name: "Federico Gentile",
    time: "6 mesi fa",
    rating: 5,
    text: "Anche non abitando vicino al circolo, per me è il mio punto di riferimento padelistico.",
  },
  {
    name: "Davide Pasquini",
    time: "6 mesi fa",
    rating: 5,
    text: "Campi perfetti con un’ottima illuminazione e tutti al coperto. Massima disponibilità da parte del circolo con tornei per tutti.",
  },
  {
    name: "Simone Marzoli",
    time: "6 mesi fa",
    rating: 5,
    text: "Al Black ci si diverte sempre: campi buoni, chat e partite di livello, tornei ben organizzati. Clima tranquillo e rilassato.",
  },
  {
    name: "Mirko Bornivelli",
    time: "6 mesi fa",
    rating: 5,
    text: "5 campi indoor e 1 outdoor padel, 1 outdoor pickleball. Chat ben suddivise e tornei settimanali per ogni livello.",
  },
  {
    name: "Antonio Rattà",
    time: "6 mesi fa",
    rating: 5,
    text: "Struttura bellissima! Campi grandi, puliti e organizzati. Staff gentile e disponibile. Tornei ben gestiti.",
  },
  {
    name: "Kekko 83",
    time: "6 mesi fa",
    rating: 5,
    text: "Campi nuovi ma la differenza la fa la gestione di Lino e il team. Clima familiare e ben organizzato. Bravi!",
  },
  {
    name: "Claudio Marangoni",
    time: "6 mesi fa",
    rating: 5,
    text: "Il miglior circolo di padel di Roma sud-est, frequentarlo è come sentirsi a casa, il grande valore aggiunto è chi lo gestisce che ci mette passione e cuore e si vede!",
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-20 px-4 sm:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center text-white uppercase tracking-wide">
          Le vostre parole, la nostra forza
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-2xl border border-neutral-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-white/20"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400">
                  {review.name}
                </h3>
                <span className="text-xs text-gray-400">{review.time}</span>
              </div>
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
