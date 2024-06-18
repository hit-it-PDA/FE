import React, { useState } from "react";

// components
import Input from "../../Input";

export default function DiagnosisFirst({
  age,
  setAge,
  retirementAge,
  setRetirementAge,
  sex,
  setSex,
  pensionExpAmount,
  setPensionExpAmount,
}) {
  return (
    <div className="w-[90vw]">
      <span className="text-[25px] font-bold">기본 사항</span>
      <div className="flex flex-col gap-3 mt-5">
        <Input placeholder={"ex) 만 26세"}>만 나이를 입력해주세요.</Input>
        <div>
          <p className="mb-[1vh]">성별을 선택해주세요.</p>
          <div className="flex items-center justify-between">
            <Button
              className={`w-[43vw] ${
                sex === 1 ? "bg-main text-white" : "bg-[#f6f6f6]"
              }`}
              setSex={setSex}
            >
              남성
            </Button>
            <Button
              className={`w-[43vw] ${
                sex === 2 ? "bg-main text-white" : "bg-[#f6f6f6]"
              }`}
              setSex={setSex}
            >
              여성
            </Button>
          </div>
        </div>
        <Input placeholder={"ex) 55세"}>희망 퇴직 나이를 입력해주세요.</Input>
        <Input placeholder={"ex) 103만원"}>
          국민연금 예상 수령액을 입력해주세요.
        </Input>
        <span className="text-[13px] text-[#505050] whitespace-pre-line">
          {`국민연금 20년 이상 가입자의 월 평균 수령액은 103만원입니다. (국민연금공단, 2023년 1월 기준) 
            본인이 확인한 예상 수령 금액을 입력해주세요.`}
        </span>
      </div>
    </div>
  );
}

const Button = ({ children, className, setSex }) => {
  return (
    <button
      className={`h-[5vh] rounded-[10px] ${className}`}
      onClick={() => setSex(children === "남성" ? 1 : 2)}
    >
      {children}
    </button>
  );
};
