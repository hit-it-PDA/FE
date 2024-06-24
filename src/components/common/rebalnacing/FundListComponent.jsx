import React from "react";

// icons
import arrow from "../../../assets/icons/cheveron-right.svg";

export default function FundListComponent({ setOpen }) {
  return (
    <div
      className={`flex justify-between w-[90vw] rounded-[25px] px-5 py-5 shadow-lg hover:cursor-pointer`}
      style={{ backgroundColor: `#E5E9FF` }}
      onClick={() => setOpen(true)}
    >
      <div className="flex flex-col flex-1 mr-2 truncate">
        <div className="w-full truncate">
          <span className="text-[17px] font-bold">어쩌구저쩌구펀드</span>
        </div>
        <span className="text-[13px]">해외선진</span>
      </div>
      <div className="flex items-center">
        <span className="text-[20px] font-bold">30%</span>
        <img src={arrow} className="w-[20px]" />
      </div>
    </div>
  );
}
