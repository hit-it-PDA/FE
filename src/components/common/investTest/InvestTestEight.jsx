import React from "react";
import InvestButton from "../../InvestButton";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function InvestTestEight({
  testDatas,
  saveData,
  addScore,
  score,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/invest-test/result", {
      state: { testDatas: testDatas, score: score },
    });
  };
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
            saveData(e.target.textContent);
            addScore(0);
            handleNavigate();
          }}
        >
          60% 확률로 연 6% 수익 <br />
          또는 40% 확률로 -2% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            saveData(e.target.textContent);
            addScore(20);
            handleNavigate();
          }}
        >
          60% 확률로 연 11% 수익 <br />
          또는 40% 확률로 -5% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            saveData(e.target.textContent);
            addScore(40);
            handleNavigate();
          }}
        >
          60% 확률로 연 16% 수익 <br />
          또는 40% 확률로 -8% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            saveData(e.target.textContent);
            addScore(60);
            handleNavigate();
          }}
        >
          60% 확률로 연 21% 수익 <br />
          또는 40% 확률로 -11% 손실의 상품
        </InvestButton>
        <InvestButton
          className="w-[70vw] h-[7vh]"
          onClick={(e) => {
            saveData(e.target.textContent);
            addScore(80);
            handleNavigate();
          }}
        >
          60% 확률로 연 26% 수익 <br />
          또는 40% 확률로 -14% 손실의 상품
        </InvestButton>
      </div>
    </div>
  );
}
