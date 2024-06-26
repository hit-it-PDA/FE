import React, { useState } from "react";

// components
import Input from "../../Input";

export default function DiagnosisFirst({
  age,
  setAge,
  ageValid,
  setAgeValid,
  effort,
  setEffort,
  livingExpenses,
  setLivingExpenses,
  livingExpensesValid,
  setLivingExpensesValid,
  handleChange,
  handleBlur,
}) {
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
        <Input
          placeholder={"20~99 이내의 숫자를 입력해주세요."}
          onChange={(e) => handleChange(e, setAge, setAgeValid, 20, 99)}
          onBlur={() => handleBlur(20, 99, age, setAge, setAgeValid)}
          value={age}
        >
          희망 퇴직 나이를 입력해주세요.
        </Input>
        {!ageValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            20 이상 99 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
        <span className="whitespace-pre-line">
          {`현재의 소득활동을 지속하거나 다른 소득활동을 위해 
            직업능력 향상을 위한 노력을 하고 계신가요?`}
        </span>
        <div className="flex flex-col w-full gap-2">
          {options.map((elem, index) => (
            <SelectOption
              key={index}
              content={elem}
              effort={effort === index}
              setEffort={setEffort}
              index={index}
            />
          ))}
        </div>
        <Input
          placeholder={"50~9999 이내의 숫자를 입력해주세요."}
          onChange={(e) =>
            handleChange(e, setLivingExpenses, setLivingExpensesValid, 50, 9999)
          }
          onBlur={() =>
            handleBlur(
              50,
              9999,
              livingExpenses,
              setLivingExpenses,
              setLivingExpensesValid
            )
          }
          value={livingExpenses}
        >
          은퇴 이후에 필요할 것으로 예상하는 생활비는 얼마인가요? (단위: 만원)
        </Input>
        {!livingExpensesValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            50 이상 9999 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
      </div>
    </div>
  );
}

const SelectOption = ({ index, effort, setEffort, content }) => {
  return (
    <div className="flex items-center h-full">
      <div className="flex items-center justify-center h-full">
        <div
          className={`w-5 h-5 flex items-center justify-center ${
            effort ? "bg-main" : "border-2"
          }  rounded-[35px]`}
          onClick={() => setEffort(index)}
        >
          {effort ? (
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
