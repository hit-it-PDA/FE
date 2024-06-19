import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import Button from "../../components/Button";
import { useEffect } from "react";
import RobotAnalyzing from "../../components/home/RobotAnalyzing";
import { postTestResult } from "../../lib/apis/testApi";
import useUserStore from "../../store/userStore";

export default function InvestTestResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");
  const location = useLocation();
  const { modifyType } = useUserStore();

  const testDatas = location.state.resultDatas;
  const score = location.state.score;
  const postDatas = location.state.testDatas;
  console.log(score);
  console.log(testDatas);
  console.log(postDatas);

  const fetchTestResult = async () => {
    try {
      const response = await postTestResult(postDatas);
      setResult(response.data.response);
      modifyType(response.data.response);
      console.log(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchTestResult();
  }, []);

  const renderPage = () => {
    switch (result) {
      case "안정형":
        return <InvestResultGreen testDatas={testDatas} />;
      case "안정추구형":
        return <InvestResultBlue testDatas={testDatas} />;
      case "위험중립형":
        return <InvestResultBlue testDatas={testDatas} />;
      case "적극투자형":
        return <InvestResultOrange testDatas={testDatas} />;
      case "공격투자형":
        return <InvestResultRed testDatas={testDatas} />;
    }
    // if (score < 40) {
    //   return <InvestResultGreen testDatas={testDatas} />;
    // } else if (score >= 40 && score < 80) {
    //   return <InvestResultBlue testDatas={testDatas} />;
    // } else if (score >= 80 && score < 120) {
    //   return <InvestResultOrange testDatas={testDatas} />;
    // } else {
    //   return <InvestResultRed testDatas={testDatas} />;
    // }
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
