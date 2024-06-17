import React from "react";
import TopBar from "../../../components/common/topBar/TopBar";

// icons
import warning from "../../../assets/icons/warning.svg";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function ManageUnclaimedPensionPage() {
  const navigate = useNavigate();
  return (
    <div>
      <TopBar type={2} />
      <div className="w-full flex flex-col relative pb-[8vh] items-start">
        <div className="bg-[#375AFF] w-full p-5 flex flex-col justify-between">
          <div className="flex flex-col mb-7">
            <span className="text-[25px] text-white font-bold">
              미청구 퇴직연금 조회
            </span>
            <span className="text-[18px] text-white">
              미처 찾아가지 못한 퇴직연금을 찾아드려요!
            </span>
          </div>
          <span className="text-[13px] text-[#DDDDDD] whitespace-pre-line">
            {`갑작스러운 폐업, 가입 여부 미확인 등의 이유로
            근로자가 미처 찾아가지 못한 퇴직연금을 간편하게 확인할 수 있어요.`}
          </span>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">
              📌 미청구 퇴직연금 조회 서비스란?
            </span>
            <span className="text-[15px] mt-2 px-5">
              <span className="font-bold text-[16px] text-[#375AFF]">
                회사의 폐업 등으로 퇴직한 근로자에게 지급되지 않은 퇴직연금을
                조회하는 서비스
              </span>
              입니다.
              <br /> 재직 중인 회사에 대한 일반 퇴직 연금 정보는 조회되지
              않습니다.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">
              📌 퇴직연금 제도 유형 알아보기
            </span>
            <div className="flex flex-col mt-2">
              <div className="flex flex-col px-5 gap-3">
                <div>
                  <p className="text-[16px] font-bold ">
                    1. 확정급여형 퇴직연금(DB)
                  </p>
                  <span>
                    회사가 운용상품을 결정하고, 퇴직 시 직전 3개월 평균임금과
                    근속연수에 따라 근로자에게 퇴직급여 총액을 지급하는 제도
                  </span>
                </div>
                <div>
                  <p className="text-[16px] font-bold ">
                    2. 확정기여형 퇴직연금(DC)
                  </p>
                  <span>
                    회사가 매년 연간 임금총액의 일정비율(1/12 이상)의 퇴직급여를
                    근로자 귀속분으로 적립하고, 근로자가 운용상품을 결정하는
                    제도
                  </span>
                </div>
                <div>
                  <p className="text-[16px] font-bold">3. 기업형 IRP</p>
                  <span>
                    상시 근로자 수 10인 미만인 기업이 개별 근로자의 동의를
                    받거나 근로자의 요구에 따라 IRP를 설정하는 경우 해당
                    근로자에 대해 퇴직급여제도를 설정한 것으로 인정하는 제도
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t py-5">
            <div className="flex items-center">
              <img src={warning} className="mr-1" />
              <span className="text-[20px] font-bold">조회 가능 금융 기관</span>
            </div>
            <div className="px-5 mt-2 flex gap-3 flex-col">
              <div className="flex items-center">
                <span className="w-[10vw] font-bold">은행</span>
                <span className="flex-1 text-[12px]">
                  산업은행, 기업은행, 국민은행, 농협은행, 우리은행, 대구은행,
                  부산은행, 광주은행, 경남은행, 하나은행, 신한은행
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[10vw] font-bold">증권</span>
                <span className="flex-1 text-[12px]">
                  신한투자증권, 한국투자증권, 대신증권, 미래에셋증권, 신영증권,
                  NH투자증권, KB증권, 한화투자증권, 현대차증권, 유안타증권,
                  삼성증권, 하이투자증권, 하나증권
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[10vw] font-bold">보험</span>
                <span className="flex-1 text-[12px]">
                  한화생명, 삼성생명, 흥국생명, 교보생명, 신한라이프생명,
                  푸본현대생명, 미래에셋생명, IBK연금, DB생명, 동양생명보험,
                  롯데손해보험, 삼성화재해상, 현대해상화재, DB손해보험,
                  KB손해보험
                </span>
              </div>
              <div className="flex items-center">
                <span className="w-[10vw] font-bold">기타</span>
                <span className="flex-1 text-[12px]">근로복지공단</span>
              </div>
            </div>
          </div>
        </div>
        <Button
          className={"fixed bottom-[10vh] w-[90vw] self-center"}
          onClick={() => navigate("list")}
        >
          조회하기
        </Button>
      </div>
    </div>
  );
}
