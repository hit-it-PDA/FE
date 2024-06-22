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

  const fetchGetTestResult = async () => {
    try {
      const response = await getTestResult();
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
        return <InvestResultYellow testDatas={testDatas} />;
      case "적극투자형":
        return <InvestResultOrange testDatas={testDatas} />;
      case "공격투자형":
        return <InvestResultRed testDatas={testDatas} />;
    }
  };
  return <div>{renderPage()}</div>;
}
