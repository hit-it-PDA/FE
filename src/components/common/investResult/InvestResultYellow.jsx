import React from "react";
import logo from "../../../assets/logos/yellow_logo.png";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../../store/userStore";

export default function InvestResultYellow({ testDatas }) {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col items-center mb-7">
      <p className="text-2xl font-bold text-center mt-[3vh]">
        {user.name}님은
        <br />
        <span className="text-[#FABF3A]">{user.type}</span>입니다.
      </p>

      <img src={logo} alt="logo" className="w-[50vw] h-[38vw] mt-[1vh]" />
      <p className="font-bold text-gray-400 mt-[1vh] px-5">
        이 성향은 원금 손실 위험 대비 적정한 투자 수익을 기대해요. 예,적금보다
        높고 대표적인 주가 지수 수준의 수익이 있다면 해당 수익금의 변동을 감내할
        의향이 있어요.
      </p>
      <div className="flex flex-row justify-between mt-[4vh] w-[90vw] gap-4 bg-[#F8F9FB] py-[2vh] rounded-[2vh]">
        <div className="flex flex-col gap-2 ml-3">
          <span className="font-bold text-[#FABF3A] text-[22px] text-center">
            {user.name}님의 테스트 결과
          </span>
          {testDatas.map((testData, idx) => {
            return (
              <div
                className="font-extrabold text-center text-gray-400"
                key={idx}
              >
                {idx === 8 ? testData : `${testData}`}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between w-[70vw] mt-[4vh]">
        <Button
          className={"w-[32vw]"}
          onClick={() => navigate("/invest-test/start")}
        >
          다시 테스트하기
        </Button>
        <Button className={"w-[32vw]"} onClick={() => navigate("/asset")}>
          확인
        </Button>
      </div>
    </div>
  );
}
