import React, { useState } from "react";
import { useEffect } from "react";
import ProgressBar from "../../../components/ProgressBar";

// logo
import logo from "../../../assets/logos/logo.svg";

export default function DiagnosisResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="flex flex-col items-center px-5 py-5">
      {isLoading ? (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center">
          <img src={logo} className="animate-bounce" />
          <span className="whitespace-pre-line text-center mt-5 text-[18px]">
            <span className="text-[#375AFF] font-bold">
              노후준비정도를 종합적으로 분석 중
            </span>
            이에요! <br /> 조금만 기다려주세요 :)
          </span>
        </div>
      ) : (
        <div className="w-[90vw]">
          <div className="pt-2 pb-4 mb-4 border-b">
            <span className="text-[25px] font-bold ml-2">재무 진단 결과</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ManageTypeComponent
              type="노후 준비가 충분한 사적 자산형"
              detail={`준비된 소득이 필요 생활비를 충당할 수 있고,
              사적 자산 비율이 50% 이상인 유형이에요.`}
            />
            <div className="flex flex-col w-full mt-[2vh]">
              <AssetAgeAnalysisComponent
                age={64}
                detail={`자산 수명 61세는 평균수명(90.7세)보다 14년 짧아요.
              월 생활비를 204만원으로 낮추면 자산수명과 기대수명이 일치해요.`}
              />
              <div className="flex flex-col w-full gap-2 mt-[5vh]">
                <AssetAnalysisComponent
                  category="예상 노후생활비"
                  detail="177만원보다 23만원 많음"
                  state="여유"
                />
                <AssetAnalysisComponent
                  category="준비된 소득"
                  detail="177만원 중 70%"
                  state="여유"
                />
                <AssetAnalysisComponent
                  category="공적 연금"
                  detail="20대 평균보다 높음"
                  state="여유"
                />
                <AssetAnalysisComponent
                  category="퇴직 연금"
                  detail="20대 평균보다 낮음"
                  state="부족"
                />
                <AssetAnalysisComponent
                  category="개인 연금"
                  detail="20대 평균보다 높음"
                  state="여유"
                />
                <AssetAnalysisComponent
                  category="부동산 자산"
                  detail="20대 평균보다 낮음"
                  state="부족"
                />
                <AssetAnalysisComponent
                  category="소득 활동"
                  detail="20대 평균보다 높음"
                  state="여유"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const ManageTypeComponent = ({ type, detail }) => {
  return (
    <>
      <span className="text-[20px] text-[#375AFF] font-bold relative z-10">
        <div className="bg-[#D1D9FF] w-5/12 h-[2.5vh] opacity-50 absolute -right-1.5 -bottom-1 -z-10" />
        {type}
      </span>
      <span className="text-[13px] text-center whitespace-pre-line">
        {detail}
      </span>
    </>
  );
};

const AssetAgeAnalysisComponent = ({ age, detail }) => {
  return (
    <>
      <span className="text-[18px] font-bold">📌 자산 수명 분석 </span>
      <div className="flex w-full ml-2">
        <div
          style={{ width: `${(64 / 90.7) * 100}%` }}
          className="h-full flex justify-end text-[12px] font-bold"
        >
          {age}세
        </div>
        {/* <div className="flex-1 h-full flex justify-end text-[12px]">
                81세
              </div> */}
      </div>
      <ProgressBar page={age} totalPages={90.7} className={"h-full"} />
      <span className="mt-2 text-[13px] whitespace-pre-line">{detail}</span>
    </>
  );
};

const AssetAnalysisComponent = ({ category, detail, state }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-[#ADB3B7] w-4/12 font-bold">{category}</span>
      <span className="text-[13px]">{detail}</span>
      <span
        className={`font-bold ${
          state === "여유" ? "text-[#000AFF]" : "text-[#FF0000]"
        }`}
      >
        {state}
      </span>
    </div>
  );
};
