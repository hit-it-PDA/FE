import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestSeven({
  saveData,
  handleButtonClick,
  addScore
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">어떤 주식이 좋으세요?</p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(0)
          }}
        >
          잘 알려진 대형주
        </InvestButton>
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(10)
          }}
        >
          나만 아는 소형주
        </InvestButton>
      </div>
    </div>
  );
}
