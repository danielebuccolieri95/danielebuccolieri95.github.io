import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Stato per immagine ingrandita

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from("media").list("", {
      limit: 100,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      console.error("Errore nel recupero file:", error.message);
      return;
    }

    const urls = await Promise.all(
      data
        .filter((file) => file.name.match(/\.(jpg|jpeg|png|gif|mp4)$/i))
        .map(async (file) => {
          const { data: publicUrl } = supabase.storage
            .from("media")
            .getPublicUrl(file.name);
          return publicUrl.publicUrl;
        })
    );

    setImages(urls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Funzione per aprire l'immagine in modalità fullscreen
  const openModal = (url) => {
    setSelectedImage(url);
  };

  // Funzione per chiudere la modale
  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!images.length)
    return (
      <div className="text-center py-10 text-pink-400 animate-pulse">
        Caricamento immagini...
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold text-pink-600 mb-6">
        GALLERIA CONDIVISA
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((url, index) => (
          <div
            key={index}
            className="w-full h-40 rounded-xl overflow-hidden shadow-lg border border-pink-200 hover:scale-105 transition"
            onClick={() => openModal(url)} // Aggiungi click per ingrandire l'immagine
          >
            {url.match(/\.mp4$/i) ? (
              <video
                src={url}
                className="w-full h-full object-cover"
                controls
              />
            ) : (
              <img
                src={url}
                alt={`img-${index}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal per l'immagine ingrandita */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <span
              className="absolute top-0 right-0 text-white text-3xl cursor-pointer p-2"
              onClick={closeModal}
            >
              ×
            </span>
            <img
              src={selectedImage}
              alt="Ingrandito"
              className="max-w-full max-h-[98vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
