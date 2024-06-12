import logo from "../../../assets/logos/app_logo.jpg";
import React, { useState, useEffect } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function MyDataChoose({
  selectedItems,
  setSelectedItems,
  handleButtonClick,
}) {
  const navigate = useNavigate();
  const tabs = [
    {
      name: "은행",
      content: [
        "신한은행",
        "농협은행",
        "하나은행",
        "우리은행",
        "기업은행",
        "국민은행",
        "SC제일은행",
        "광주은행",
        "전북은행",
        "대구은행",
        "토스뱅크",
        "카카오뱅크",
      ],
    },
    {
      name: "증권",
      content: [
        "신한투자증권",
        "미래에셋증권",
        "하나증권",
        "키움증권",
        "한국투자증권",
        "NH투자증권",
        "KB증권",
        "현대차증권",
        "교보증권",
        "한화투자증권",
      ],
    },
    {
      name: "카드",
      content: [
        "신한카드",
        "국민카드",
        "비씨카드",
        "우리카드",
        "현대카드",
        "하나카드",
        "롯데카드",
        "삼성카드",
      ],
    },
    { name: "펀드", content: ["신한펀드", "농협펀드", "하나펀드"] },
    { name: "보험", content: ["신한라이프", "교보생명", "KB손해보험"] },
    { name: "대출", content: ["신한대출", "농협대출", "하나대출"] },
    {
      name: "퇴직연금",
      content: ["신한퇴직연금", "농협퇴직연금", "하나퇴직연금"],
    },
  ];

  const [selectedTab, setSelectedTab] = useState("은행");
  const [allSelected, setAllSelected] = useState({});

  useEffect(() => {
    // 각 탭의 전체선택 상태 초기화
    const initialAllSelected = {};
    tabs.forEach((tab) => {
      initialAllSelected[tab.name] = false;
    });
    setAllSelected(initialAllSelected);
  }, []);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevItems) => {
      const newSelectedItems = prevItems.includes(item)
        ? prevItems.filter((prevItem) => prevItem !== item)
        : [...prevItems, item];
      console.log(selectedItems);

      // 현재 탭의 모든 항목이 선택되었는지 확인
      const currentTabContent = tabs.find(
        (tab) => tab.name === selectedTab
      ).content;
      const allItemsSelected = currentTabContent.every((tabItem) =>
        newSelectedItems.includes(tabItem)
      );

      // 전체 선택 상태 업데이트
      setAllSelected((prevAllSelected) => ({
        ...prevAllSelected,
        [selectedTab]: allItemsSelected,
      }));
      return newSelectedItems;
    });
  };

  const handleSelectAll = () => {
    const currentTabContent = tabs.find(
      (tab) => tab.name === selectedTab
    ).content;
    if (allSelected[selectedTab]) {
      // 전체 해제
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => !currentTabContent.includes(item))
      );
    } else {
      // 전체 선택
      setSelectedItems((prevItems) => [
        ...new Set([...prevItems, ...currentTabContent]),
      ]);
    }
    setAllSelected((prevAllSelected) => ({
      ...prevAllSelected,
      [selectedTab]: !allSelected[selectedTab],
    }));
    console.log(selectedItems);
  };
  return (
    <>
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 1.</p>
        <p className="text-2xl">
          <span className="font-bold">연결할 금융사를 선택</span>해주세요.
        </p>
      </div>
      <div className="flex flex-row mt-[2vh] mb-[4vh] space-x-4 border-b-[0.2vh] border-gray-300 tabs">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab px-[0.5vw] py-2 ${
              selectedTab === tab.name
                ? "border-b-[0.2vh] border-main_yellow font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="w-[88vw] content">
        <div className="flex flex-row justify-end w-[90vw] gap-2 ">
          <p className="text-gray-400">전체선택</p>
          <label className="relative inline-block cursor-pointer checkbox-container">
            <input
              type="checkbox"
              className="absolute opacity-0 hidden-checkbox peer"
              checked={allSelected[selectedTab]}
              onChange={handleSelectAll}
            />
            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full custom-checkbox peer-checked:bg-main_yellow peer-checked:border-main_yellow">
              <svg
                className="w-4 h-4 text-gray-400 peer-checked:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </label>
        </div>
        {tabs
          .find((tab) => tab.name === selectedTab)
          .content.map((item, index) => (
            <div
              key={item}
              className="flex flex-row items-center w-full h-[7vh] border-b-[0.1vh] item border-input_color mt-[1vh] gap-2"
            >
              <img className="h-[3vh]" src={logo} alt="logo" />

              <div key={item} className="w-[78vw] py-2 ">
                {item}
              </div>

              <label className="relative inline-block cursor-pointer checkbox-container">
                <input
                  type="checkbox"
                  className="absolute opacity-0 hidden-checkbox peer"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full custom-checkbox peer-checked:bg-main_yellow peer-checked:border-main_yellow">
                  <svg
                    className="w-4 h-4 text-gray-400 peer-checked:text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </label>
            </div>
          ))}
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={handleButtonClick}
      >
        선택완료
      </Button>
    </>
  );
}
