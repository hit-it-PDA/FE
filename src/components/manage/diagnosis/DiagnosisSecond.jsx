import React from "react";
import { useState } from "react";
import Input from "../../Input";
import SelectComponent from "./SelectComponent";

export default function DiagnosisSecond() {
  const [asset, setAsset] = useState();
  const [returns, setReturns] = useState();
  const assetOptions = [
    {
      label: "3억",
      value: "3억",
    },
    {
      label: "5억",
      value: "5억",
    },
  ];
  const returnsOptions = [
    {
      label: "1%",
      value: "1",
    },
    {
      label: "5%",
      value: "5",
    },
  ];
  return (
    <div>
      <span className="text-[25px] font-bold">재무 준비 실천 행위</span>
      <div className="flex flex-col gap-3 mt-5">
        <Input placeholder={"ex) 103만원"}>
          국민연금 예상 수령액을 입력해주세요.
        </Input>
        <span className="text-[13px] text-[#505050] whitespace-pre-line">
          {`국민연금 20년 이상 가입자의 월 평균 수령액은 103만원입니다. (국민연금공단, 2023년 1월 기준) 
            본인이 확인한 예상 수령 금액을 입력해주세요.`}
        </span>
        <Input placeholder={"ex) 1000만원"}>
          월세가 나오거나 노후에 주택연금 등을 이용해 생활비로 쓸 부동산
          금액(시세) 총액을 입력해주세요.
        </Input>
        <span className="text-[25px] font-bold mt-3">재무 상태</span>
        <SelectComponent
          question={"금융자산 총액을 입력해주세요. (부동산을 제외한 예금 등)"}
          options={assetOptions}
          state={asset}
          func={setAsset}
        />
        <SelectComponent
          question={"예상 투자 수익률을 입력해주세요."}
          options={returnsOptions}
          state={returns}
          func={setReturns}
        />
      </div>
    </div>
  );
}
