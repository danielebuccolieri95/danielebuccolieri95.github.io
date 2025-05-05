import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Importo il CSS di Slick
import "slick-carousel/slick/slick-theme.css"; // Importo il tema di Slick
import immagine from "../assets/sfondo hero.jpeg"; // Immagine esempio

const EventiTornei = () => {
  // Array delle immagini (puoi aggiungere le tue immagini reali qui)
  const immagini = [immagine, immagine, immagine, immagine, immagine, immagine];
  const imageTexts = [
    "Evento 1",
    "Evento 2",
    "Evento 3",
    "Evento 4",
    "Evento 5",
    "Evento 6",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Impostazioni per il carosello
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  // Funzione per aprire la modale con l'immagine ingrandita
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  // Funzione per chiudere la modale
  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <section id="eventi" className=" text-white px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-8 text-center">
        Eventi, Accademy & Tornei
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Carosello Immagini sinistra */}
        <div className="w-full flex justify-center">
          <Slider
            {...settings}
            className="w-[90%] md:w-[95%] cursor-pointer" // Rimpicciolito per mobile, più grande su desktop
          >
            {immagini.map((src, index) => (
              <div
                key={index}
                className="relative"
                onClick={() => openModal(src)} // Aggiunta la funzione per aprire la modale
              >
                <img
                  src={src}
                  alt={`Evento ${index + 1}`}
                  className="w-full h-auto rounded-xl object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black bg-opacity-50 p-2 rounded-md">
                  {imageTexts[activeIndex]}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Box con Insegnanti */}
        <div className="container">
          <div>
            <div className="content">
              <h2>PIER</h2>
              <span>INSEGNANTE</span>
            </div>
          </div>
          <div>
            <div className="content">
              <h2>CESAR</h2>
              <span>INSEGNANTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modale */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeModal}
        >
          <div
            className="relative p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-[-1em] right-7 text-white text-3xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Carosello nella modale */}
            <Slider
              {...settings}
              className="w-[85%] right-1.5 max-w-4xl mx-auto"
            >
              {immagini.map((image, idx) => (
                <div key={idx} className="w-full h-auto">
                  <img
                    src={image}
                    alt={`Carosello Ingrandito ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventiTornei;
