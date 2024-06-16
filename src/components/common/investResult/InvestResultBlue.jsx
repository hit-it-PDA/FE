import React from "react";
import logo from "../../../assets/blue_logo.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function InvestResultBlue({ testDatas }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl font-bold text-center mt-[8vh]">
        정찬진님은
        <br />
        <span className="text-[#4DBBFB]">안정추구형</span>입니다.
      </p>

      <img src={logo} alt="logo" className="w-[50vw] h-[38vw] mt-[1vh]" />
      <p className="font-bold text-gray-400 mt-[1vh]">
        이 성향은 원금 손실을 최소화하고 낮지만 안정적인 투자수
        <br />
        익을 기대해요. 예금, 적금보다 높은 수익을 낼 수 있다면
        <br />
        일부를 변동성이 있는 금융상품에 투자할 의향이 있어요.
      </p>
      <div className="flex flex-row justify-between mt-[4vh] w-[90vw] gap-4 bg-[#F8F9FB] py-[2vh] rounded-[2vh]">
        <div className="flex flex-col w-[40vw] gap-2 ml-[1vh] text-gray-400 font-bold">
          <div>연령</div>
          <div>위험 감내 정도</div>
          <div>연간 소득</div>
          <div>금융 투자 경험</div>
          <div>금융 이해 정도</div>
          <div>투자 목적</div>
          <div>선호 주식</div>
          <div>선호 상품</div>
        </div>
        <div className="flex flex-col gap-2">
          {testDatas.map((testData, idx) => {
            return (
              <div className="font-bold text-center text-[#454454]" key={idx}>
                {testData}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between w-[70vw] fixed bottom-5">
        <Button
          className={"w-[32vw]"}
          onClick={() => navigate("/invest-test/start")}
        >
          다시 테스트하기
        </Button>
        <Button className={"w-[32vw]"} onClick={() => navigate("/")}>
          확인
        </Button>
      </div>
    </div>
  );
}