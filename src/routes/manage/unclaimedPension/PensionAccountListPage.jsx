import React, { useState, useEffect } from "react";
import TopBar from "../../../components/common/topBar/TopBar";
import { useNavigate } from "react-router-dom";

// icons
import info from "../../../assets/icons/info.svg";
import arrow from "../../../assets/icons/cheveron-right.svg";

// logos
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

// modal
import { Sheet } from "react-modal-sheet";

// apis
import { getPensionAccount } from "../../../lib/apis/pensionApi";

// store
import useUserStore from "../../../store/userStore";

export default function PensionAccountListPage() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isSelected, setIsSelected] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [total, setTotal] = useState(0);
  const LOGOS = {
    신한은행: shinhan,
    NH농협은행: nh,
    하나은행: hana,
    IBK기업은행: ibk,
    카카오뱅크: kakao,
    KB국민은행: kb,
    DGB대구은행: dgb,
    우리은행: woori,
    신한투자증권: shinhan,
    하나증권: hana,
    한국투자증권: korea,
    키움증권: kiwoom,
    미래에셋대우: mirae,
    KB증권: kb,
  };

  const getData = async () => {
    const data = await getPensionAccount();
    setAccountData(data.response);
    const total = await data.response.reduce((accumulator, elem) => {
      return accumulator + Number(elem.balance);
    }, 0);
    setTotal(total);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <TopBar type={2} />
      <DetailModal isOpen={isOpen} setOpen={setOpen} isSelected={isSelected} />
      <div className="w-full flex flex-col relative pb-[8vh] items-start">
        <div className="bg-[#375AFF] w-full p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-white text-[20px] font-bold">
              {user.name}님의 미청구 퇴직연금
            </span>
            <span className="text-white text-[20px] my-1">
              총 {total?.toLocaleString()}원
            </span>
            <span className="text-[12px] text-[#DDDDDD]">
              미청구 퇴직연금 조회정보는 해당 금융기관으로부터 제공받은
              정보입니다. 동 정보에 대한 문의는 해당 금융기관 고객센터로
              해주시길 바랍니다.
            </span>
          </div>
          <div
            className="flex items-center justify-end mt-5"
            onClick={() => navigate("../apply-info")}
          >
            <img src={info} />
            <span className="text-white text-[13px] ml-1">
              미청구 퇴직연금 신청방법
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-5 p-5 mt-3">
          {accountData?.length > 0 ? (
            accountData.map((elem, index) => (
              <AccountListComponent
                key={index}
                data={elem}
                setOpen={setOpen}
                setIsSelected={setIsSelected}
                logo={LOGOS[elem.company_name]}
              />
            ))
          ) : (
            <span>데이터가 없습니다.</span>
          )}
        </div>
      </div>
    </div>
  );
}

const AccountListComponent = ({ data, setOpen, setIsSelected, logo }) => {
  return (
    <div className="shadow-md rounded-[25px] w-[90vw] p-5 flex">
      <div className="w-[45vw]">
        <div className="flex items-center gap-1">
          <img src={logo} className="rounded-full w-[20px] h-[20px]" />
          <span className="truncate text-[15px] text-[#717171] font-bold">
            {data.pension_name}
          </span>
        </div>
      </div>
      <div className="w-[30vw] flex flex-col items-end pr-2">
        <span className="text-[#3A3A3A] text-[10px]">{data.account_no}</span>
        <span className="font-bold text-[15px]">
          {data?.balance?.toLocaleString()}원
        </span>
      </div>
      <img
        src={arrow}
        className="flex-1"
        onClick={() => {
          setOpen(true);
          setIsSelected(data);
        }}
      />
    </div>
  );
};

const DetailModal = ({ isOpen, setOpen, isSelected }) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      detent={"content-height"}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="px-5 pb-5">
            <span className="w-full flex justify-center text-[20px] font-bold">
              미청구 퇴직연금 조회
            </span>
            <div className="p-3 border-b">
              <div className="flex items-center gap-1">
                <span className="text-[17px] font-bold">
                  {isSelected.pension_name}
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[13px]">{isSelected.account_no}</span>
                <span className="text-[17px]">
                  {isSelected?.balance?.toLocaleString()}원
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-3">
              <div className="flex">
                <div className="flex justify-start flex-1">제도 유형</div>
                <div className="flex justify-end flex-1">
                  {isSelected.pension_type}
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">산정 기준일</div>
                <div className="flex justify-end flex-1">
                  {isSelected?.expiration_date?.slice(0, 10)}
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">
                  단체명(사용자명)
                </div>
                <div className="flex justify-end flex-1">OO주식회사</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">사업장 상태</div>
                <div className="flex justify-end flex-1">폐업확인</div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <button
                className="my-2 px-10 py-2 rounded-[25px] bg-[#375AFF] text-white font-bold"
                onClick={() => setOpen(false)}
              >
                확인
              </button>
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
};
