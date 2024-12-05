import React from "react";

// icons
import arrow from "../../../assets/icons/cheveron-right.svg";

export default function FundListComponent({
  index,
  weight,
  data,
  setOpen,
  setIsSelected,
}) {
  return (
    <div
      className={`flex justify-between w-[90vw] rounded-[25px] px-5 py-5 shadow-lg`}
      style={{ backgroundColor: `#E5E9FF` }}
      onClick={() => {
        setOpen(true);
        setIsSelected(data);
      }}
    >
      <div className="flex flex-col flex-1 mr-2 truncate">
        <div className="w-full truncate">
          <span className="text-[17px] font-bold">{data?.fund_name}</span>
        </div>
        <span className="text-[13px]">{data?.company_name}</span>
      </div>
      <div className="flex items-center">
        <span className="text-[20px] font-bold">{weight[index]}%</span>
        <img src={arrow} className="w-[20px]" />
      </div>
    </div>
  );
}
