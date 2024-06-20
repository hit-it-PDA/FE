import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import { useEffect } from "react";
import RobotAnalyzing from "../../components/home/RobotAnalyzing";
import { postTestResult, getTestResult } from "../../lib/apis/testApi";
import useUserStore from "../../store/userStore";

export default function InvestTestResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState("");
  const [testDatas, setTestDatas] = useState([]);
  const user = useUserStore((state) => state.user);

  const fetchGetTestResult = async () => {
    try {
      const response = await getTestResult();
      console.log(response.data.response);
      setTestDatas(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetTestResult();
  }, []);

  const renderPage = () => {
    switch (user.type) {
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
  };
  return <div>{renderPage()}</div>;
}
