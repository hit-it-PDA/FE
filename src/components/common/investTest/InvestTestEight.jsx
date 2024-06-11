import React, { useState } from "react";
import InvestButton from "../../InvestButton";
import { useNavigate } from "react-router-dom";

export default function InvestTestEight({ testDatas, saveData, score }) {
  const navigate = useNavigate();
  const [localScore, setLocalScore] = useState(score);
  const [localData, setLocalData] = useState(testDatas);

  const handleNavigate = (newData, newScore) => {
    navigate("/invest-test/result", {
      state: { testDatas: newData, score: newScore },
    });
  };
  const handleClick = (e, points) => {
    const newScore = localScore + points;
    const newData = [...testDatas, e.target.textContent];
    setLocalScore(newScore);
    setLocalData(newData);
    saveData(e.target.innerText);
    handleNavigate(newData, newScore);
  };
  console.log(score);
  return (
    <div className="flex flex-col w-[88vw]">
      <p className="text-2xl font-bold mt-[8vh]">
        다음 중 어떤 상품에
        <br />
        투자하시겠어요?
      </p>
      <div className="mt-[7vh] flex flex-col gap-6">
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            handleClick(e, 0);
          }}
        >
          60% 확률로 연 6% 수익 <br />
          또는 40% 확률로 -2% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            handleClick(e, 20);
          }}
        >
          60% 확률로 연 11% 수익 <br />
          또는 40% 확률로 -5% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            handleClick(e, 40);
          }}
        >
          60% 확률로 연 16% 수익 <br />
          또는 40% 확률로 -8% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            handleClick(e, 60);
          }}
        >
          60% 확률로 연 21% 수익 <br />
          또는 40% 확률로 -11% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            handleClick(e, 80);
          }}
        >
          60% 확률로 연 26% 수익 <br />
          또는 40% 확률로 -14% 손실의 상품
        </InvestButton>
      </div>
    </div>
  );
}
