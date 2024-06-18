import React from "react";
import logo from "../../assets/logos/logo.svg";

export default function RobotAnalyzing({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center text-[18px]">
      <img src={logo} className="mb-5 animate-bounce" />
      <div className="whitespace-nowrap">
        <span className="font-bold">{children}</span>이에요!
      </div>
      조금만 기다려주세요 :)
    </div>
  );
}
