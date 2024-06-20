import { data } from "autoprefixer";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// components
import FundChartComponent from "../../components/common/chart/FundChartComponent";
import TopBar from "../../components/common/topBar/TopBar";

// apis
import { getFundList } from "../../lib/apis/portfolioApi";

// icons
import arrow from "../../assets/icons/cheveron-right.svg";

export default function PortfolioDetailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [fundListData, setFundListData] = useState([]);
  const [fundRatio, setFundRatio] = useState([]);
  const { id: params_id } = useParams();
  const getData = async () => {
    const data = await getFundList(params_id);
    setFundListData(data.response);
    setFundRatio(data.response.map((elem) => elem.weight));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TopBar type={3} />
      <div className="w-[88vw] mx-auto flex flex-col items-center">
        <span className="w-[88vw] text-[23px] font-bold">📌 펀드 구성</span>
        <FundChartComponent
          ratio={fundRatio}
          className={"w-[60vw] h-[30vh] mt-[2vh]"}
        />
        <div className="flex flex-col gap-7 mt-10">
          {fundListData.map((elem, index) => (
            <FundListComponent key={index} index={index} data={elem} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FundListComponent = ({ index, data }) => {
  const COLORS = [
    "#F0F4FF",
    "#E4ECFF",
    "#CCD8FF",
    "#B3C5FF",
    "#98B1FF",
    "#6A8CFF",
    "#375AFF",
  ];
  const splitFundName = data.fundName.split(/([(\[])/);
  return (
    <div
      className={`flex justify-between w-[90vw] rounded-[25px] px-5 py-5 shadow-lg hover:cursor-pointer`}
      style={{ backgroundColor: `${COLORS[index]}` }}
    >
      <div className="flex flex-col flex-1 mr-2 truncate">
        <div className="w-full truncate">
          <span className="text-[17px] font-bold">{splitFundName[0]}</span>
        </div>
        <div className="w-full flex truncate text-[15px]">
          {splitFundName[1]}
          {splitFundName.slice(2).join("")}
        </div>
        <span className="text-[13px]">{data.fundTypeDetail}</span>
      </div>
      <div className="flex items-center">
        <span className="text-[20px] font-bold">{data.weight}%</span>
        <img src={arrow} className="w-[20px]" />
      </div>
    </div>
  );
};
