import React from "react";

import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

export default function DoughnutChartComponent({ type, ratio }) {
  const data = {
    labels: ["주식", "채권"],
    datasets: [
      {
        label: "test",
        data: [ratio, 100 - ratio],
        backgroundColor: [
          type === "stock"
            ? "rgba(255, 222, 113, 1)"
            : "rgba(255, 170, 143, 1)",
          "rgba(206, 206, 206, 0.7)",
        ],
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
      // maintainAspectRatio: false,
      // plugins: {
      //   legend: {
      //     labels: {
      //       display: false,
      //       // This more specific font property overrides the global property
      //       font: {
      //         size: 0,
      //       },
      //     },
      //   },
      // tooltip: {
      //   titleFont: {
      //     size: 12,
      //   },
      //   bodyFont: {
      //     size: 12,
      //   },
      //   footerFont: {
      //     // size: 10, // there is no footer by default
      //   },
      //   callbacks: {
      //     title: () => {
      //       return "title이랑 label 위치 변경!";
      //     },
      //     label: (item) => {
      //       const count = item.dataset.data[item.dataIndex];
      //       const label = item.label;
      //       const info = ` ${label} : ${count}`;
      //       return info;
      //     },
      //   },
      // },
    },
  };

  return (
    <div className="w-[30vw] h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
}
