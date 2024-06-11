import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestFive({
  saveData,
  handleButtonClick,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        금융투자상품의 구조, 위험에
        <br />
        대해 어느 정도 이해하나요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[55vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          거의 이해하지 못해요
        </InvestButton>
        <InvestButton
          className="w-[55vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          일정 부분 이해하고 있어요
        </InvestButton>
        <InvestButton
          className="w-[55vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          깊이 있게 이해하고 있어요
        </InvestButton>
        <InvestButton
          className="w-[55vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          전문가 수준이에요
        </InvestButton>
      </div>
    </div>
  );
}
