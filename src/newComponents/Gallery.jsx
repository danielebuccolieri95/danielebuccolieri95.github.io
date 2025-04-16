import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion"; // Assicurati di avere framer-motion installato
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const openModal = (url) => setSelectedImage(url);
  const closeModal = () => setSelectedImage(null);

  if (!images.length)
    return (
      <div className="text-center py-10 text-pink-400 animate-pulse">
        Caricamento immagini...
      </div>
    );

  return (
    <div>
      <div className="max-w-6xl mx-auto p-4">
        <h3 className="text-center text-4xl font-bold text-pink-500 mb-8 tracking-widest">
          🎉GALLERIA CONDIVISA🎉
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-pink-200 hover:scale-105 hover:shadow-pink-300 transition duration-300 cursor-pointer"
              onClick={() => openModal(url)}
            >
              {url.match(/\.mp4$/i) ? (
                <div className="relative w-full h-40 overflow-hidden">
                  <video
                    src={url}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <span className="text-white text-4xl">▶</span>
                  </div>
                </div>
              ) : (
                <img
                  src={url}
                  alt={`img-${index}`}
                  className="w-full h-40 object-cover rounded-2xl"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative p-4">
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold"
                onClick={closeModal}
              >
                ×
              </button>
              {selectedImage.match(/\.mp4$/i) ? (
                <video
                  src={selectedImage}
                  controls
                  className="max-w-[90vw] max-h-[85vh] rounded-xl"
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Ingrandito"
                  className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-xl shadow-xl"
        >
          {images.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[400px] flex items-center justify-center bg-white rounded-xl overflow-hidden">
                {url.match(/\.mp4$/i) ? (
                  <video
                    src={url}
                    className="w-full h-full object-contain"
                    controls
                  />
                ) : (
                  <img
                    src={url}
                    alt={`img-${index}`}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
