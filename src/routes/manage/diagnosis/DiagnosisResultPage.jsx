import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// components
import TopBar from "../../../components/common/topBar/TopBar";
import ProgressBar from "../../../components/ProgressBar";
import Button from "../../../components/Button";

// logo
import logo from "../../../assets/logos/logo.svg";

// characters
import good_yellow from "../../../assets/characters/good_yellow.svg";
import sad_white from "../../../assets/characters/sad_white.svg";
import sad_purple from "../../../assets/characters/sad_purple.svg";
import good_white from "../../../assets/characters/good_white.svg";
import good_navy from "../../../assets/characters/good_navy.svg";
import sad_white2 from "../../../assets/characters/sad_white2.svg";

// apis
import {
  getDiagnosisResult,
  getPreviousDiagnosisResult,
} from "../../../lib/apis/diagnosisApi";
import RobotAnalyzing from "../../../components/home/RobotAnalyzing";

export default function DiagnosisResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [noResult, setNoResult] = useState("");
  const [isPrevious, setIsPrevious] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const getResultData = async () => {
    const response = await getDiagnosisResult(location.state);
    setResult(response.response);
  };
  const getPreviousResultData = async () => {
    const response = await getPreviousDiagnosisResult();
    if (response.response) setResult(response.response);
    else {
      setResult(response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (location.state) getResultData();
    else getPreviousResultData();
    setInterval(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {isLoading ? null : <TopBar type={2} />}
      <div className="flex flex-col items-center">
        {isLoading ? (
          <RobotAnalyzing>
            {location.state
              ? "노후준비정도를 종합적으로 분석 중"
              : "데이터를 가져오는 중"}
          </RobotAnalyzing>
        ) : (
          <div className="w-[90vw]">
            <div className="flex items-baseline justify-between pb-4 mb-4 border-b">
              <span className="text-[25px] font-bold ml-2">재무 진단 결과</span>
              {result.created_at ? (
                <span className="text-[15px] text-[#717171] ml-2">
                  {result?.created_at.slice(0, 10)}
                </span>
              ) : null}
            </div>
            {result.success ? (
              <div className="flex flex-col items-center gap-3">
                <ManageTypeComponent
                  level={result?.type[0]}
                  type={result?.type[1]}
                  detail={result?.type[2]}
                />
                <div className="flex flex-col w-full gap-2 mt-[2vh]">
                  <AssetAnalysisComponent
                    category="예상 노후생활비"
                    detail={result?.monthly_living_expenses[1]}
                    state={result?.monthly_living_expenses[0]}
                  />
                  <AssetAnalysisComponent
                    category="공적 연금"
                    state={result?.expected_national_pension}
                  />
                  <AssetAnalysisComponent
                    category="금융 자산"
                    state={result?.total_financial_assets}
                  />
                  <AssetAnalysisComponent
                    category="부동산 자산"
                    state={result?.total_real_estate_value}
                  />
                  <AssetAnalysisComponent
                    category="소득 활동"
                    state={result?.career_effort_score}
                  />
                </div>
                <div className="flex flex-col w-full mt-[2vh]">
                  <AssetAgeAnalysisComponent
                    asset_life={result?.asset_life}
                    life_expectancy={result?.life_expectancy}
                    detail={`자산 수명 ${result?.asset_life}세는 평균수명(${
                      result?.life_expectancy
                    }세)보다 ${Math.abs(
                      result?.life_expectancy - result?.asset_life
                    )}년 ${
                      result?.life_expectancy - result?.asset_life > 0
                        ? "짧아요."
                        : "길어요."
                    }
                  ${
                    result?.life_expectancy - result?.asset_life > 0
                      ? `월 생활비를 ${result?.optimal_monthly_living_expenses}만원으로 낮추면 자산수명과 기대수명이 일치해요.`
                      : ""
                  }
                  `}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-[60vh]">
                <span>이전 기록이 없어요!</span>
                <p>노후 준비 종합 진단을 진행해주세요!</p>
              </div>
            )}

            <Button
              className="w-full mt-[5vh]"
              onClick={() => navigate("/manage")}
            >
              돌아가기
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

const ManageTypeComponent = ({ level, type, detail }) => {
  let imgSrc = "";
  switch (level) {
    case "1":
      imgSrc = sad_white;
      break;
    case "2":
      imgSrc = good_white;
      break;
    case "3":
      imgSrc = sad_purple;
      break;
    case "4":
      imgSrc = good_yellow;
      break;
    default:
      good_yellow;
      break;
  }
  return (
    <>
      <span className="text-[22px] text-[#375AFF] font-bold relative z-10">
        <div className="bg-[#D1D9FF] w-5/12 h-[2.5vh] opacity-50 absolute -right-1.5 -bottom-1 -z-10" />
        {type}
      </span>
      <img src={imgSrc} />
      <span className="text-[15px] text-[#717171] font-bold text-center whitespace-pre-line">
        {detail}
      </span>
    </>
  );
};

const AssetAgeAnalysisComponent = ({ asset_life, life_expectancy, detail }) => {
  return (
    <div className="flex flex-col">
      <span className="text-[20px] font-bold">📌 자산 수명 분석</span>
      <img
        src={life_expectancy - asset_life > 0 ? sad_white2 : good_navy}
        className="w-[40vw] self-center my-2"
      />
      <span
        className={`self-center font-bold ${
          life_expectancy - asset_life > 0 ? "text-[#FF0000]" : "text-main"
        } my-2`}
      >
        {life_expectancy - asset_life > 0
          ? "노후 자금 위험 상태"
          : "노후 자금 안전 상태"}
      </span>
      <div className="flex w-full ml-2">
        <div
          style={{
            width: `${(asset_life / life_expectancy) * 100}%`,
          }}
          className="h-full flex justify-end text-[12px] font-bold"
        >
          {asset_life}세
        </div>
        {/* <div className="flex-1 h-full flex justify-end text-[12px]">
                81세
              </div> */}
      </div>
      <ProgressBar
        page={asset_life > life_expectancy ? life_expectancy : asset_life}
        totalPages={life_expectancy}
        className={"h-full"}
      />
      <span className="mt-2 text-[15px] whitespace-pre-line">{detail}</span>
      <div className="flex flex-col text-[13px] text-[#616161] my-3">
        <span>※ 기대 수명 : 연령대별 평균 수명</span>
        <span>
          ※ 자산 수명 : 은퇴하고 모아둔 금융자산으로 생활할 수 있는 기간
        </span>
      </div>
    </div>
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
