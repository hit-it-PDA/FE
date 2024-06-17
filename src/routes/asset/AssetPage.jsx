import React from "react";
import TopBar from "../../components/common/topBar/TopBar";
import DoughnutChartComponent from "../../components/common/chart/DoughnutChartComponent";
import logo from "../../assets/logos/green_logo.png";
import go from "../../assets/icons/cheveron-right.svg";
import { useNavigate } from "react-router-dom";

export default function AssetPage() {
  const navigate = useNavigate();
  return (
    <>
      <TopBar type={0} />

      <div className="flex flex-col items-center bg-white">
        {/* <p className="w-[88vw] text-2xl font-bold">MY 자산</p> */}
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-[23px] font-bold">📌 포트폴리오</span>
            <p
              className="text-sm font-bold text-gray-500"
              onClick={() => navigate("portfolio")}
            >
              더 보기
            </p>
          </div>
          <div className="flex flex-row justify-center my-10 w-[88vw] h-[30vh]">
            <DoughnutChartComponent
              type="stock"
              ratio={[70, 30]}
              className={"w-[60vw] h-[30vh]"}
            />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center w-[30vw] gap-3">
              <div className="bg-[#6D87FF] w-[24px] h-[24px]" />
              <span className="font-bold">국내 주식</span>
            </div>
            <div className="flex justify-center w-[30vw] gap-3">
              <div className="bg-[#FF8F8F] w-[24px] h-[24px]" />
              <span className="font-bold">국내 채권</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <span className="text-[23px] font-bold">📌 총 자산</span>
          <div
            className=" flex flex-col justify-center items-center bg-sub h-[10vh] rounded-[3vh]"
            onClick={() => navigate("all")}
          >
            <div className="flex flex-col justify-center w-[75vw]">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">정찬진님의 총 자산</p>
                <img src={go} alt="go" />
              </div>
              <p className="text-2xl font-bold">8,000,000원</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <span className="text-[23px] font-bold">✅ 나의 투자 성향</span>
          <div className=" flex flex-row justify-between items-center w-[88vw] h-[10vh] rounded-[3vh]">
            <img src={logo} alt="logo" className="w-[100px] h-[78px]" />
            <div className="flex flex-col w-[60vw] items-center gap-3">
              <p className="text-xl">
                정찬진님은 <span className="font-bold text-main">안정형</span>
                입니다.
              </p>
              <button className="bg-sub w-[40vw] h-[4vh] rounded-[2vh] font-semibold">
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
