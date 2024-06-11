import React from "react";

// components
import PortfolioRatioComponent from "../../components/home/PortfolioRatioComponent";
import RecommendComponent from "../../components/home/RecommendComponent";
import TopBar from "../../components/common/topBar/TopBar";
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";

export default function PortfolioDetailPage() {
  return (
    <div className="bg-white">
      <TopBar type={3} />
      <RecommendComponent type={1} />
      <div className="px-5">
        <PortfolioRatioComponent stockRatio={17} bondRatio={56} />
        <div className="py-4 flex flex-col justify-center">
          <span className="text-[20px] font-bold">📌 종목 구성</span>
          <div className="flex flex-col gap-3 mx-3 my-5">
            <div className="flex items-center gap-2">
              <div className="bg-main_yellow w-[24px] h-[24px]" />
              <span className="font-bold">주식</span>
            </div>
            <PortfolioCompositionComponent
              title="어쩌구저쩌구"
              price="1,000,000"
              type="stock"
              ratio={82}
            />
          </div>
          <div className="flex flex-col gap-3 mx-3 my-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#FF9371] w-[24px] h-[24px]" />
              <span className="font-bold">채권</span>
            </div>
            <PortfolioCompositionComponent
              title="어쩌구저쩌구z"
              price="900,000"
              type="bond"
              ratio={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
