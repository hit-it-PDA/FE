import React from "react";

export default function ManageTitleComponent({ stockReturns }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 text-center whitespace-pre-line">
        로보 어드바이저의 현재 수익률은 <br />
        <span className="text-main font-bold text-[24px]">
          {stockReturns}%
        </span>{" "}
        에요!
      </div>
    </div>
  );
}
