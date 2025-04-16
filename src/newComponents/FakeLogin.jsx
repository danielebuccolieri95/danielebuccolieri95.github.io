import React, { useState } from 'react';

function FakeLogin({ onLogin }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleLoginClick = () => {
    if (firstName && lastName && age) {
      const userId = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${age}`;
      onLogin(userId);
      localStorage.setItem("user_id", userId);
      localStorage.setItem("name", firstName);
      localStorage.setItem("surname", lastName);

      setFirstName('');
      setLastName('');
      setAge('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gradient-to-br from-pink-200 to-blue-200 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Benvenuto!</h2>
        <p className="text-center text-gray-600 mb-4">Scegli il tuo nome, cognome ed età per partecipare al Gender Reveal!</p>

        <input
          type="text"
          placeholder="Nome"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border border-pink-300 p-4 mb-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />

        <input
          type="text"
          placeholder="Cognome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border border-pink-300 p-4 mb-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />

        <input
          type="number"
          placeholder="Età"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border border-pink-300 p-4 mb-6 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />

        <button
          onClick={handleLoginClick}
          className="bg-pink-500 text-white w-full p-4 rounded-lg shadow-md hover:bg-pink-600 transition duration-200"
        >
          Partecipa al Reveal!
        </button>
      </div>
    </div>
  );
}

export default FakeLogin;
