import React, { useState } from "react";
import TopBar from "../../components/common/topBar/TopBar";
import { useNavigate } from "react-router-dom";

export default function MorePage() {
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  return (
    <div>
      <TopBar type={1} />
      <div className="flex flex-col w-[88vw] mx-auto">
        <span className="text-[27px] font-bold">정찬진님</span>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            나의 계좌
          </div>
          <div className="flex flex-row items-center justify-center h-[7vh] mb-[2.5vh] bg-sub mt-[1vh] gap-2 rounded-[3vh] py-[10vw]">
            <p className="w-[30vw] h-[5vh] ml-4 font-bold">신한투자증권</p>
            <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-5">
              <p className="h-[2.5vh] text-[#3A3A3A] font-medium">
                973-021-038-01-014
              </p>
              <p className="h-[2.5vh] font-bold">8,000,000원</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            나의 투자 성향
          </div>
          <div className="flex flex-col justify-center">
            <div
              className="py-[0.5vh]"
              onClick={() => navigate("/invest-test")}
            >
              투자 성향 테스트
            </div>
            <div
              className="py-[0.5vh]"
              onClick={() => navigate("/asset/portfolio")}
            >
              포트폴리오 조회
            </div>
            <div className="py-[0.5vh]">리스크 관리</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            자산 관리
          </div>
          <div className="flex flex-col justify-center">
            <div className="py-[0.5vh]" onClick={() => navigate("/asset/all")}>
              자산 조회
            </div>
            <div className="py-[0.5vh]" onClick={() => navigate("/mydata")}>
              마이데이터 자산 연결
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            노후 준비
          </div>
          <div className="flex flex-col justify-center">
            <div
              className="py-[0.5vh]"
              onClick={() => navigate("/manage/diagnosis")}
            >
              노후 준비 종합 진단
            </div>
            <div
              className="py-[0.5vh]"
              onClick={() => navigate("/manage/pension")}
            >
              미청구 퇴직 연금 조회
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            설정
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between">
              <div className="py-[0.5vh]">알림</div>
              {isChecked ? (
                <button
                  className="px-2 py-1 text-[15px] mr-2 border-2 border-main text-main rounded-[15px] font-bold text-justify"
                  onClick={() => setIsChecked(false)}
                >
                  ON
                </button>
              ) : (
                <button
                  className="px-2 py-1 text-[15px] mr-2 border-2 border-[#FF0000] text-[#FF0000] rounded-[15px] font-bold text-justify"
                  onClick={() => setIsChecked(true)}
                >
                  OFF
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
