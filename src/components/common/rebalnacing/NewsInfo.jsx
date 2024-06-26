import React from "react";

// icons
import arrow from "../../../assets/icons/cheveron-right.svg";

export default function NewsInfo() {
  return (
    <div className="flex w-full py-3 bg-white">
      <div className="flex flex-col flex-1 truncate">
        <div className="flex items-center">
          <img
            src={
              "https://file.alphasquare.co.kr/media/images/stock_logo/kr/005930.png"
            }
            className="rounded-full w-[22px]"
          />
          <span className="text-[16px] font-bold mx-1">삼성전자</span>
          <span className="text-[12px] self-end text-[#525252] truncate">
            매출: -197억, 영업이익: 1321억
          </span>
        </div>
        <span className="w-full text-[13px] truncate">
          “삼성 없으면 큰일날 판”…생각보다 심각한 상황이라는데“삼성 없으면
          큰일날 판”…생각보다 심각한 상황이라는데“삼성 없으면 큰일날
          판”…생각보다 심각한 상황이라는데
        </span>
      </div>
      <a href="https://www.hankyung.com/article/202406235264i" target="_blank">
        <img src={arrow} className="w-fit" />
      </a>
    </div>
  );
}