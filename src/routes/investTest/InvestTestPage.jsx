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
  const [score, setScore] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  const saveData = (prevData) => {
    const data = [...testDatas, prevData];
    setTestDatas(data);
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
            handleButtonClick={handleNextPage}
          />
        );
      case 2:
        return (
          <InvestTestTwo
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 3:
        return (
          <InvestTestThree
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 4:
        return (
          <InvestTestFour
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 5:
        return (
          <InvestTestFive
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 6:
        return (
          <InvestTestSix
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 7:
        return (
          <InvestTestSeven
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 8:
        return (
          <InvestTestEight
            saveData={saveData}
            handleButtonClick={handleNextPage}
          />
        );
      case 9:
        return (
          <InvestTestNine
            testDatas={testDatas}
            saveData={saveData}
          />
        );
      default:
        return null;
    }
  };
  console.log(testDatas);
  return (
    <div className="flex flex-col items-center mt-[3vh]">
      <ProgressBar page={page} totalPages={totalPages} className={"h-full"} />
      {renderPage()}
    </div>
  );
}
