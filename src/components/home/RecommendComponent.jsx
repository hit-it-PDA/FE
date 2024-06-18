import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioRecommendComponent = ({ type, data }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${
        type
          ? "bg-main flex flex-col h-[20vh] box-content p-7"
          : "flex flex-col w-[70vw] h-[20vh] rounded-[10px] p-4 box-content shadow-lg"
      }`}
    >
      <div className={`flex-1 ${type ? null : "mb-2"}`}>
        <div className="flex items-baseline justify-between">
          <span
            className={`${
              type ? "text-[24px] text-white" : "text-[20px] text-[#3B3B3B]"
            }  font-bold`}
          >
            {data.name}
          </span>
          <span
            className={`${
              type ? "text-[16px] " : "text-[13px]"
            } text-[#FF9900] font-bold`}
          >
            {data.investmentType}
          </span>
        </div>
        <div
          className={`${type ? "text-[15px] mt-1 text-white" : "text-[13px]"}`}
        >
          {data.summary}
        </div>
      </div>
      <div
        className={`flex-1 flex flex-col gap-1 ${
          type ? "justify-end text-white" : null
        }`}
      >
        <div className="text-[15px] flex justify-between items-center">
          <span>최소 가입 비용</span>
          <span>{data.minimumSubscriptionFee}만원</span>
        </div>
        <div className="text-[15px] flex justify-between items-center">
          <span>수익률</span>
          <div className="flex items-baseline gap-1.5">
            <span
              className={`${
                type ? "text-[13px] text-white" : "text-[10px] text-[#616161]"
              } `}
            >
              3개월
            </span>
            <span className="text-[18px] font-bold text-[#FF3D00]">31.72%</span>
          </div>
        </div>
      </div>
      {type ? null : (
        <div className="flex items-center justify-around flex-1">
          <div className="bg-main text-white font-bold w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer">
            선택하기
          </div>
          <div
            className="bg-main text-white font-bold w-5/12 py-1.5 rounded-[20px] text-[12px] flex justify-center items-center hover:cursor-pointer"
            onClick={() => navigate("/detail")}
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
