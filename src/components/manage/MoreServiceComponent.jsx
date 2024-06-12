import React from "react";

// icons
import rightCircleArrow from "../../assets/icons/rightCircleArrow.svg";

export default function MoreServiceComponent({ title, detail }) {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-5 py-3 bg-[#FFEDB3] rounded-[30px]">
      <div className="flex flex-col">
        <span className="font-bold text-[18px]">{title}</span>
        <div className="whitespace-pre-line leading-none w-full">
          <span className="text-[12px] text-[#505050]">{detail}</span>
        </div>
      </div>
      <img src={rightCircleArrow} className="w-[50px] hover:cursor-pointer" />
    </div>
  );
}
