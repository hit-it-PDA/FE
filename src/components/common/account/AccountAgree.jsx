import React, { useState } from "react";
import Button from "../../Button";

export default function AccountAgree({ handleNextPage }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 1.</p>
        <p className="text-2xl">
          <span className="font-bold">계좌 개설</span>을 위해
          <br />
          <span className="font-bold">개인정보수집에 동의</span>해주세요.
        </p>
      </div>
      <div className="flex flex-col items-center w-[90vw] mt-[10vh] bg-gray-200 pb-[2vh] rounded-[3vh]">
        <div className="flex flex-row justify-between w-[80vw] mt-[2vh]">
          <p className="text-xl font-bold">개인정보동의</p>
          <label className="relative inline-block cursor-pointer checkbox-container">
            <input
              type="checkbox"
              className="absolute opacity-0 hidden-checkbox peer"
              checked={isChecked}
              onChange={handleCheckboxChange}
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
        <p className="mt-[3vh] w-[85vw]">
          [개인정보 취급 위탁에 대한 동의]
          <br />
          (예시) 본인 확인 서비스 제공을 위해 개인정보 취급 위탁 동의를 받고자
          합니다. 아래 보기에서 동의 여부를 선택해 주세요. 수탁자: (주)회사명
          개인정보 수집 및 이용 목적: 회원가입 등에 필요한 본인확인 서비스 제공
          수집하는 개인정보 항목: 이름, 연락처 개인정보 보유 및 이용 기간: 수집
          일로부터 3년 ※ 귀하께서는 동의하지 않을 권리가 있습니다. 동의하지 않을
          경우 서비스를 이용할 수 없음을 알려드립니다. 개인정보 취급 위탁에 대해
          동의하시나요?
        </p>
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={() => {
          if (isChecked) {
            handleNextPage();
          } else {
            alert("개인정보동의 체크해주세요!");
          }
        }}
      >
        다음
      </Button>
    </>
  );
}