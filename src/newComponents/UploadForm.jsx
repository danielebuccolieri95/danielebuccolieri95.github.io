import { useState } from "react";
import { supabase } from "../supabaseClient";
import { Upload, Loader, FileText, X } from "lucide-react"; // Aggiungi l'icona X per deselezionare il file

export function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("media").upload(fileName, file);

    setLoading(false);
    if (!error) {
      setFile(null);
      onUpload?.();
    } else {
      alert("Errore nel caricamento:", error.message);
    }
  };

  // Funzione per deselezionare il file
  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl border-2 border-dashed border-pink-300">
      <label className="flex flex-col items-center w-full cursor-pointer">
        <Upload className="w-10 h-10 text-pink-500 mb-2" />
        <p className="text-sm text-gray-600 text-center">
          Carica immagine o video
        </p>
        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>

      {/* Visualizzare il nome del file caricato con icona e testo in grassetto */}
      {file && (
        <div className="mt-2 flex items-center text-lg font-bold text-gray-800">
          <FileText className="w-5 h-5 mr-2 text-gray-600" />
          <p className="text-gray-800">{file.name}</p>
          {/* Aggiungi l'icona "X" per rimuovere il file */}
          <X
            className="w-5 h-5 ml-2 text-red-500 cursor-pointer"
            onClick={handleRemoveFile}
          />
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          className="mt-4 bg-gradient-to-br from-blue-400 via-pink-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
        >
          {loading ? <Loader className="animate-spin w-5 h-5" /> : "Carica"}
        </button>
      )}
    </div>
  );
}
