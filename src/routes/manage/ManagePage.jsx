import React from "react";
import TopBar from "../../components/common/topBar/TopBar";

export default function ManagePage() {
  return (
    <div>
      <TopBar type={0} />
      <div className="h-full w-full p-5">
        <ManageTitle stockReturns="1,000" />
      </div>
    </div>
  );
}

const ManageTitle = ({ stockReturns }) => {
  return (
    <div className="w-full h-[12vh] flex flex-col">
      <span className="text-[20px] font-bold">📌 현재 수익률</span>
      <div className="flex-1 text-center whitespace-pre-line mt-2">
        히릿 로보 어드바이저가 기존 퇴직연금 금액보다{"\n"}
        <span className="text-main_yellow font-bold text-[24px]">
          {stockReturns}만원
        </span>
        을 더 모았어요!
      </div>
    </div>
  );
};
