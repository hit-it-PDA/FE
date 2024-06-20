import React, { useState, useEffect } from "react";
import TopBar from "../../components/common/topBar/TopBar";
import DoughnutChartComponent from "../../components/common/chart/DoughnutChartComponent";
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";
import useUserStore from "../../store/userStore";

export default function AssetPortfolio() {
  const user = useUserStore((state) => state.user);
  const token = localStorage.getItem("accessToken");
  const [isLogin, setIsLogin] = useState("");

  useEffect(() => {
    token ? setIsLogin(token) : setIsLogin("");
    console.log(isLogin);
  }, [token]);

  return (
    <>
      <TopBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-3 border-b-[0.1vh] border-gray-300">
          <div className="flex flex-col items-start justify-center w-[60vw]">
            <div className="px-1 font-bold text-white rounded-[3px] bg-main">
              {isLogin ? user.type : "???"}
            </div>
            <span className="text-[25px] font-bold">
              {isLogin ? `${user.name}의 포트폴리오` : "Guest님의 포트폴리오"}
            </span>
          </div>
          <DoughnutChartComponent
            type="stock"
            ratio={[70, 30]}
            className={"w-[60vw] h-[30vh] mt-[2vh]"}
          />
          <p className="text-right w-[88vw] text-gray-400 text-sm">
            {isLogin ? "※ 24.06.16 기준 반영" : "???"}
          </p>
        </div>
        <span className="text-[23px] font-bold w-[88vw] mt-[2vh]">
          📌 종목 구성
        </span>
        <div className="flex flex-col gap-3 mx-3 my-5 w-[88vw]">
          <div className="flex items-center gap-2">
            <div className="bg-main w-[24px] h-[24px]" />
            <span className="font-bold">주식</span>
          </div>
          {isLogin ? (
            <PortfolioCompositionComponent
              title="삼성전자"
              price="1,000,000"
              type="stock"
              ratio={[82]}
            />
          ) : (
            <PortfolioCompositionComponent
              title="Guest"
              price="1,000,000"
              type="stock"
              ratio={[82]}
            />
          )}
        </div>
        <div className="flex flex-col gap-3 mx-3 my-5 w-[88vw]">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF8F8F] w-[24px] h-[24px]" />
            <span className="font-bold">채권</span>
          </div>
          {isLogin ? (
            <PortfolioCompositionComponent
              title="삼성채권"
              price="900,000"
              type="bond"
              ratio={[24]}
            />
          ) : (
            <PortfolioCompositionComponent
              title="Guest"
              price="900,000"
              type="bond"
              ratio={[24]}
            />
          )}
        </div>
      </div>
    </>
  );
}
