import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import Button from "../../components/Button";
import { useEffect } from "react";
import RobotAnalyzing from "../../components/home/RobotAnalyzing";

export default function InvestTestResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const testDatas = location.state.testDatas;
  const score = location.state.score;
  console.log(score);
  console.log(testDatas);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  const renderPage = () => {
    if (score < 40) {
      return <InvestResultGreen testDatas={testDatas} />;
    } else if (score >= 40 && score < 80) {
      return <InvestResultBlue testDatas={testDatas} />;
    } else if (score >= 80 && score < 120) {
      return <InvestResultOrange testDatas={testDatas} />;
    } else {
      return <InvestResultRed testDatas={testDatas} />;
    }
  };
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <RobotAnalyzing>000님의 투자 성향을 분석 중</RobotAnalyzing>
        </div>
      ) : (
        renderPage()
      )}
    </div>
  );
}
