import React from "react";

const partners = [
  {
    name: "Nike Padel",
    logo: "/logos/nike.svg",
    url: "https://www.nike.com/it/padel",
  },
  { name: "Head", logo: "/logos/head.svg", url: "https://www.head.com/" },
  {
    name: "Decathlon",
    logo: "/logos/decathlon.svg",
    url: "https://www.decathlon.it/",
  },
  {
    name: "Decathlon",
    logo: "/logos/decathlon.svg",
    url: "https://www.decathlon.it/",
  },

  // Aggiungi altri sponsor qui
];

const Partner = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold font-['Montserrat'] uppercase text-[#D4FF00] mb-12 text-center">
        Collaborazioni & Sponsor
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition hover:scale-110"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partner;
