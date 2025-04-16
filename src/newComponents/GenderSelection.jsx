import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaMale, FaFemale } from "react-icons/fa"; // Importa le icone

const COLORS = ["#4299E1", "#ED64A6"]; // blu, rosa

const GenderSelection = () => {
  const [genderChoice, setGenderChoice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [users, setUsers] = useState([]);

  const getUserId = () => {
    let userId = localStorage.getItem("user_id");
    return userId;
  };

  const fetchChartData = async () => {
    const { data, error } = await supabase
      .from("gender_choices")
      .select("gender");

    if (error) {
      console.error("Errore caricamento dati:", error.message);
      return;
    }

    const counts = {
      maschio: 0,
      femmina: 0,
    };

    data.forEach((entry) => {
      if (entry.gender === "maschio") counts.maschio++;
      if (entry.gender === "femmina") counts.femmina++;
    });

    const total = counts.maschio + counts.femmina;

    setChartData([
      { name: "Maschio", value: total ? (counts.maschio / total) * 100 : 0 },
      { name: "Femmina", value: total ? (counts.femmina / total) * 100 : 0 },
    ]);
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("gender_choices")
      .select("name, surname, gender");

    if (error) {
      console.error("Errore nel recupero degli utenti:", error.message);
      return;
    }

    setUsers(data);
  };

  const saveChoice = async (gender) => {
    setLoading(true);
    const userId = getUserId();

    // Recupera nome e cognome dal localStorage
    const userName = localStorage.getItem("name");
    const userSurname = localStorage.getItem("surname");

    if (!userName || !userSurname) {
      setError("Nome o cognome non trovati nel localStorage.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("gender_choices")
      .select("gender")
      .eq("user_id", userId);

    if (error) {
      setError("Errore nel recupero della scelta.");
      setLoading(false);
      return;
    }

    if (data.length > 0) {
      setError("Hai già fatto una scelta.");
      setLoading(false);
      return;
    }

    const { error: insertError } = await supabase
      .from("gender_choices")
      .insert([
        { user_id: userId, gender, name: userName, surname: userSurname },
      ]);

    if (insertError) {
      setError("Errore durante il salvataggio.");
    } else {
      setGenderChoice(gender);
      fetchChartData();
      fetchUsers(); // Ricarica la lista degli utenti
    }

    setLoading(false);
  };

  useEffect(() => {
    const userId = getUserId();

    const checkChoice = async () => {
      const { data, error } = await supabase
        .from("gender_choices")
        .select("gender")
        .eq("user_id", userId);

      if (data.length > 0) {
        setGenderChoice(data[0].gender);
      }
    };

    checkChoice();
    fetchChartData();
    fetchUsers(); // Carica gli utenti all'avvio
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Per te sono...</h2>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => saveChoice("maschio")}
          className={`p-4 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            genderChoice ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!!genderChoice}
        >
          <FaMale className="inline-block mr-2" />
          Maschio
        </button>
        <button
          onClick={() => saveChoice("femmina")}
          className={`p-4 bg-pink-500 text-white rounded hover:bg-pink-600 ${
            genderChoice ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!!genderChoice}
        >
          <FaFemale className="inline-block mr-2" />
          Femmina
        </button>
      </div>

      {loading && <p className="text-blue-500 mt-2">Caricamento...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {genderChoice && (
        <p className="mb-4">
          Hai scelto: <strong>{genderChoice}</strong>
        </p>
      )}

      {chartData.length > 0 && (
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}

      <div className="mt-8 w-full max-w-4xl">
        <h3 className="text-xl font-bold mb-4">Lista delle Scelte</h3>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-gray-600">Nome</th>
              <th className="py-2 px-4 text-left text-gray-600">Cognome</th>
              <th className="py-2 px-4 text-left text-gray-600">Genere</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-2 px-4">{user.name.toUpperCase()}</td>
                  <td className="py-2 px-4">{user.surname.toUpperCase()}</td>
                  <td className="py-2 px-4">
                    {user.gender === "maschio" ? (
                      <FaMale className="text-blue-500 inline-block" />
                    ) : (
                      <FaFemale className="text-pink-500 inline-block" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="py-2 px-4 text-center text-gray-500">
                  Nessun dato disponibile
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenderSelection;
