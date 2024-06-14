import React from "react";
import { useState } from "react";

// components
import SelectComponent from "./SelectComponent";
import ButtonComponent from "./ButtonComponent";

export default function DiagnosisThird({
  hasIncome,
  setHasIncome,
  isYoung,
  setIsYoung,
  isCalculate,
  setIsCalculate,
  manageAsset,
  setManageAsset,
  pensionAmount,
  setPensionAmount,
  estateAmount,
  setEstateAmount,
}) {
  const manageAssetOptions = [
    { value: "10000000", label: "1000만원" },
    { value: "5000000", label: "500만원" },
    { value: "3000000", label: "300만원" },
    { value: "1000000", label: "100만원" },
  ];
  return (
    <div className="w-[90vw]">
      <span className="text-[25px] font-bold">재무 노후 준비</span>
      <div className="mt-5 gap-3 flex flex-col mb-3">
        <ButtonComponent
          question="현재 수입이 있는 일을 하고 있나요?"
          state={hasIncome}
          func={setHasIncome}
        />
        {hasIncome ? (
          <ButtonComponent
            question="현재 연령이 만 45세 미만인가요?"
            state={isYoung}
            func={setIsYoung}
            className={"animate-slide-down"}
          />
        ) : null}
        {isYoung ? (
          <SelectComponent
            question={`직장을 그만둘 때 받는 퇴직(연)금 중 
          노후자금 으로 쓸 금액은 어느 정도인가요?`}
            options={manageAssetOptions}
            state={manageAsset}
            func={setManageAsset}
          />
        ) : null}
        {manageAsset ? (
          <SelectComponent
            question={`은행, 보험회사, 증권사에서 노후에 정기적으로 받을 개인 연금
          수령액은 어느 정도인가요?`}
            options={manageAssetOptions}
            state={pensionAmount}
            func={setPensionAmount}
          />
        ) : null}
        {pensionAmount ? (
          <SelectComponent
            question={`월세가 나오거나 노후에 주택연금 등을 이용해 생활비로 쓸 부동산
          금액(시세)은 어느 정도인가요?`}
            options={manageAssetOptions}
            state={estateAmount}
            func={setEstateAmount}
          />
        ) : null}
        {estateAmount ? (
          <ButtonComponent
            question="노후에 매월 얼마가 필요할지 계산해 본 적이 있으신가요?"
            state={isCalculate}
            func={setIsCalculate}
            className={"animate-slide-down"}
          />
        ) : null}
      </div>
    </div>
  );
}
