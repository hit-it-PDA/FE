import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestFour({
  saveData,
  handleButtonClick,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        주식이나 펀드 등의
        <br />
        금융투자 경험이 있나요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          경험이 없어요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          1년 미만이에요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          1년 ~ 3년이에요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          3년 ~ 5년이에요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          5년 이상이에요
        </InvestButton>
      </div>
    </div>
  );
}
