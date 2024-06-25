import React, { useEffect, useState } from "react";
// components
import TopBar from "../../components/common/topBar/TopBar";
// store
import useUserStore from "../../store/userStore";
//assets
import shinhan from "../../assets/companyLogos/shinhan.png";
import kb from "../../assets/companyLogos/kb.png";
import hana from "../../assets/companyLogos/hana.png";
import lotte from "../../assets/companyLogos/lotte.png";
import nh from "../../assets/companyLogos/nh.png";
import woori from "../../assets/companyLogos/woori.jpeg";
import dgb from "../../assets/companyLogos/dgb.jpeg";
import kakao from "../../assets/companyLogos/kakao.png";
import kiwoom from "../../assets/companyLogos/kiwoom.png";
import ibk from "../../assets/companyLogos/ibk.png";
import korea from "../../assets/companyLogos/korea.jpeg";
import mirae from "../../assets/companyLogos/mirae.png";
import bc_card from "../../assets/companyLogos/bc_card1.jpeg";
// apis
import {
  getBankAssets,
  getSecurityAssets,
  getCardAssets,
  getLoanAssets,
  getPensionAssets,
} from "../../lib/apis/mydataApi";
export default function AssetAllPage() {
  const user = useUserStore((state) => state.user);
  const [bank, setBank] = useState([]);
  const [security, setSecurity] = useState([]);
  const [card, setCard] = useState([]);
  const [loan, setLoan] = useState([]);
  const [pension, setPension] = useState([]);

  const fetchGetBank = async () => {
    try {
      const response = await getBankAssets();
      setBank(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGetSecurity = async () => {
    try {
      const response = await getSecurityAssets();
      setSecurity(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGetCard = async () => {
    try {
      const response = await getCardAssets();
      setCard(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGetLoan = async () => {
    try {
      const response = await getLoanAssets();
      setLoan(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchGetPension = async () => {
    try {
      const response = await getPensionAssets();
      setPension(response.response);
      console.log(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  const formatNumber = (input) => {
    return input.replace(/(\d{4})(?=\d)/g, "$1-");
  };

  useEffect(() => {
    fetchGetBank();
    fetchGetSecurity();
    fetchGetCard();
    fetchGetLoan();
    fetchGetPension();
  }, []);

  const tabs = [
    { name: "은행", content: bank },
    { name: "증권", content: security },
    { name: "카드", content: card },
    { name: "대출", content: loan },
    { name: "연금", content: pension },
  ];
  const [selectedTab, setSelectedTab] = useState("은행");

  const renderContent = () => {
    switch (selectedTab) {
      case "은행":
        if (bank.length === 0) {
          return (
            <div className="flex flex-row items-center justify-center w-full h-[5vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh]">
              <p className="font-bold text-gray-400">
                보유한 은행상품이 없습니다.
              </p>
            </div>
          );
        }
        return bank.map((item, index) => {
          let logo;
          switch (item.bank_name) {
            case "신한은행":
              logo = shinhan;
              break;
            case "KB국민은행":
              logo = kb;
              break;
            case "우리은행":
              logo = woori;
              break;
            case "NH농협은행":
              logo = nh;
              break;
            case "하나은행":
              logo = hana;
              break;
            case "카카오뱅크":
              logo = kakao;
              break;
            case "IBK기업은행":
              logo = ibk;
              break;
            case "DGB대구은행":
              logo = dgb;
              break;
            default:
              logo = shinhan; // 기본 로고 설정
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-white shadow-lg mt-[1vh] gap-2 rounded-[3vh] py-[10vw]"
            >
              <div className="flex flex-row gap-2 ml-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[3vh] h-[3vh] rounded-[50%]"
                />
                <p className="w-[30vw] h-[5vh] text-[#717171] text-[13px] font-bold">
                  {item.name}
                </p>
              </div>
              <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-3">
                <p className="h-[2.5vh] text-[#3A3A3A] font-medium text-[11px]">
                  {item.account_no}
                </p>
                <p className="h-[2.5vh] font-bold">
                  {item.balance.toLocaleString()}원
                </p>
              </div>
            </div>
          );
        });
      case "증권":
        if (security.length === 0) {
          return (
            <div className="flex flex-row items-center justify-center w-full h-[5vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh]">
              <p className="font-bold text-gray-400">
                보유한 증권상품이 없습니다.
              </p>
            </div>
          );
        }
        return security.map((item, index) => {
          let logo;

          switch (item.security_name) {
            case "신한투자증권":
              logo = shinhan;
              break;
            case "KB증권":
              logo = kb;
              break;
            case "하나증권":
              logo = hana;
              break;
            case "한국투자증권":
              logo = korea;
              break;
            case "미래에셋대우":
              logo = mirae;
              break;
            case "키움증권":
              logo = kiwoom;
              break;
            default:
              logo = shinhan; // 기본 로고 설정
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-white shadow-lg mt-[1vh] gap-2 rounded-[3vh] py-[10vw]"
            >
              <div className="flex flex-row gap-2 ml-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[3vh] h-[3vh] rounded-[50%]"
                />
                <p className="w-[30vw] h-[5vh] text-[#717171] font-bold text-[13px]">
                  {item.security_name}
                </p>
              </div>
              <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-3">
                <p className="h-[2.5vh] text-[#3A3A3A] text-[11px]">
                  {item.account_no}
                </p>
                <p className="h-[2.5vh] font-bold">
                  {item.balance.toLocaleString()}원
                </p>
              </div>
            </div>
          );
        });
      case "카드":
        if (card.length === 0) {
          return (
            <div className="flex flex-row items-center justify-center w-full h-[5vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh]">
              <p className="font-bold text-gray-400">
                보유한 카드상품이 없습니다.
              </p>
            </div>
          );
        }
        return card.map((item, index) => {
          let logo;

          switch (item.company_name) {
            case "신한카드":
              logo = shinhan;
              break;
            case "KB국민카드":
              logo = kb;
              break;
            case "BC카드":
              logo = bc_card;
              break;
            case "롯데카드":
              logo = lotte;
              break;
            case "하나카드":
              logo = hana;
              break;
            default:
              logo = shinhan; // 기본 로고 설정
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-white shadow-lg mt-[1vh] gap-2 rounded-[3vh] py-[10vw]"
            >
              <div className="flex flex-row gap-2 ml-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[3vh] h-[3vh] rounded-[50%]"
                />
                <p className="w-[30vw] h-[5vh] text-[#717171] text-[13px] font-bold">
                  {item.card_name}
                </p>
              </div>
              <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-3">
                <p className="h-[2.5vh] font-bold text-[#3A3A3A] text-[13px]">
                  {formatNumber(item.card_no)}
                </p>
              </div>
            </div>
          );
        });
      case "대출":
        if (loan.length === 0) {
          return (
            <div className="flex flex-row items-center justify-center w-full h-[5vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh]">
              <p className="font-bold text-gray-400">
                보유한 대출상품이 없습니다.
              </p>
            </div>
          );
        }
        return loan.map((item, index) => {
          let logo;
          switch (item.company_name) {
            case "신한은행":
              logo = shinhan;
              break;
            case "KB국민은행":
              logo = kb;
              break;
            case "우리은행":
              logo = woori;
              break;
            case "NH농협은행":
              logo = nh;
              break;
            case "하나은행":
              logo = hana;
              break;
            case "카카오뱅크":
              logo = kakao;
              break;
            case "IBK기업은행":
              logo = ibk;
              break;
            case "DGB대구은행":
              logo = dgb;
              break;
            default:
              logo = shinhan; // 기본 로고 설정
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-white shadow-lg mt-[1vh] gap-2 rounded-[3vh] py-[10vw]"
            >
              <div className="flex flex-row gap-2 ml-3">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[3vh] h-[3vh] rounded-[50%]"
                />
                <p className="w-[33vw] h-[3vh] text-[#717171] font-bold">
                  {item.loan_type}
                </p>
              </div>
              <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-3">
                <p className="h-[2.5vh] text-[#3A3A3A] text-[11px] font-medium">
                  금리&nbsp;{item.interest_rate}%
                </p>
                <p className="h-[2.5vh] text-[#3A3A3A] text-[11px] font-medium">
                  대출금액
                </p>
                <p className="h-[2.5vh] font-bold">
                  {item.loan_amount.toLocaleString()}원
                </p>
              </div>
            </div>
          );
        });
      case "연금":
        if (pension.length === 0) {
          return (
            <div className="flex flex-row items-center justify-center w-full h-[5vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh]">
              <p className="font-bold text-gray-400">
                보유한 연금상품이 없습니다.
              </p>
            </div>
          );
        }
        return pension.map((item, index) => {
          let logo;
          switch (item.company_name) {
            case "신한은행":
              logo = shinhan;
              break;
            case "KB국민은행":
              logo = kb;
              break;
            case "우리은행":
              logo = woori;
              break;
            case "NH농협은행":
              logo = nh;
              break;
            case "하나은행":
              logo = hana;
              break;
            case "카카오뱅크":
              logo = kakao;
              break;
            case "IBK기업은행":
              logo = ibk;
              break;
            case "DGB대구은행":
              logo = dgb;
              break;
            default:
              logo = shinhan; // 기본 로고 설정
              break;
          }
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center w-full h-[7vh] mb-[2.5vh] bg-white mt-[1vh] gap-2 rounded-[3vh] py-[10vw] shadow-lg"
            >
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 ml-3">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-[3vh] h-[3vh] rounded-[50%]"
                  />
                  <p className="w-[40vw] h-[3vh] text-[#717171] font-bold text-[13px]">
                    {item.pension_name.slice(0, 9)}
                  </p>
                </div>
                <div className="bg-[#D9D9D9] text-[#3A3A3A] w-[10vw] text-center rounded-[10px] text-[8px] ml-10">
                  {item.pension_type}
                </div>
              </div>
              <div className="flex flex-col justify-center items-end w-[45vw] h-[3vh] mr-3">
                <p className="h-[2.5vh] text-[#3A3A3A] text-[11px] font-medium">
                  금리&nbsp;{item.interest_rate}%
                </p>
                <p className="h-[2.5vh] font-bold">
                  {Number(item.evaluation_amount).toLocaleString()}원
                </p>
              </div>
            </div>
          );
        });
    }
  };
  return (
    <div>
      <TopBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-[90vw]">
          <p>{user.name}님의 총 자산</p>
          <p className="font-semibold text-[20px]">
            {user.asset.toLocaleString()}원
          </p>
        </div>
        <div className="flex flex-row mt-[1vh] mb-[3vh] space-x-4 border-b-[0.2vh] border-gray-300 tabs">
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
        <div className="w-[88vw] content">{renderContent()}</div>
      </div>
    </div>
  );
}
