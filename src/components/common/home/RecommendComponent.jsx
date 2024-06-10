import React from "react";

const PortfolioRecommendComponent = () => {
  return (
    <div className="flex flex-col w-[70vw] h-[20vh] rounded-[10px] p-4 box-content shadow-lg">
      <div className="flex-1 mb-2">
        <div className="flex justify-between items-baseline">
          <span className="text-[20px] text-[#3B3B3B] font-bold ">
            스마트세이버
          </span>
          <span className="text-[13px] text-[#FF9900] font-bold">
            안정추구형
          </span>
        </div>
        <div className="text-[13px]">Hit It! 자산배분(국내상장ETF)</div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="text-[15px] flex justify-between items-center">
          <span>최소 가입 비용</span>
          <span>100만원</span>
        </div>
        <div className="text-[15px] flex justify-between items-center">
          <span>수익률</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[10px] text-[#616161]">3개월</span>
            <span className="text-[18px] font-bold text-[#FF3D00]">31.72%</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-around items-center">
        <div className="bg-main_yellow w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer">
          선택하기
        </div>
        <div className="bg-main_yellow w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer">
          자세히 보기
        </div>
      </div>
    </div>
  );
};

const RecommendComponent = React.memo(PortfolioRecommendComponent);

export default RecommendComponent;
