import React, { useState } from "react";

// components
import FundChartComponent from "../../components/common/chart/FundChartComponent";
import TopBar from "../../components/common/topBar/TopBar";
import FundListComponent from "../../components/common/rebalnacing/FundListComponent";
import ReportModal from "../../components/common/rebalnacing/ReportModal";

// icons
import rightArrow from "../../assets/icons/rightArrow.svg";

export default function RebalancingReportPage() {
  const [isOpen, setOpen] = useState(false);
  const FUNDS = [
    "신한BNPP글로벌밸런스EMP",
    "AB미국그로스증권투자신탁",
    "미래에셋퇴직플랜글로벌다이나믹증권자투자신탁",
  ];
  return (
    <div>
      <TopBar type={2} />
      <ReportModal isOpen={isOpen} setOpen={setOpen} />
      <div className="px-5">
        <div className="flex justify-center w-full border-b">
          <span className="text-[25px] font-bold py-3">리밸런싱 리포트</span>
        </div>
        <div className="flex flex-col w-full py-3">
          {/** 한 눈에 보기 */}
          <div className="flex flex-col px-2">
            <span className="text-[20px] font-bold">📌 한 눈에 보기</span>
            <p className="px-5 text-[14px] whitespace-pre-line">
              {`네이버 뉴스를 기준으로 감정 분석을 진행하고 
              분석 결과를 기반으로 펀드 비율을 조정했어요!`}
            </p>
            <div className="flex justify-between my-[4vh]">
              <FundChartComponent
                type="stock"
                ratio={[10, 40, 30, 20]}
                className={"w-[30vw] h-full"}
              />
              <img src={rightArrow} alt="화살표" />
              <FundChartComponent
                type="stock"
                ratio={[40, 10, 20, 30]}
                className={"w-[30vw] h-full"}
              />
            </div>
          </div>
          {/** 자세히 보기 */}
          <div className="flex flex-col px-2">
            <div className="flex items-baseline justify-between">
              <span className="text-[20px] font-bold">📌 자세히 보기</span>
              <span className="text-[13px] text-[#616161]">
                ※ 2024.05.30 기준
              </span>
            </div>
            <p className="px-5 text-[14px] whitespace-pre-line">
              {`감정 분석을 통해 위험 주식이라고 판단된 주식들과 
              감정 분석에 사용된 네이버 뉴스 기사를 볼 수 있어요!`}
            </p>
            <div className="my-[2vh] flex flex-col w-full items-center gap-4">
              {FUNDS.map((elem, index) => (
                <FundListComponent key={index} title={elem} setOpen={setOpen} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
