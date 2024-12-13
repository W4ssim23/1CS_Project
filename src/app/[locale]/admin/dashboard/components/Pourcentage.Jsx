"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

// Register required Chart.js components
ChartJS.register(Tooltip, Legend, ArcElement);

export default function Pourcentage() {
  const data = [
    { name: "Artisans", value: 26.09, color: "#E91F63" },
    { name: "Clients", value: 73.91, color: "#73A4FF" },
  ];

  const totalUsers = 460;

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "83%",
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 font-sans flex flex-col gap-2 hover:shadow-2xl transition-shadow hover:-translate-y-1 ease-in-out duration-700">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-lg font-bold m-0">Pourcentage des utilisateurs</h3>
        <div
          title="Information about user percentages"
          className="cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            fill="#757575"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.88-13.76h1.76v1.76h-1.76V6.24zm0 3.52h1.76v7.04h-1.76V9.76z" />
          </svg>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-200" />

      <div className="flex items-center gap-4">
        <div className="flex-1 flex justify-center relative">
          <Pie data={chartData} options={options} width={100} height={150} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-2xl font-bold text-black">{totalUsers}</span>
          </div>
        </div>

        <div className="flex-1">
          {data.map((item) => (
            <div key={item.name} className="flex items-center mb-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 ml-2">{item.name}</span>
              <span className="text-sm text-gray-600 ml-2">
                {item.value.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
