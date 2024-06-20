import React, { useState } from "react";

// components
import Input from "../../Input";
import SelectComponent from "./SelectComponent";

export default function DiagnosisFirst() {
  const [isSelected, setIsSelected] = useState(-1);
  const options = [
    "필요성이 없어 별다른 노력을 하고 있지 않다.",
    "필요성이 있다고 생각하지만 별다른 노력을 하고 있지 않다.",
    "필요성이 있다고 생각해 관심을 가지고 있다.",
    "현재 다른 소득 활동을 위해 직업 능력 향상을 위한 방법을 모색하고 있다.",
    "구체적으로 직업 능력 향상을 위한 노력을 하고 있다.",
  ];
  return (
    <div className="w-[90vw]">
      <span className="text-[25px] font-bold">재무준비 여건 및 인식</span>
      <div className="flex flex-col gap-3 mt-5">
        <Input placeholder={"ex) 55세"}>희망 퇴직 나이를 입력해주세요.</Input>
        {/* <SelectComponent
          question={`현재의 소득활동을 지속하거나 다른 소득활동을 위해 
            직업능력 향상을 위한 노력을 하고 계신가요?`}
          options={options}
          state={isSelected}
          func={setIsSelected}
        /> */}
        <span className="whitespace-pre-line">
          {`현재의 소득활동을 지속하거나 다른 소득활동을 위해 
            직업능력 향상을 위한 노력을 하고 계신가요?`}
        </span>
        <div className="flex flex-col w-full gap-2">
          {options.map((elem, index) => (
            <SelectOption
              key={index}
              content={elem}
              isSelected={isSelected === index}
              setIsSelected={setIsSelected}
              index={index}
            />
          ))}
        </div>
        <Input placeholder={"ex) 103만원"}>
          은퇴 이후에 필요할 것으로 예상하는 생활비는 얼마인가요?
        </Input>
        {/* <Input placeholder={"ex) 103만원"}>
          국민연금 예상 수령액을 입력해주세요.
        </Input>
        <span className="text-[13px] text-[#505050] whitespace-pre-line">
          {`국민연금 20년 이상 가입자의 월 평균 수령액은 103만원입니다. (국민연금공단, 2023년 1월 기준) 
            본인이 확인한 예상 수령 금액을 입력해주세요.`}
        </span> */}
      </div>
    </div>
  );
}

const SelectOption = ({ index, isSelected, setIsSelected, content }) => {
  return (
    <div className="flex items-center h-full">
      <div className="flex items-center justify-center h-full">
        <div
          className={`w-5 h-5 flex items-center justify-center ${
            isSelected ? "bg-main" : "border-2"
          }  rounded-[35px]`}
          onClick={() => setIsSelected(index)}
        >
          {isSelected ? (
            <svg
              className="w-4 h-4 text-white peer-checked:text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : null}
        </div>
      </div>
      <span className="flex-1 ml-[1.1vw] text-[15px]">{content}</span>
    </div>
  );
};
