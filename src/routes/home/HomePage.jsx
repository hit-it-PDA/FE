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
          <div className="flex flex-row justify-between py-3 px-7">
            <span className="font-bold">Hit it! 테마별 상품</span>
            <div className="pl-5 pr-3 border-[3px] rounded-[20px] border-[#FFDE71] flex items-center justify-between gap-3 hover:cursor-pointer">
              테마 1
              <img src={downArrow} />
            </div>
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
