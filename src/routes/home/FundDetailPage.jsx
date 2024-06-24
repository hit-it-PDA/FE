import React from "react";

// components
import PortfolioRatioComponent from "../../components/home/PortfolioRatioComponent";
import RecommendComponent from "../../components/home/RecommendComponent";
import TopBar from "../../components/common/topBar/TopBar";
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";

// apis
import { getFundDetail } from "../../lib/apis/portfolioApi";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function FundDetailPage() {
  const [detailData, setDetailData] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [bondList, setBondList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { portfolioId: portfolioId, fundId: fundId } = useParams();
  const location = useLocation();
  const getData = async () => {
    const data = await getFundDetail(portfolioId, fundId);
    setDetailData(data.response);
    setStockList(data.response.fundStocks);
    setBondList(data.response.fundBonds);
    if (data) setIsLoading(false);
  };
  if (location.state) {
    useEffect(() => {
      setDetailData(location.state);
      setStockList(location.state.fundStocks);
      setBondList(location.state.fundBonds);
      setIsLoading(false);
    }, []);
  } else {
    useEffect(() => {
      getData();
    }, [portfolioId, fundId]);
  }
  return (
    <div className="relative bg-white">
      <TopBar type={3} />
      {isLoading ? (
        <div className="absolute flex w-full h-full bg-gray-200 opacity-90">
          <div className="w-full h-[90vh] flex items-center justify-center">
            <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
          </div>
        </div>
      ) : null}
      <RecommendComponent type={1} data={detailData} />
      <div className="px-5">
        <PortfolioRatioComponent
          stock={detailData.stock}
          bond={detailData.bond}
          stockForeign={detailData.stockForeign}
          bondForeign={detailData.bondForeign}
          investment={detailData.investment}
          etc={detailData.etc}
        />
        <div className="flex flex-col justify-center">
          <span className="text-[20px] font-bold">📌 종목 구성</span>
          <div className="flex flex-col gap-3 mx-3 my-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#6D87FF] w-[24px] h-[24px]" />
              <span className="font-bold">주식 Top 10</span>
            </div>
            <PortfolioCompositionComponent type="stock" data={stockList} />
          </div>
          <div className="flex flex-col gap-3 mx-3 my-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#FF8F8F] w-[24px] h-[24px]" />
              <span className="font-bold">채권 Top 10</span>
            </div>
            <PortfolioCompositionComponent type="bond" data={bondList} />
          </div>
        </div>
      </div>
    </div>
  );
}
