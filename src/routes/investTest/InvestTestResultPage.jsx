import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
// components
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import InvestResultYellow from "../../components/common/investResult/InvestResultYellow";
import RobotAnalyzing from "../../components/home/RobotAnalyzing";
// apis
import { postTestResult, getTestResult } from "../../lib/apis/testApi";
// store
import useUserStore from "../../store/userStore";

export default function InvestTestResultPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState("");
  const [result, setResult] = useState("");
  const [testDatas, setTestDatas] = useState([]);
  const location = useLocation();
  const { modifyType } = useUserStore();
  const user = useUserStore((state) => state.user);
  const token = localStorage.getItem("accessToken");
  const postDatas = location.state.testDatas;

  const fetchTestResult = async () => {
    try {
      const response = await postTestResult(postDatas);
      setResult(response.data.response);
      modifyType(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGetTestResult = async () => {
    try {
      const response = await getTestResult();
      setTestDatas(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchTestResult();
    fetchGetTestResult();
    token ? setIsLogin(token) : setIsLogin("");
  }, []);

  const renderPage = () => {
    switch (result) {
      case "안정형":
        return <InvestResultGreen testDatas={testDatas} />;
      case "안정추구형":
        return <InvestResultBlue testDatas={testDatas} />;
      case "위험중립형":
        return <InvestResultYellow testDatas={testDatas} />;
      case "적극투자형":
        return <InvestResultOrange testDatas={testDatas} />;
      case "공격투자형":
        return <InvestResultRed testDatas={testDatas} />;
    }
  };
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[80vh] flex items-center justify-center">
          <RobotAnalyzing>{user.name}님의 투자 성향을 분석 중</RobotAnalyzing>
        </div>
      ) : (
        renderPage()
      )}
    </div>
  );
}
