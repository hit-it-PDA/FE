import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRates } from "../../../lib/apis/manageApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChartComponent({ dates, values }) {
  const data = {
    labels: dates,
    datasets: [
      {
        label: "2024년 6월",
        data: values,
        backgroundColor: ["#375AFF"],
        borderWidth: 2,
        spanGaps: true,
        tension: 0.6,
        pointHoverBorderWidth: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          display: true,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <div className="w-full h-[30vh]">
      <Line data={data} options={options} />
    </div>
  );
}
