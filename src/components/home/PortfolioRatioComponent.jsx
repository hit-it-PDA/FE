import React from "react";

export default function PortfolioRatioComponent({
  stock,
  bond,
  stockForeign,
  bondForeign,
  investment,
  etc,
}) {
  return (
    <div className="flex flex-col justify-center py-4 h-15vh">
      <span className="text-[20px] font-bold mb-5">📌 상품 비중</span>
      <div className="flex flex-col items-center gap-3">
        <RatioComponent title="국내 주식" ratio={stock} />
        <RatioComponent title="해외 주식" ratio={stockForeign} />
        <RatioComponent title="국내 채권" ratio={bond} />
        <RatioComponent title="해외 채권" ratio={bondForeign} />
        <RatioComponent title="수익 증권" ratio={investment} />
        <RatioComponent title="기타" ratio={etc} />
      </div>
    </div>
  );
}

const RatioComponent = ({ title, ratio }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[15vw] justify-center font-bold text-[15px]">
        {title}
      </div>
      <div className="w-[50vw] h-[2.5vh] bg-[#F0F0F0] mx-[5vw]">
        <div className="h-full bg-[#6D87FF]" style={{ width: `${ratio}%` }} />
      </div>
      <div className="w-[15vw] flex justify-center text-[15px]">{ratio}%</div>
    </div>
  );
};
