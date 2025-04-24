import { useState, useEffect } from "react";
import { UploadForm } from "./newComponents/UploadForm";
import { Gallery } from "./newComponents/Gallery";
import GenderSelection from "./newComponents/GenderSelection";
import FakeLogin from "./newComponents/FakeLogin";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleUpload = () => {
    setRefresh(!refresh);
  };

  const handleLogin = (id) => {
    setUserId(id);
    localStorage.setItem("user_id", id);
  };

  return (
    <div
      className="min-h-screen py-10 flex justify-center items-center font-dancing"
      style={{
        background: "linear-gradient(135deg, #fddde6, #dceaff)",
      }}
    >
      <div className="bg-white w-[90%] max-w-4xl p-6 rounded-xl shadow-xl">
        {userId ? (
          <>
            <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
              IL MIO &nbsp;
              <span className="text-pink-600">GENDER</span>&nbsp;
              <span className="text-blue-400">REVEAL</span> ❤️
            </h1>
            <GenderSelection />
            <UploadForm onUpload={handleUpload} />
            <Gallery key={refresh} />
          </>
        ) : (
          <FakeLogin onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
}
