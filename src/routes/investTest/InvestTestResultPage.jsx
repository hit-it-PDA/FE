import React from "react";
import { useLocation } from "react-router-dom";
import InvestResultBlue from "../../components/common/investResult/InvestResultBlue";
import InvestResultGreen from "../../components/common/investResult/InvestResultGreen";
import InvestResultOrange from "../../components/common/investResult/InvestResultOrange";
import InvestResultRed from "../../components/common/investResult/InvestResultRed";
import Button from "../../components/Button";

export default function InvestTestResultPage() {
  const location = useLocation();
  const testDatas = location.state.testDatas;
  const score = location.state.score;
  console.log(score);
  console.log(testDatas);

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
  return <div>{renderPage()}</div>;
}
