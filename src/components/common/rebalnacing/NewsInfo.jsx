import React from "react";

// icons
import arrow from "../../../assets/icons/cheveron-right.svg";

export default function NewsInfo({ data }) {
  return (
    <div className="flex w-full py-3 bg-white">
      <div className="flex flex-col flex-1 truncate">
        <div className="flex items-center">
          <img
            src={`https://file.alphasquare.co.kr/media/images/stock_logo/kr/${data.stock_code}.png`}
            className="rounded-full w-[22px]"
          />
          <span className="text-[16px] font-bold mx-1">{data.stock_name}</span>
        </div>
        <span className="w-full text-[13px] truncate">
          {data.bad_news_title}
        </span>
      </div>
      <a href={data.bad_news_url} target="_blank">
        <img src={arrow} className="w-fit" />
      </a>
    </div>
  );
}
