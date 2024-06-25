import React, { useState, useEffect } from "react";
// components
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import InvestResultYellow from "../../components/common/investResult/InvestResultYellow";
// apis
import { getTestResult } from "../../lib/apis/testApi";
//store
import useUserStore from "../../store/userStore";

export default function InvestTestResultPage() {
  const [testDatas, setTestDatas] = useState([]);
  const user = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGetTestResult = async () => {
    try {
      const response = await getTestResult();
      setTestDatas(response.data.response);
      if (response) setIsLoading(false);
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
        return <InvestResultYellow testDatas={testDatas} />;
      case "적극투자형":
        return <InvestResultOrange testDatas={testDatas} />;
      case "공격투자형":
        return <InvestResultRed testDatas={testDatas} />;
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="absolute flex w-full h-full bg-gray-200 opacity-90">
          <div className="w-full h-[90vh] flex items-center justify-center">
            <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
          </div>
        </div>
      ) : null}
      <div>{renderPage()}</div>
    </>
  );
}
