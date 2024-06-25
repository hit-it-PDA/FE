import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import rightCircleArrow from "../../assets/icons/rightCircleArrow.svg";

export default function MoreServiceComponent({ title, detail }) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-5 py-3 bg-sub rounded-[30px]">
      <div className="flex flex-col">
        <span className="font-bold text-[18px]">{title}</span>
        <div className="w-full leading-none whitespace-pre-line">
          <span className="text-[12px] text-[#505050]">{detail}</span>
        </div>
      </div>
      <img
        src={rightCircleArrow}
        className="w-[50px] hover:cursor-pointer"
        onClick={() =>
          navigate(
            `${title === "노후 준비 종합 진단" ? "diagnosis" : "pension"}`
          )
        }
      />
    </div>
  );
}
