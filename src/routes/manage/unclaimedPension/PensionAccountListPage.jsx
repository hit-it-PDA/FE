import React, { useState } from "react";
import TopBar from "../../../components/common/topBar/TopBar";
import { useNavigate } from "react-router-dom";

// icons
import info from "../../../assets/icons/info.svg";

// modal
import { Sheet } from "react-modal-sheet";

export default function PensionAccountListPage() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <TopBar type={2} />
      <DetailModal isOpen={isOpen} setOpen={setOpen} />
      <div className="w-full flex flex-col relative pb-[8vh] items-start">
        <div className="bg-[#375AFF] w-full p-5 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-white text-[20px] font-bold">
              김유현님의 미청구 퇴직연금
            </span>
            <span className="text-white text-[20px] my-1">총 8,000,000원</span>
            <span className="text-[10px] text-[#DDDDDD]">
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
        <div className="flex flex-col items-center w-full p-5 mt-3">
          <div className="bg-[#E8ECFF] rounded-[25px] w-[90vw] h-[10vh] p-5 flex justify-center">
            <div className="w-[45vw]">
              <div className="flex items-center">
                {/* <img /> */}
                <span className="text-[15px] text-[#717171] font-bold">
                  어쩌구입출금통장
                </span>
              </div>
            </div>
            <div className="w-[40vw] flex flex-col items-end pr-2">
              <span className="text-[#3A3A3A] text-[12px]">
                073-021-038-01-014
              </span>
              <span className="font-bold text-[15px]">9,000,000원</span>
            </div>
            <div className="flex-1" onClick={() => setOpen(true)}>
              df
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailModal = ({ isOpen, setOpen }) => {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      detent={"content-height"}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="p-5">
            <span className="w-full flex justify-center text-[20px] font-bold">
              미청구 퇴직연금 조회
            </span>
            <div className="p-3 border-b">
              <span className="font-bold text-[17px]">신한은행</span>
              <div className="flex items-baseline justify-between">
                <span className="text-[13px]">073-021-038-01-014</span>
                <span className="text-[17px]">9,000,000원</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-3">
              <div className="flex">
                <div className="flex justify-start flex-1">제도 유형</div>
                <div className="flex justify-end flex-1">DC</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">산정 기준일</div>
                <div className="flex justify-end flex-1">2024-06-17</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">관리점명</div>
                <div className="flex justify-end flex-1">강남역점</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">
                  단체명(사용자명)
                </div>
                <div className="flex justify-end flex-1">테라주식회사</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">성명</div>
                <div className="flex justify-end flex-1">홍길동</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">사업장 상태</div>
                <div className="flex justify-end flex-1">폐업확인</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">복수사업자 여부</div>
                <div className="flex justify-end flex-1">개인</div>
              </div>
              <div className="flex">
                <div className="flex justify-start flex-1">담당자 연락처</div>
                <div className="flex justify-end flex-1">1588-5000</div>
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
