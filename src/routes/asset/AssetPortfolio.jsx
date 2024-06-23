import React, { useState, useEffect } from "react";
import TopBar from "../../components/common/topBar/TopBar";
import DoughnutChartComponent from "../../components/common/chart/DoughnutChartComponent";
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";
import useUserStore from "../../store/userStore";
import PortfolioRatioComponent from "../../components/home/PortfolioRatioComponent";
export default function AssetPortfolio() {
  const user = useUserStore((state) => state.user);
  const token = localStorage.getItem("accessToken");
  const [isLogin, setIsLogin] = useState("");
  const tmp = [
    {
      stock_name: "Global X US Infrastructure Dev ETF",
      size: null,
      style: null,
      weight: 10.28,
    },
    {
      stock_name: "iShares 10-20 Year Treasury Bond ETF",
      size: null,
      style: null,
      weight: 2.17,
    },
    {
      stock_name: "iShares 20+ Year Treasury Bond ETF",
      size: null,
      style: null,
      weight: 3.28,
    },
    {
      stock_name: "iShares MSCI USA Quality Factor ETF",
      size: null,
      style: null,
      weight: 19.94,
    },
    {
      stock_name: "iShares S&P 500 Value ETF",
      size: null,
      style: null,
      weight: 5.03,
    },
    { stock_name: "SPDR® Gold Shares", size: null, style: null, weight: 5.13 },
    {
      stock_name: "SPDR® Portfolio Long Term Treasury ETF",
      size: null,
      style: null,
      weight: 19.79,
    },
    {
      stock_name: "Vanguard Interm-Term Corp Bd ETF",
      size: null,
      style: null,
      weight: 9.9,
    },
    {
      stock_name: "Vanguard Short-Term Corporate Bond ETF",
      size: null,
      style: null,
      weight: 19.2,
    },
    {
      stock_name: "WisdomTree Bloomberg US Dllr Bullish ETF",
      size: null,
      style: null,
      weight: 4.5,
    },
  ];
  useEffect(() => {
    token ? setIsLogin(token) : setIsLogin("");
    console.log(isLogin);
  }, [token]);

  return (
    <>
      <TopBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-3 border-b-[0.1vh] border-gray-300 w-[90vw]">
          <div className="flex flex-col items-start justify-center w-[60vw]">
            <div className="px-1 font-bold text-white rounded-[3px] bg-main">
              {user.type}
            </div>
            <span className="text-[25px] font-bold">
              {user.name}의 포트폴리오
            </span>
          </div>
          {/* <DoughnutChartComponent
            type="stock"
            ratio={[70, 30]}
            className={"w-[60vw] h-[30vh] mt-[2vh]"}
          />
          <p className="text-right w-[88vw] text-gray-400 text-sm">
            "※ 24.06.16 기준 반영"
          </p> */}
        </div>
        {/* <span className="text-[23px] font-bold w-[88vw] mt-[2vh]">
          📌 종목 구성
        </span> */}
        <PortfolioRatioComponent
          stock={10}
          bond={10}
          stockForeign={10}
          bondForeign={30}
          investment={20}
          etc={20}
        />
        <div className="flex flex-col gap-3 mx-3 my-5 w-[88vw]">
          <div className="flex items-center gap-2">
            <div className="bg-main w-[24px] h-[24px]" />
            <span className="font-bold">주식</span>
          </div>
          <PortfolioCompositionComponent type="stock" data={tmp} />
        </div>
        <div className="flex flex-col gap-3 mx-3 my-5 w-[88vw]">
          <div className="flex items-center gap-2">
            <div className="bg-[#FF8F8F] w-[24px] h-[24px]" />
            <span className="font-bold">채권</span>
          </div>
          <PortfolioCompositionComponent type="bond" data={tmp} />
        </div>
      </div>
    </>
  );
}
