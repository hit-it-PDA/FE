import React from "react";

// icons
import arrow from "../../../assets/icons/cheveron-right.svg";

export default function NewsInfo() {
  return (
    <div className="flex w-full py-3 bg-white">
      <div className="flex flex-col flex-1 truncate">
        <span className="text-[16px] font-bold">삼성전자</span>
        <span className="w-full text-[13px] truncate">
          “삼성 없으면 큰일날 판”…생각보다 심각한 상황이라는데“삼성 없으면
          큰일날 판”…생각보다 심각한 상황이라는데“삼성 없으면 큰일날
          판”…생각보다 심각한 상황이라는데
        </span>
      </div>
      <img src={arrow} className="w-fit" />
    </div>
  );
}
