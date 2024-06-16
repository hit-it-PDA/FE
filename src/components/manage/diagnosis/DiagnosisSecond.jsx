import React from "react";
import Input from "../../Input";

export default function DiagnosisSecond({
  incomeAmount,
  setIncomeAmount,
  returnExp,
  setReturnExp,
  livingExpenses,
  setLivingExpenses,
  manageScore,
  setManageScore,
}) {
  return (
    <div>
      <span className="text-[25px] font-bold">기본 사항</span>
      <div className="mt-5 gap-3 flex flex-col">
        <Input placeholder={"ex) 100만원"}>금융 소득을 입력하세요.</Input>
        <Input placeholder={"ex) 3%"}>예상 투자 수익률을 입력하세요.</Input>
        <Input placeholder={"ex) 200만원"}>월 생활비를 입력하세요.</Input>
        <Input placeholder={"0~10 사이의 숫자를 입력해주세요."}>
          나의 재무·건강·여가활동·대인관계에 대한 노후준비는 몇점인가요?
          <br />
        </Input>
      </div>
    </div>
  );
}
