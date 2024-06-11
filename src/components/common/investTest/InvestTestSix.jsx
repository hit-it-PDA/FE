import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestSix({
  saveData,
  handleButtonClick,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        금융투자상품의 취득 또는
        <br />
        처분 목적은 무엇인가요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          채무 상환 자금
        </InvestButton>
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          생활비, 학비 등 필수 자금
        </InvestButton>
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          주택 전세 등 주거 자금
        </InvestButton>
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          여행 등 여유 자금
        </InvestButton>
        <InvestButton
          className="w-[60vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          자산 증식
        </InvestButton>
      </div>
    </div>
  );
}
