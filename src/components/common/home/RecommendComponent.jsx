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
        <div className="bg-white text-[15px]">수익률</div>
        <div className="bg-white text-[15px]">수익률</div>
      </div>
      <div className="flex-1 flex justify-around items-center">
        <div className="bg-[#FFDE71] w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer">
          선택하기
        </div>
        <div className="bg-[#FFDE71] w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer">
          자세히 보기
        </div>
      </div>
    </div>
  );
};

const RecommendComponent = React.memo(PortfolioRecommendComponent);

export default RecommendComponent;
