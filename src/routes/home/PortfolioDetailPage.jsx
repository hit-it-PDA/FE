import React from "react";
import FundChartComponent from "../../components/common/chart/FundChartComponent";
import TopBar from "../../components/common/topBar/TopBar";

export default function PortfolioDetailPage() {
  return (
    <div>
      <TopBar type={3} />
      <div className="w-[88vw] mx-auto flex flex-col items-center">
        <span className="w-[88vw] text-[23px] font-bold">📌 펀드 구성</span>
        <FundChartComponent
          ratio={[20, 10, 10, 10, 10, 20, 20]}
          className={"w-[60vw] h-[30vh] mt-[2vh]"}
        />
      </div>
    </div>
  );
}
