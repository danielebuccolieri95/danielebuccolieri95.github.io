import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Gallery() {
  const [images, setImages] = useState([]);

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

  if (!images.length)
    return (
      <div className="text-center py-10 text-pink-400 animate-pulse">
        Caricamento immagini...
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-center text-4xl font-bold text-pink-500 mb-8 tracking-widest">
        🎉 GALLERIA CONDIVISA 🎉
      </h2>

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
  );
}
