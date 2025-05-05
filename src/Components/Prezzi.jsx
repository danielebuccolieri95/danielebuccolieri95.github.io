import React from "react";

const PrezziOrari = () => {
  return (
    <section className=" text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Prezzi & Orari</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse rounded-xl overflow-hidden">
          <thead className="bg-gray-800 text-yellow-400">
            <tr>
              <th className="px-[3vw] py-3">UTILIZZI</th>
              <th className="px-[3vw] py-3">ORARI</th>
              <th className="px-[3vw] py-3">PREZZI</th>
              <th className="px-[3vw] py-3">LEZIONI</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr className="border-t border-gray-700">
              <td className="px-[3vw] py-3">Daytime 15'</td>
              <td className="px-[3vw] py-3">diurno</td>
              <td className="px-[3vw] py-3">€ 8</td>
              <td className="px-[3vw] py-3">Individuale</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="px-[3vw] py-3 italic">Durata 18h</td>
              <td className="px-[3vw] py-3">serale</td>
              <td className="px-[3vw] py-3">€ 5</td>
              <td className="px-[3vw] py-3">Gruppo</td>
            </tr>
            <tr className="border-t border-gray-700">
              <td className="px-[3vw] py-3">Weekend 1h</td>
              <td className="px-[3vw] py-3">weekend</td>
              <td className="px-[3vw] py-3">—</td>
              <td className="px-[3vw] py-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PrezziOrari;
