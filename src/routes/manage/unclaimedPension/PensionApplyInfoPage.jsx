import React from "react";
import TopBar from "../../../components/common/topBar/TopBar";

// icons
import warning from "../../../assets/icons/warning.svg";

export default function PensionApplyInfoPage() {
  return (
    <div>
      <TopBar type={2} />
      <div className="flex flex-col items-start w-full">
        <div className="bg-[#375AFF] w-full p-5 flex flex-col justify-between">
          <span className="text-white text-[20px] font-bold">
            미청구 퇴직연금 신청방법 안내
          </span>
          <span className="text-[12px] text-[#DDDDDD] whitespace-pre-line mt-2">
            {`퇴직연금 적립금이 남아있는 퇴직자는 
            언제든지 퇴직연금사업자(금융기관)에 지급신청을 할 수 있습니다.`}
          </span>
        </div>
        <div className="p-5">
          <span className="text-[20px] font-bold">📌 제출서류</span>
          <div className="flex flex-col px-5">
            <span className="font-bold text-[18px]">
              - 필수제출 : 신분증 및 지급신청서
            </span>
            <span className="text-[15px] pl-3">
              ※ 지급신청서 양식은 해당 퇴직연금사업자(금융기관) 홈페이지에서
              다운로드 가능
            </span>
            <span className="font-bold mt-5 text-[18px]">
              - 사업장 상태가 '폐업추정'일 경우 : 퇴직사실 증명용 자료 (아래
              자료 중 1개 추가제출)
            </span>
            <div className="text-[15px] pl-3 flex flex-col">
              <span>
                ㅇ 고용보험 피보험자격이력내역서 (발급처 : 고용보험 홈페이지)
              </span>
              <span>
                ㅇ 국민연금가입자 가입증명서 (발급처 : 정부24 또는
                국민연금공단지사)
              </span>
              <span>
                ㅇ 건강보험자격득실 확인서 (발급처 : 국민건강보험 사이버
                민원센터)
              </span>
            </div>
            <span className="font-bold mt-5 text-[18px]">
              - 사업장 상태가 '기타'일 경우 : 미청구퇴직연금 수령 가능여부,
              제출서류 등을 해당 금융기관으로 연락하여 최종 확인
            </span>
          </div>
          <div className="flex flex-col py-5 my-5 border-t">
            <div className="flex items-center mb-2">
              <img src={warning} className="mr-1" />
              <span className="text-[20px] font-bold">주의사항</span>
            </div>
            <div className="flex flex-col px-5">
              <span className="whitespace-pre-line text-[13px]">
                {`∙ 미청구퇴직연금 지급 심사과정에서 추가적인 서류가 징구될 수 있습니다.
              ∙ 미청구퇴직연금 신청 및 수령 관련한 자세한 사항은 해당 금융기관 앞 문의바랍니다.`}
              </span>
              <span className="text-[#0029FF] text-[13px] whitespace-pre-line mt-2">
                {`※ 단, 체당금을 지급받은 경우 아래 자료 중 1개를 제출 시 퇴직사실 증명서류 없이 신청가능 
              - 체당금 사실확인 통지서, 체불금품 확인서, 퇴직급여 소송관련 확정판결문`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
