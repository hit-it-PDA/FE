import React from "react";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export default function FundChartComponent({ type, ratio, className }) {
  const defaultColors = [
    "#FFFFFF",
    "#F0F4FF",
    "#E4ECFF",
    "#CCD8FF",
    "#B3C5FF",
    "#98B1FF",
    "#6A8CFF",
  ]; // 기본 색상 배열
  const backgroundColors = ratio.map(
    (_, index) => defaultColors[index % defaultColors.length]
  );

  const data = {
    labels: ["주식", "채권"],
    datasets: [
      {
        label: "test",
        data: [...ratio, 100 - ratio.reduce((a, b) => a + b, 0)],
        backgroundColor: backgroundColors,
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
