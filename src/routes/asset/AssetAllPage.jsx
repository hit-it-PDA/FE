import React, { useState } from "react";
import TopBar from "../../components/common/topBar/TopBar";

export default function AssetAllPage() {
  const tabs = [
    {
      name: "은행",
      content: [
        {
          name: "신한은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "농협은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "하나은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
    {
      name: "증권",
      content: [
        {
          name: "신한투자증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "한국투자증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "KB증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "키움증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
    {
      name: "카드",
      content: [
        {
          name: "신한카드",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "롯데카드",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "하나카드",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
    {
      name: "펀드",
      content: [
        {
          name: "신한투자증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "NH투자증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "미래에셋증권",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
    {
      name: "대출",
      content: [
        {
          name: "신한은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "농협은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "하나은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
    {
      name: "퇴직연금",
      content: [
        {
          name: "신한은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "농협은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
        {
          name: "하나은행",
          accountNumber: "973-021-038-01-014",
          amount: "600,000원",
        },
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState("은행");

  return (
    <div>
      <TopBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-[90vw]">
          <p>정찬진님의 총 자산</p>
          <p className="font-semibold">8,000,000원</p>
        </div>
        <div className="flex flex-row mt-[1vh] mb-[3vh] space-x-4 border-b-[0.2vh] border-gray-300 tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`tab px-[2vw] py-2 ${
                selectedTab === tab.name
                  ? "border-b-[0.2vh] border-main font-bold"
                  : ""
              }`}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="w-[88vw] content">
          {tabs
            .find((tab) => tab.name === selectedTab)
            .content.map((item, index) => (
              <div
                key={item}
                className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-sub mt-[1vh] gap-2 rounded-[3vh] py-[10vw]"
              >
                <p className="w-[30vw] h-[5vh] ml-4 font-bold">{item.name}</p>
                <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-5">
                  <p className="h-[2.5vh] text-[#3A3A3A] font-medium">
                    {item.accountNumber}
                  </p>
                  <p className="h-[2.5vh] font-bold">{item.amount}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
