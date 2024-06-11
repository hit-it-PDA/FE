import React from "react";

// components
import DoughnutChartComponent from "../chart/DoughnutChartComponent";

export default function PortfolioCompositionComponent({
  title,
  price,
  type,
  ratio,
}) {
  return (
    <div
      className={`${
        type === "stock" ? "bg-[#FFF9E6]" : "bg-[#FFDFD5]"
      } flex items-center justify-between rounded-[25px] w-full h-[13vh] px-5 py-3`}
    >
      <div className="flex flex-col">
        <span className="font-bold">{title}</span>
        <span>{price}원</span>
      </div>
      <DoughnutChartComponent type={type} ratio={ratio} />
    </div>
  );
}
