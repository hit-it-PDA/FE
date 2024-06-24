import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// assets
import shinhan from "../../../assets/companyLogos/shinhan.png";
import kb from "../../../assets/companyLogos/kb.png";
import hana from "../../../assets/companyLogos/hana.png";
import lotte from "../../../assets/companyLogos/lotte.png";
import nh from "../../../assets/companyLogos/nh.png";
import woori from "../../../assets/companyLogos/woori.jpeg";
import dgb from "../../../assets/companyLogos/dgb.jpeg";
import kakao from "../../../assets/companyLogos/kakao.png";
import kiwoom from "../../../assets/companyLogos/kiwoom.png";
import ibk from "../../../assets/companyLogos/ibk.png";
import korea from "../../../assets/companyLogos/korea.jpeg";
import mirae from "../../../assets/companyLogos/mirae.png";
import bc_card from "../../../assets/companyLogos/bc_card1.jpeg";
// components
import Button from "../../Button";

export default function MyDataChoose({
  handleButtonClick,
  setSelectedItemsByType,
  selectedItemsByType,
}) {
  const navigate = useNavigate();
  const tabs = [
    {
      name: "은행",
      content: [
        { company: "신한은행", logo: shinhan },
        { company: "NH농협은행", logo: nh },
        { company: "하나은행", logo: hana },
        { company: "IBK기업은행", logo: ibk },
        { company: "카카오뱅크", logo: kakao },
        { company: "KB국민은행", logo: kb },
        { company: "DGB대구은행", logo: dgb },
        { company: "우리은행", logo: woori },
      ],
      type: "bank_accounts",
    },
    {
      name: "증권",
      content: [
        { company: "신한투자증권", logo: shinhan },
        { company: "하나증권", logo: hana },
        { company: "한국투자증권", logo: korea },
        { company: "키움증권", logo: kiwoom },
        { company: "미래에셋대우", logo: mirae },
        { company: "KB증권", logo: kb },
      ],
      type: "security_accounts",
    },
    {
      name: "카드",
      content: [
        { company: "신한카드", logo: shinhan },
        { company: "KB국민카드", logo: kb },
        { company: "BC카드", logo: bc_card },
        { company: "하나카드", logo: hana },
        { company: "롯데카드", logo: lotte },
      ],
      type: "cards",
    },
    {
      name: "대출",
      content: [
        { company: "신한은행", logo: shinhan },
        { company: "NH농협은행", logo: nh },
        { company: "하나은행", logo: hana },
        { company: "우리은행", logo: woori },
        { company: "KB국민은행", logo: kb },
      ],
      type: "loans",
    },
    {
      name: "연금",
      content: [
        { company: "신한은행", logo: shinhan },
        { company: "NH농협은행", logo: nh },
        { company: "하나은행", logo: hana },
        { company: "우리은행", logo: woori },
        { company: "KB국민은행", logo: kb },
      ],
      type: "pensions",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("은행");
  const [allSelected, setAllSelected] = useState({});
  const [selectedItemsByTab, setSelectedItemsByTab] = useState({});

  useEffect(() => {
    const initialAllSelected = {};
    const initialSelectedItemsByTab = {};
    tabs.forEach((tab) => {
      initialAllSelected[tab.name] = false;
      initialSelectedItemsByTab[tab.name] = [];
    });
    setAllSelected(initialAllSelected);
    setSelectedItemsByTab(initialSelectedItemsByTab);
  }, []);

  const handleCheckboxChange = (item) => {
    const currentTab = tabs.find((tab) => tab.name === selectedTab);
    const itemType = currentTab.type;
    setSelectedItemsByTab((prevSelectedItemsByTab) => {
      const newSelectedItems = prevSelectedItemsByTab[selectedTab].includes(
        item.company
      )
        ? prevSelectedItemsByTab[selectedTab].filter(
            (prevItem) => prevItem !== item.company
          )
        : [...prevSelectedItemsByTab[selectedTab], item.company];

      const allItemsSelected = currentTab.content.every((tabItem) =>
        newSelectedItems.includes(tabItem)
      );

      setAllSelected((prevAllSelected) => ({
        ...prevAllSelected,
        [selectedTab]: allItemsSelected,
      }));

      setSelectedItemsByType((prevSelectedItemsByType) => ({
        ...prevSelectedItemsByType,
        [itemType]: newSelectedItems,
      }));

      return {
        ...prevSelectedItemsByTab,
        [selectedTab]: newSelectedItems,
      };
    });
  };

  const handleSelectAll = () => {
    const currentTab = tabs.find((tab) => tab.name === selectedTab);
    // const currentTabContent = currentTab.content;
    const currentTabContent = currentTab.content.map((item) => item.company);
    const itemType = currentTab.type;

    if (allSelected[selectedTab]) {
      setSelectedItemsByTab((prevSelectedItemsByTab) => ({
        ...prevSelectedItemsByTab,
        [selectedTab]: [],
      }));
      setSelectedItemsByType((prevSelectedItemsByType) => ({
        ...prevSelectedItemsByType,
        [itemType]: [],
      }));
    } else {
      setSelectedItemsByTab((prevSelectedItemsByTab) => ({
        ...prevSelectedItemsByTab,
        [selectedTab]: currentTabContent,
      }));
      setSelectedItemsByType((prevSelectedItemsByType) => ({
        ...prevSelectedItemsByType,
        [itemType]: currentTabContent,
      }));
    }

    setAllSelected((prevAllSelected) => ({
      ...prevAllSelected,
      [selectedTab]: !allSelected[selectedTab],
    }));
  };
  const handleButtonClickWrapper = () => {
    handleButtonClick(selectedItemsByType);
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
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab px-[4vw] py-2 ${
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
        <div className="flex flex-row justify-end w-[90vw] gap-2 ">
          <p className="text-gray-400">전체선택</p>
          <label className="relative inline-block cursor-pointer checkbox-container">
            <input
              type="checkbox"
              className="absolute opacity-0 hidden-checkbox peer"
              checked={allSelected[selectedTab]}
              onChange={handleSelectAll}
            />
            <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full custom-checkbox peer-checked:bg-main peer-checked:border-main">
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
              key={index}
              className="flex flex-row items-center w-full h-[7vh] border-b-[0.1vh] item border-input_color mt-[1vh] gap-2"
            >
              <img className="w-[3vh] h-[3vh]" src={item.logo} alt="logo" />

              <div key={item} className="w-[76vw] py-2 ml-3 ">
                {item.company}
              </div>

              <label className="relative inline-block cursor-pointer checkbox-container">
                <input
                  type="checkbox"
                  className="absolute opacity-0 hidden-checkbox peer"
                  checked={
                    selectedItemsByTab[selectedTab]?.includes(item.company) ||
                    false
                  }
                  onChange={() => handleCheckboxChange(item)}
                />
                <span className="flex items-center justify-center w-6 h-6 bg-white border-2 border-gray-300 rounded-full custom-checkbox peer-checked:bg-main peer-checked:border-main">
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
        onClick={handleButtonClickWrapper}
      >
        선택완료
      </Button>
    </>
  );
}
