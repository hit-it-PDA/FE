import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// icons
import arrow from "../../assets/icons/cheveron-right.svg"
// component
import TopBar from "../../components/common/topBar/TopBar";
import PortfolioCompositionComponent from "../../components/home/PortfolioCompositionComponent";
import PortfolioRatioComponent from "../../components/home/PortfolioRatioComponent";
// store
import useUserStore from "../../store/userStore";
// api
import { getUserPortfolioDetail } from "../../lib/apis/portfolioApi";

export default function AssetPortfolio() {
  const user = useUserStore((state) => state.user);
  const [fundListData, setFundListData] = useState([]);
  const token = localStorage.getItem("accessToken");
  const [isLogin, setIsLogin] = useState("");

  const fetchGetUserPortfolio = async () => {
    try {
      const response = await getUserPortfolioDetail();
      setFundListData(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    token ? setIsLogin(token) : setIsLogin("");
    console.log(isLogin);
    fetchGetUserPortfolio();
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
        </div>
        <div className="flex flex-col mt-6 gap-7">
          {fundListData.map((elem, index) => (
            <FundListComponent
              key={index}
              index={index}
              data={elem}
              type={location.state ? "my-data" : "all"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const FundListComponent = ({ index, data, type }) => {
  const navigate = useNavigate();
  const COLORS = [
    "#F0F4FF",
    "#E4ECFF",
    "#CCD8FF",
    "#B3C5FF",
    "#98B1FF",
    "#6A8CFF",
    "#375AFF",
  ];
  let splitFundName = "";
  if (data.fundName.includes("[") || data.fundName.includes("(")) {
    splitFundName = data.fundName.split(/([(\[])/);
  }
  return (
    <div
      className={`flex justify-between w-[90vw] rounded-[25px] px-5 py-5 shadow-lg hover:cursor-pointer`}
      onClick={() => {
        type === "all"
          ? navigate(`${index}`)
          : navigate(`${index}`, { state: data });
      }}
      style={{ backgroundColor: `${COLORS[index]}` }}
    >
      <div className="flex flex-col flex-1 mr-2 truncate">
        <div className="w-full truncate">
          <span className="text-[17px] font-bold">{splitFundName[0]}</span>
        </div>
        <div className="w-full flex truncate text-[15px]">
          {splitFundName?.[1]}
          {splitFundName?.slice(2).join("")}
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
