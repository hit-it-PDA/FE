import React from "react";

export default function PortfolioRatioComponent({ stockRatio, bondRatio }) {
  return (
    <div className="h-15vh py-4 flex flex-col justify-center">
      <span className="text-[20px] font-bold mb-5">📌 상품 비중</span>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center">
          <div className="w-[15vw] flex justify-center font-bold">주식</div>
          <div className="w-[50vw] h-[2.5vh] bg-[#F0F0F0] mx-[5vw]">
            <div
              className="h-full bg-main_yellow"
              style={{ width: `${stockRatio}%` }}
            />
          </div>
          <div className="w-[15vw] flex justify-center">{stockRatio}%</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[15vw] flex justify-center font-bold">채권</div>
          <div className="w-[50vw] h-[2.5vh] bg-[#F0F0F0] mx-[5vw]">
            <div
              className="h-full bg-[#FF9371]"
              style={{ width: `${bondRatio}%` }}
            />
          </div>
          <div className="w-[15vw] flex justify-center">{bondRatio}%</div>
        </div>
      </div>
    </div>
  );
}
