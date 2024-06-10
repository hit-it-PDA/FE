import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import TopBar from "../../components/common/topBar/TopBar";

// icons
import downArrow from "../../assets/icons/downArrow.svg";

export default function HomePage() {
  const [isSelected, setSelected] = useState(0);
  return (
    <div>
      <TopBar type={0} />
      <div className="flex flex-col justify-center items-center w-screen">
        {/** 전체/개인화 탭 */}
        <div className="h-[5vh] w-11/12 bg-white flex flex-row items-center border-b">
          <Tab
            type={0}
            isSelected={isSelected === 0}
            setSelected={setSelected}
          />
          <Tab
            type={1}
            isSelected={isSelected === 1}
            setSelected={setSelected}
          />
        </div>
        <div className="flex flex-col w-full">
          {/** 테마 필터링 버튼 */}
          <div className="flex flex-row justify-between items-center py-2 px-[7vw] h-[5vh] box-content">
            <span className="font-bold">Hit it! 테마별 상품</span>
            {isSelected === 0 ? (
              <div className="pl-5 pr-3 border-[3px] rounded-[20px] border-[#FFDE71] flex items-center justify-between gap-3 hover:cursor-pointer">
                테마 1
                <img src={downArrow} />
              </div>
            ) : null}
          </div>
          {/** 포트폴리오 리스트 */}
          <div className="flex flex-col justify-center items-center gap-5">
            <PortfolioComponent />
            <PortfolioComponent />
            <PortfolioComponent />
            <PortfolioComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const Tab = React.memo(({ type, isSelected, setSelected }) => {
  return (
    <div className="h-full flex-1 flex justify-center items-center">
      <div
        className={`h-full w-10/12 flex justify-center items-center hover:cursor-pointer ${
          isSelected ? "border-b border-[#FFDE71] font-bold" : null
        }`}
        onClick={() => setSelected(type)}
      >
        {type ? "개인화" : "전체"}
      </div>
    </div>
  );
});

const PortfolioComponent = () => {
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
