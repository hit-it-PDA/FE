import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// modal
import { Sheet } from "react-modal-sheet";

// components
import NewsInfo from "./NewsInfo";

export default function ReportModal({ isOpen, setOpen, data }) {
  // bad_news가 null이 아닌 항목들만 필터링
  const filteredStocks =
    data.stocks?.filter((stock) => stock.bad_news_title !== "None") || [];

  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      detent={"content-height"}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="flex flex-col items-center w-full my-[2vh]">
            <div className="flex flex-col w-[90vw] px-5 py-3 border-b mb-[2vh]">
              <span className="text-[20px] font-bold self-center mb-3">
                {data.fund_name}
              </span>
              <div className="flex flex-col justify-center w-full gap-1">
                <div className="flex justify-between w-full">
                  <span className="text-[15px]">운용사</span>
                  <span className="text-[17px]">{data.company_name}</span>
                </div>
                <div className="flex justify-between w-full">
                  <span className="text-[15px]">수익률</span>
                  <div className="flex items-baseline">
                    <span className="text-[13px] mr-2 text-[#4E4E4E]">
                      3개월
                    </span>
                    <span className="text-[18px] font-bold text-[#ff0000]">
                      {data.return3m?.toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90vw] mb-[2vh]">
              <p className="text-[15px]">
                ✔︎{" "}
                <span className="font-bold">
                  총 {filteredStocks.length}개의 위험 판단 주식
                </span>
                을 찾았어요.
              </p>
            </div>
            {/** 뉴스 기사 */}
            <div className="flex flex-col w-[90vw] mb-[2vh]">
              {filteredStocks.map((elem, index) => (
                <NewsInfo data={elem} key={index} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <button
                className="my-2 px-10 py-2 rounded-[25px] bg-[#375AFF] text-white font-bold"
                onClick={() => setOpen(false)}
              >
                확인
              </button>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
