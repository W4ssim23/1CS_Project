"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const VisitorsNumber = 740.0;
const VisitorsPercentage = 1.75;

const data = {
  labels: ["00", "08", "12", "14", "16", "18"],
  datasets: [
    {
      label: "Visitors",
      data: [2, 5, 3, 4, 6, 1],
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;
        if (!chartArea) {
          return null;
        }
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top
        );
        gradient.addColorStop(0, "#C4E0F3");
        gradient.addColorStop(1, "#4A90E2");
        return gradient;
      },
      borderRadius: 10,
      barPercentage: 0.5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 12 }, color: "#888" },
    },
    y: {
      display: false,
    },
  },
};

export default function Visitors() {
  return (
    <div className="border border-gray-300 rounded-lg bg-white w-[500px] p-4 shadow-md hover:shadow-2xl transition-shadow hover:-translate-y-1 ease-in-out duration-700">
      <h3 className="text-lg font-medium text-[#787878] mb-2">Aujourd'hui</h3>
      <p className="text-2xl font-bold text-black">
        {VisitorsNumber} Visiteurs{" "}
        <span className="text-sm text-green-500 font-semibold">
          +{VisitorsPercentage}%
        </span>
      </p>
      <div className="h-[200px] w-full flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
