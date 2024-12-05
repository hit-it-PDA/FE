import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export default function FundChartComponent({ type, ratio, className }) {
  const defaultColors = [
    "#EBEEFF",
    "#D8DDFF",
    "#C4CCFF",
    "#B0BBFF",
    "#9CAAFF",
    "#8899FF",
    "#7488FF",
    "#6077FF",
    "#4B66FF",
    "#3755FF",
  ];
  const BOND_COLORS = [
    "#FFE7E7",
    "#FFD9D9",
    "#FFCCCC",
    "#FFC1C1",
    "#FFB2B2",
    "#FFA3A3",
    "#FF8F8F",
    "#FF8585",
    "#FF7676",
  ];
  const backgroundColors = ratio.map(
    (_, index) => defaultColors[index % defaultColors.length]
  );
  const data = {
    labels: ["주식", "채권"],
    datasets: [
      {
        label: "test",
        data: [...ratio, 100 - ratio.reduce((a, b) => a + b, 0)],
        backgroundColor: type === "stock" ? backgroundColors : BOND_COLORS,
        borderWidth: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <>
      {className ? (
        <div className={`${className}`}>
          <Doughnut data={data} options={options} />
        </div>
      ) : (
        <div className="w-[30vw] h-full">
          <Doughnut data={data} options={options} />
        </div>
      )}
    </>
  );
}
