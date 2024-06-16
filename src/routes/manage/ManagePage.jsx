import React from "react";

// components
import LineChartComponent from "../../components/common/chart/LineChartComponent";
import TopBar from "../../components/common/topBar/TopBar";
import ManageTitleComponent from "../../components/manage/ManageTitleComponent";
import MoreServiceComponent from "../../components/manage/MoreServiceComponent";

export default function ManagePage() {
  return (
    <div>
      <TopBar type={0} />
      <div className="h-full w-full p-5 flex flex-col gap-10">
        <ManageTitleComponent stockReturns="1,000" />
        <LineChartComponent
          returnsData={[200, 100, 382, 423, 12, 452, 322, 85, 33, 77, 23, 199]}
        />
        <div className="w-full h-[30vh] flex flex-col">
          <span className="text-[20px] font-bold">📌 부가 서비스</span>
          <div className="flex flex-1 flex-col justify-around mt-2">
            <MoreServiceComponent
              title="노후준비종합진단"
              detail={`나는 노후를 잘 준비하고 있을까?
              노후에 생활비를 얼마나 쓸 수 있을까?`}
            />
            <MoreServiceComponent
              title="미청구 퇴직연금 조회"
              detail={`퇴사 후, 청구하지 못한 퇴직연금이 있다면
              히릿이 찾아드려요!`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
