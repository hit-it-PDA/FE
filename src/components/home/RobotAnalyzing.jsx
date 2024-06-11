import React from "react";
import logo from "../../assets/logo.svg";

export default function RobotAnalyzing() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center text-[18px]">
      <img src={logo} className="animate-bounce mb-5" />
      <div className="whitespace-nowrap">
        <span className="font-bold">히릿 로보 어드바이저가 분석 중</span>이에요!
      </div>
      조금만 기다려주세요 :)
    </div>
  );
}
