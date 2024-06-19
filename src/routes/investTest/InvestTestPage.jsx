import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import InvestTestOne from "../../components/common/investTest/InvestTestOne";
import InvestTestTwo from "../../components/common/investTest/InvestTestTwo";
import InvestTestThree from "../../components/common/investTest/InvestTestThree";
import InvestTestFour from "../../components/common/investTest/InvestTestFour";
import InvestTestFive from "../../components/common/investTest/InvestTestFive";
import InvestTestSix from "../../components/common/investTest/InvestTestSix";
import InvestTestSeven from "../../components/common/investTest/InvestTestSeven";
import InvestTestEight from "../../components/common/investTest/InvestTestEight";
import InvestTestNine from "../../components/common/investTest/InvestTestNine";

export default function InvestTestPage() {
  const [testDatas, setTestDatas] = useState([]);
  const [resultDatas, setResultDatas] = useState([]);
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const saveData = (prevData) => {
    const data = [...testDatas, prevData];
    setTestDatas(data);
  };
  const saveResultData = (prevData) => {
    const data = [...resultDatas, prevData];
    setResultDatas(data);
  };
  const addScore = (new_score) => {
    setScore(score + new_score);
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <InvestTestOne
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 2:
        return (
          <InvestTestTwo
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 3:
        return (
          <InvestTestThree
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 4:
        return (
          <InvestTestFour
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 5:
        return (
          <InvestTestFive
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 6:
        return (
          <InvestTestSix
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 7:
        return (
          <InvestTestSeven
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 8:
        return (
          <InvestTestEight
            saveData={saveData}
            saveResultData={saveResultData}
            handleButtonClick={handleNextPage}
            addScore={addScore}
          />
        );
      case 9:
        return (
          <InvestTestNine
            testDatas={testDatas}
            resultDatas={resultDatas}
            saveData={saveData}
            saveResultData={saveResultData}
            score={score}
          />
        );
      default:
        return null;
    }
  };
  console.log(score);
  console.log(testDatas);
  console.log(resultDatas);
  return (
    <div className="flex flex-col items-center mt-[3vh]">
      <ProgressBar page={page} totalPages={totalPages} className={"h-full"} />
      {renderPage()}
    </div>
  );
}
