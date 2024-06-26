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
  name,
  ssn,
  email,
  address,
  job,
  purpose,
  source,
}) {
  const [isChecked, setIsChecked] = useState(2);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const PositiveButtonClick = () => {
    setIsChecked(0);
  };
  const NegativeButtonClick = () => {
    setIsChecked(1);
  };

  const validateName = (name) => {
    const nameRegex = /^[가-힣]+$/;
    return nameRegex.test(name);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  };

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    onChangeName(e);
    setIsNameValid(validateName(nameValue));
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    onChangeEmail(e);
    setIsEmailValid(validateEmail(emailValue));
  };

  const nextButtonClick = async () => {
    if (!isEmailValid) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (!isNameValid) {
      window.alert("실명을 입력해주세요.");
      return;
    }
    if (name && ssn && email && address && job && source && purpose)
      handleNextPage();
    if (!name || !ssn || !email || !address || !job || !source || !purpose)
      window.alert("모든 항목을 입력해주세요.");
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
        <div>
          <Input
            type={"text"}
            onChange={handleNameChange}
            placeholder={"ex)홍길동"}
          >
            이름
          </Input>
          {!isNameValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              실명을 입력해주세요
            </p>
          )}
        </div>
        <Input
          type={"number"}
          onChange={onChangeSsn}
          placeholder={"ex)9806291111111"}
        >
          주민등록번호
        </Input>
        <div>
          <Input
            type={"email"}
            onChange={handleEmailChange}
            placeholder={"ex)jj@naver.com"}
          >
            이메일
          </Input>
          {!isEmailValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              이메일 형식에 맞춰주세요
            </p>
          )}
        </div>
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
      <Button
        className={"w-[90vw] mt-[4vh] mb-[2vh]"}
        onClick={nextButtonClick}
      >
        다음
      </Button>
    </div>
  );
}
