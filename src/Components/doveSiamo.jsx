import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import playtomic from "../assets/logo playtomic.png";

const DoveSiamoConContatti = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contatti"
      className="bg-[#1A1A1A] text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold font-['Montserrat'] uppercase text-[#D4FF00] mb-8 text-center">
        Dove Siamo e Contattaci
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* Blocco Indirizzi e Social */}

        <div className="w-full md:w-1/2 text-lg font-['Open Sans'] text-center mb-8 md:mb-0">
          <p className="mb-4">
            📍 <strong>Indirizzo:</strong> Via del Padel, 123 - 00100 Roma
          </p>
          <p className="mb-4">
            📞 <strong>Telefono:</strong>{" "}
            <a
              href="tel:+390123456789"
              className="text-[#D4FF00] hover:underline"
            >
              0123 456 789
            </a>
          </p>
          <p className="mb-4">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:info@blackpadel.it"
              className="text-[#D4FF00] hover:underline"
            >
              info@blackpadel.it
            </a>
          </p>

          {/* Icone Social */}
          <div className="flex gap-6 mb-4 mt-4 justify-center">
            <a
              href="https://www.instagram.com/blackpadel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 hover:scale-110 transition"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#D4FF00"
                  d="M7.75 2C4.85 2 2.5 4.35 2.5 7.25v9.5C2.5 19.65 4.85 22 7.75 22h8.5c2.9 0 5.25-2.35 5.25-5.25v-9.5C21.5 4.35 19.15 2 16.25 2h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm6.25.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6.25 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z"
                />
              </svg>
            </a>
            <a
              href="https://playtomic.io/black-padel-club/4bbf487e-7c74-47bb-a862-78229b4b4f26?q=PADEL~2025-04-09~~~"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Playtomic"
            >
              <img
                src={playtomic}
                alt="Playtomic"
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
            <a
              href="https://wa.me/39123456789"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg
                className="w-6 h-6 hover:scale-110 transition"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#D4FF00"
                  d="M12 2a9.93 9.93 0 0 0-8.77 14.36L2 22l5.81-1.53A9.93 9.93 0 1 0 12 2zm5.47 14.28c-.25.7-1.44 1.38-2.02 1.47-.52.08-1.18.11-1.9-.12a8.46 8.46 0 0 1-3.7-2.5 8.83 8.83 0 0 1-1.77-3.45c-.1-.37-.1-.7.02-.97.15-.34.34-.48.59-.57.2-.07.47-.08.8.01.14.04.29.11.45.2l1.1.66c.15.09.26.2.35.33.12.17.12.31-.09.43-.15.15-.29.29-.43.44-.3.15-.61.31-.92.46-.12-.28-.21-.58-.29-.88-.34-.96-.7-1.89-.98-2.86-.18-.53-.34-.87-.58-1.35-.01-.04-.01-.09-.02-.13.54.21 1.1.48 1.67.69z"
                />
              </svg>
            </a>
          </div>
          <iframe
            title="Black Padel Location"
            className="w-full h-[38vh]  rounded-2xl border-4 border-[#D4FF00] shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.0258553894923!2d12.633086212249195!3d41.87079017112264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7d47e255958f%3A0xc3ecf5a86ce194e2!2sVia%20di%20Tor%20Bella%20Monaca%2C%20497%2C%2000133%20Roma%20RM!5e0!3m2!1sit!2sit!4v1744194565902!5m2!1sit!2sit"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Form Contattaci */}
        <div className="w-full md:w-1/2 text-lg font-['Open Sans'] flex flex-col items-center justify-center text-center bg-[#1A1A1A] py-10 px-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-[#D4FF00] mb-6">Contattaci</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5 w-full">
            <input
              type="text"
              name="user_name"
              placeholder="Il tuo nome"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#000] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="La tua email"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#000] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Il tuo messaggio"
              required
              className="w-full px-4 py-3 rounded-xl bg-[#000] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4FF00]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#D4FF00] text-black py-3 rounded-xl font-bold hover:bg-[#bfff00] transition transform hover:scale-105"
            >
              Invia messaggio
            </button>

            {sent && (
              <p className="text-center text-green-400 font-semibold pt-3">
                ✅ Messaggio inviato con successo!
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-12">
        {/* Mappa */}
        <div className="w-full md:w-1/2"></div>
      </div>
    </section>
  );
};

export default DoveSiamoConContatti;
