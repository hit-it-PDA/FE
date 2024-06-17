import React, { useState } from "react";
import Button from "../../Button";
import Input from "../../Input";

export default function AccountInformation({
  handleNextPage,
  onChangeName,
  onChangeSsn,
  onChangeEmail,
  onChangeAddress,
  onChangeJob,
  onChangePurpose,
  onChangeSource,
  onChangeIsOwner,
}) {
  const [isChecked, setIsChecked] = useState(2);
  const PositiveButtonClick = () => {
    setIsChecked(0);
  };
  const NegativeButtonClick = () => {
    setIsChecked(1);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 2.</p>
        <p className="text-2xl">
          <span className="font-bold">정보를 입력</span>해주세요.
        </p>
      </div>
      <div className="w-[88vw] mt-[3vh] flex flex-col items-center gap-3">
        <Input type={"text"} onChange={onChangeName}>
          이름
        </Input>
        <Input type={"text"} onChange={onChangeSsn}>
          주민등록번호
        </Input>
        <Input type={"text"} onChange={onChangeEmail}>
          이메일
        </Input>
        <Input type={"text"} onChange={onChangeAddress}>
          주소
        </Input>
        <Input type={"text"} onChange={onChangeJob}>
          직업
        </Input>
        <Input type={"text"} onChange={onChangePurpose}>
          거래 목적
        </Input>
        <Input type={"text"} onChange={onChangeSource}>
          자금 출처
        </Input>
        <div className="w-[88vw]">
          <p>계좌의 실 소유주인가요?</p>
          <div className="flex flex-row justify-between mt-3">
            <button
              className={`${
                isChecked === 0
                  ? "w-[40vw] h-[5vh] rounded-[1vh] bg-main text-white font-bold"
                  : "w-[40vw] h-[5vh] rounded-[1vh] border border-gray-300"
              } : `}
              onClick={() => {
                PositiveButtonClick();
                onChangeIsOwner(isChecked);
              }}
            >
              예
            </button>
            <button
              className={`${
                isChecked === 1
                  ? "w-[40vw] h-[5vh] rounded-[1vh] bg-main text-white font-bold"
                  : "w-[40vw] h-[5vh] rounded-[1vh] border border-gray-300"
              } : `}
              onClick={() => {
                NegativeButtonClick();
                onChangeIsOwner(isChecked);
              }}
            >
              아니오
            </button>
          </div>
        </div>
      </div>
      <Button className={"w-[90vw] mt-[4vh] mb-[2vh]"} onClick={handleNextPage}>
        다음
      </Button>
    </div>
  );
}
