import React from "react";
import InvestButton from "../../InvestButton";

export default function InvestTestTwo({
  saveData,
  handleButtonClick,
  addScore,
}) {
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        투자 시 발생하는 손실을
        <br />
        어느 정도 견딜 수 있나요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(0);
          }}
        >
          손실은 못 견뎌요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(20);
          }}
        >
          낮은 손실은 괜찮아요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(40);
          }}
        >
          5%까진 괜찮아요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(60);
          }}
        >
          10%까진 괜찮아요
        </InvestButton>
        <InvestButton
          className="w-[50vw]"
          onClick={(e) => {
            saveData(e.target.textContent);
            handleButtonClick();
            addScore(80);
          }}
        >
          높은 손실도 괜찮아요
        </InvestButton>
      </div>
    </div>
  );
}
