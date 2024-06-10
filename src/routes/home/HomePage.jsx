import React from "react";
import { useState } from "react";

// icons
import downArrow from "../../assets/icons/downArrow.svg";

// components
import TopBar from "../../components/common/topBar/TopBar";
import RecommendComponent from "../../components/common/home/RecommendComponent";
import Tab from "../../components/common/home/TabComponent";
import RobotAnalyzing from "../../components/common/home/RobotAnalyzing";

export default function HomePage() {
  const [isSelected, setSelected] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
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
          {/** 로그인 O, 투자 성향 진단 테스트 X -> 투자 성향 진단 테스트 버튼 */}
          {isLogin && !isTestFinished ? (
            <div className="w-full pt-2 flex flex-row justify-center items-center">
              <div className="w-11/12 flex gap-5 justify-center items-center">
                <div className="text-[12px] whitespace-pre-line text-[#868686]">
                  <span className="font-bold">
                    투자 성향 진단 테스트를 진행
                  </span>
                  하면{"\n"}
                  <span className="font-bold">초개인화 포트폴리오를 추천</span>
                  받을 수 있어요!
                </div>
                <button className="bg-main_yellow rounded-[20px] box-content px-5 py-1 ml-2 text-[10px]">
                  테스트 하러가기
                </button>
              </div>
            </div>
          ) : null}
          {/** 테마 필터링 버튼 */}
          <div className="flex flex-row justify-between items-center py-2 px-[7vw] h-[5vh] box-content">
            {isSelected ? (
              <span className="font-bold">
                Hit it! 개인화 포트폴리오 추천 상품
              </span>
            ) : (
              <>
                <span className="font-bold">Hit it! 테마별 상품</span>
                <div className="pl-5 pr-3 border-[3px] rounded-[20px] border-main_yellow flex items-center justify-between gap-3 hover:cursor-pointer">
                  테마 1
                  <img src={downArrow} />
                </div>
              </>
            )}
          </div>
          {/** 포트폴리오 추천 리스트 */}
          {isSelected ? (
            isLogin ? (
              <div className="flex flex-col justify-center items-center gap-5">
                <RecommendComponent />
                <RecommendComponent />
                <RecommendComponent />
                <RecommendComponent />
                <RecommendComponent />
              </div>
            ) : (
              <div className="relative">
                <div className="flex h-full flex-col justify-center items-center gap-5 blur">
                  <RecommendComponent />
                  <RecommendComponent />
                </div>
                <div className="absolute inset-0 flex justify-center items-center flex-col text-[20px]">
                  로그인 후 이용 가능합니다.
                  <div className="bg-main_yellow px-10 py-2 rounded-[20px] mt-5 text-[15px]">
                    로그인하기
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col justify-center items-center gap-5">
              <RecommendComponent />
              <RecommendComponent />
              <RecommendComponent />
              <RecommendComponent />
              <RecommendComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
