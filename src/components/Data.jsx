import React from "react";
import plateformwise from "../provider/plateformwise.json"

const DataTable = () => {
  const { name, data,timestamp,total } = plateformwise.platform_wise;

  return (
    <div className="p-6">
      <div className="bg-indigo-500 text-white text-center flex flex-col gap-5 shadow-md shadow-indigo-500 rounded-lg  p-6">
        <h1 className="text-2xl font-semibold mb-4">{name}</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-400">Platform</th>
              <th className="py-2 px-4 border border-gray-400">No. of Trades</th>
              <th className="py-2 px-4 border border-gray-400">Value (Lakhs)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border border-gray-400">{entry.platform}</td>
                <td className="py-2 px-4 border border-gray-400">{entry.no_of_trades}</td>
                <td className="py-2 px-4 border border-gray-400">{entry.value_lakhs}</td>
              </tr>
            ))}
            <tr>
              <td className="py-2 px-4 border border-gray-400 font-semibold">Total</td>
              <td className="py-2 px-4 border border-gray-400 font-semibold">{total.no_of_trades}</td>
              <td className="py-2 px-4 border border-gray-400 font-semibold">{total.value_lakhs}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
