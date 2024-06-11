import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestThree({
  saveData,
  handleButtonClick,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        연간 소득은
        <br />
        어느 정도인가요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[70vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          1천만원 미만이에요
        </InvestButton>
        <InvestButton
          className="w-[70vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          1천만원 ~ 3천만원이에요
        </InvestButton>
        <InvestButton
          className="w-[70vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          3천만원 ~ 5천만원이에요
        </InvestButton>
        <InvestButton
          className="w-[70vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          5천만원 ~ 8천만원이에요
        </InvestButton>
        <InvestButton
          className="w-[70vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          8천만원 이상이에요
        </InvestButton>
      </div>
    </div>
  );
}
