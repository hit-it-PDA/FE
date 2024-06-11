import React, { useState } from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestOne({
  saveData,
  handleButtonClick,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        고객님의 연령대를
        <br />
        선택해주세요.
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[30vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          20대
        </InvestButton>
        <InvestButton
          className="w-[30vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          30대
        </InvestButton>
        <InvestButton
          className="w-[30vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          40대
        </InvestButton>
        <InvestButton
          className="w-[30vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          50대
        </InvestButton>
        <InvestButton
          className="w-[30vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
          }}
        >
          60대 이상
        </InvestButton>
      </div>
    </div>
  );
}
