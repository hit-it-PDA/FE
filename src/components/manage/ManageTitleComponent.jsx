import React from "react";

export default function ManageTitleComponent({ stockReturns }) {
  return (
    <div className="w-full h-[12vh] flex flex-col">
      <div className="flex-1 text-center whitespace-pre-line">
        히릿 로보 어드바이저가 기존 퇴직연금 금액보다{"\n"}
        <span className="text-main font-bold text-[24px]">
          {stockReturns}만원
        </span>
        을 더 모았어요!
      </div>
    </div>
  );
}
