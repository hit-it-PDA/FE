import React, { useState } from "react";
import Button from "../../Button";
export default function MyDataAgree({ handleButtonClick }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 2.</p>
        <p className="text-2xl">
          <span className="font-bold">금융사 연결 약관에 동의</span>해주세요.
        </p>
      </div>
      <div className="flex flex-col items-center w-[90vw] my-[5vh] p-5 bg-[#F6F6F6] rounded-[3vh]">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-[25px] font-bold">개인정보동의</p>
          <label className="relative inline-block cursor-pointer checkbox-container">
            <input
              type="checkbox"
              className="absolute opacity-0 hidden-checkbox peer"
              checked={isChecked}
              onChange={handleCheckboxChange}
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
        <p className="mt-[3vh] w-[85vw] px-2 whitespace-pre-line">
          {`[개인정보 취급 위탁에 대한 동의]
          
          본인 확인 서비스 제공을 위해 개인정보 취급 위탁 동의를 받고자 합니다. 
          아래 보기에서 동의 여부를 선택해 주세요. 

          ∙ 수탁자: 히릿(Hit it!)
          • 개인정보 수집 및 이용 목적: 포트폴리오 추천 등에 필요한 개인화 서비스 제공
          • 수집하는 개인정보 항목: 
            - 금융 정보
            계좌번호 및 은행명, 신용카드 정보(카드번호, 유효기간 등), 대출 및 부채 정보, 보험 가입 내역
            - 거래 정보
            거래 내역(입출금 내역, 카드 사용 내역 등), 금융 상품 가입 내역, 투자 내역
          • 개인정보 보유 및 이용 기간: 수집일로부터 3년 

          ※ 귀하께서는 동의하지 않을 권리가 있습니다. 
          동의하지 않을 경우 서비스를 이용할 수 없음을 알려드립니다. 
          개인정보 취급 위탁에 대해 동의하시나요?`}
        </p>
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={() => {
          if (isChecked) {
            handleButtonClick();
          } else {
            alert("개인정보동의에 체크해주세요!");
          }
        }}
      >
        다음
      </Button>
    </>
  );
}
