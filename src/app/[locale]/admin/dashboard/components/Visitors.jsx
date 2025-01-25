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

export default function Visitors({ dataa }) {
  const days = ["05", "10", "15", "20", "25", "31"];

  const visitorsWithDates = dataa.visitors.map((visitor) => ({
    date: new Date(visitor.date),
    visits: visitor.visits,
  }));

  const visits = days.map((day, index) => {
    const startDate =
      index === 0 ? null : new Date(`2025-01-${days[index - 1]}`);
    const endDate = new Date(`2025-01-${day}`);

    const filteredVisitors = visitorsWithDates.filter((visitor) => {
      return (
        (!startDate || visitor.date > startDate) && visitor.date <= endDate
      );
    });
    return filteredVisitors.reduce((sum, visitor) => sum + visitor.visits, 0);
  });

  const VisitorsNumber = dataa.visitors.reduce(
    (total, visitor) => total + visitor.visits,
    0
  );

  const totalPeople = dataa.totalClients + dataa.totalArtisans;
  const VisitorsPercentage =
    totalPeople === 0 ? 0 : (VisitorsNumber / totalPeople) * 100;

  const data = {
    labels: days,
    datasets: [
      {
        label: "Visitors",
        data: visits,
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

  return (
    <div className="border border-gray-300 rounded-lg bg-white sm:w-[500px] w-full p-4 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 ease-in-out duration-700">
      <h3 className="text-lg font-medium text-[#787878] mb-2">This month</h3>
      <p className="text-2xl font-bold text-black">
        + {VisitorsNumber} Membres{" "}
        <span className="text-sm text-green-500 font-semibold">
          +{VisitorsPercentage.toFixed(2)}%
        </span>
      </p>
      <div className="h-[200px] w-full flex items-center justify-center">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
