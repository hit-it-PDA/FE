import React from "react";
import { useNavigate } from "react-router-dom";

// components
import LineChartComponent from "../../components/common/chart/LineChartComponent";
import TopBar from "../../components/common/topBar/TopBar";
import ManageTitleComponent from "../../components/manage/ManageTitleComponent";
import MoreServiceComponent from "../../components/manage/MoreServiceComponent";

// store
import useUserStore from "../../store/userStore";

export default function ManagePage() {
  const navigate = useNavigate();
  const user = useUserStore((store) => store.user);
  return (
    <div>
      <TopBar type={0} />
      <div className="flex flex-col w-full h-full gap-10 p-5">
        <span className="text-[23px] font-bold">📌 현재 수익률</span>
        {user?.name === "방문자" ? (
          <div className="relative w-full h-full">
            <div className="absolute z-20 flex flex-col text-[20px] items-center justify-center w-full h-full">
              <span className="p-2 font-bold">로그인 후 이용 가능합니다.</span>
              <button
                className="bg-main px-10 py-2 rounded-[20px] mt-5 text-[15px] text-white font-bold"
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
            </div>
            <div className="w-full h-full blur-sm">
              <ManageTitleComponent stockReturns="???" />
              <LineChartComponent
                returnsData={[
                  200, 100, 382, 423, 12, 452, 322, 85, 33, 77, 23, 199,
                ]}
              />
            </div>
          </div>
        ) : (
          <>
            <ManageTitleComponent stockReturns="1,000" />
            <LineChartComponent
              returnsData={[
                200, 100, 382, 423, 12, 452, 322, 85, 33, 77, 23, 199,
              ]}
            />
          </>
        )}

        <div className="w-full h-[30vh] flex flex-col">
          <span className="text-[23px] font-bold">📌 부가 서비스</span>
          <div className="flex flex-col justify-around flex-1 mt-2">
            <MoreServiceComponent
              title="노후 준비 종합 진단"
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
