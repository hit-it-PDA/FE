import React, { useState } from "react";
import { useEffect } from "react";

// components
import DoughnutChartComponent from "../common/chart/DoughnutChartComponent";
import FundChartComponent from "../common/chart/FundChartComponent";

export default function PortfolioCompositionComponent({ type, data }) {
  const [weight, setWeight] = useState([]);
  const STOCK_COLORS = [
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
    "#FE6969",
  ];
  useEffect(() => {
    setWeight(data.map((elem) => elem.weight));
  }, [data]);
  return (
    <>
      <div className="flex flex-col items-center gap-3 mt-3">
        {data.length > 0 ? (
          <>
            <FundChartComponent type={type} ratio={weight} />
            {data.map((elem, index) => (
              <div
                key={index}
                className="flex w-full h-[5vh] rounded-[30px]"
                style={{
                  backgroundColor: `${
                    type === "stock" ? STOCK_COLORS[index] : BOND_COLORS[index]
                  }`,
                }}
              >
                <div className="flex items-center justify-between w-full px-5">
                  <span className="flex-1 truncate mr-1 font-bold text-[15px]">
                    {elem.stock_name || elem.bond_name}
                  </span>
                  <span className="text-[13px]">{elem.weight}%</span>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex justify-center w-full">데이터가 없습니다.</div>
        )}
      </div>
    </>
  );
}
