import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioRecommendComponent = ({
  type,
  data,
  isLogin,
  setOpenModal,
  setSelectedPortfolio,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${
        type
          ? "bg-main flex flex-col box-content p-7"
          : "flex flex-col w-[70vw] rounded-[10px] p-4 box-content shadow-lg"
      }`}
    >
      <div className={`flex-1 ${type ? null : "mb-2"}`}>
        <span
          className={`${
            type ? "text-[16px] " : "text-[13px]"
          } text-[#FF9900] font-bold`}
        >
          {data.investmentType || data.fundTypeDetail}
        </span>
        <div className="flex items-baseline justify-between">
          <span
            className={`flex-1 ${
              type ? "text-[24px] text-white" : "text-[20px] text-[#3B3B3B]"
            }  font-bold`}
          >
            {data.name || data.fundName}
          </span>
        </div>
        <div
          className={`${type ? "text-[15px] mt-1 text-white" : "text-[13px]"}`}
        >
          {data.summary || data.companyName}
        </div>
      </div>
      <div
        className={`flex-1 justify-center flex flex-col gap-1 ${
          type ? "justify-end text-white" : null
        }`}
      >
        <div className="text-[15px] flex my-[1.3vh] justify-between items-center">
          <span>수익률</span>
          <div className="flex items-baseline gap-1.5">
            <span
              className={`${
                type ? "text-[13px] text-white" : "text-[10px] text-[#616161]"
              } `}
            >
              3개월
            </span>
            <span className="text-[18px] font-bold text-[#FF3D00]">
              {data.return3m?.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>
      {type ? null : (
        <div className="flex items-center justify-around flex-1">
          {isLogin ? (
            <div
              className="bg-main text-white font-bold w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer"
              onClick={() => {
                setOpenModal(true);
                setSelectedPortfolio(data);
              }}
            >
              선택하기
            </div>
          ) : null}
          <div
            className="bg-main text-white font-bold w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer"
            onClick={() => {
              data.funds
                ? navigate(`/detail/${data.name}`, { state: data.funds })
                : navigate(`/detail/all/${data.id}`);
            }}
          >
            자세히 보기
          </div>
        </div>
      )}
    </div>
  );
};

const RecommendComponent = React.memo(PortfolioRecommendComponent);

export default RecommendComponent;
