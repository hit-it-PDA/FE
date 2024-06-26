import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// apis
import { getUserFundDetail } from "../../lib/apis/portfolioApi";
// components
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";
import RecommendComponent from "../../components/home/RecommendComponent";
import TopBar from "../../components/common/topBar/TopBar";
import PortfolioRatioComponent from "../../components/home/PortfolioRatioComponent";

export default function AssetPortfolioDetail() {
  const [detailData, setDetailData] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [bondList, setBondList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const fundId = params.fundId;

  const fetchGetUserFundDetail = async () => {
    const data = await getUserFundDetail(fundId);
    console.log(data);
    setDetailData(data.response);
    setStockList(data.response.fundStocks);
    setBondList(data.response.fundBonds);
    if (data) setIsLoading(false);
  };
  useEffect(() => {
    fetchGetUserFundDetail();
  }, []);
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
