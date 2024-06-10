import React from "react";
import { useCallback } from "react";
import { useState } from "react";

// icons
import downArrow from "../../assets/icons/downArrow.svg";

// components
import TopBar from "../../components/common/topBar/TopBar";
import RecommendComponent from "../../components/common/home/RecommendComponent";
import Tab from "../../components/common/home/TabComponent";

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
          {/** 포트폴리오 추천 리스트 */}
          <div className="flex flex-col justify-center items-center gap-5">
            <RecommendComponent />
            <RecommendComponent />
            <RecommendComponent />
            <RecommendComponent />
            <RecommendComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
