import React, { useState, useRef } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function AccountNumber({ handleNextPage }) {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [number, setNumber] = useState("");

  const firstNumber = useRef(null);
  const secondNumber = useRef(null);
  const thirdNumber = useRef(null);
  const fourthNumber = useRef(null);

  const handleInputChange = (e, maxLength, nextInputRef, setValue) => {
    let value = e.target.value;
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setValue(value);
    if (value.length === maxLength && nextInputRef) {
      nextInputRef.current.focus();
    }
  };

  const numberSave = () => {
    const number = `${first}${second}${third}${fourth}`;
    console.log(number);
    setNumber(number);
  };
  return (
    <>
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 4.</p>
        <p className="text-2xl">
          <span className="font-bold">SMS로 인증</span>된 전송된
          <br />
          <span className="font-bold">인증 번호를 입력</span>해주세요.
        </p>
      </div>
      <div className="w-[88vw] mt-[25vh] flex flex-row justify-center gap-4">
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={firstNumber}
          value={first}
          onChange={(e) => handleInputChange(e, 1, secondNumber, setFirst)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={secondNumber}
          value={second}
          onChange={(e) => handleInputChange(e, 1, thirdNumber, setSecond)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={thirdNumber}
          value={third}
          onChange={(e) => handleInputChange(e, 1, fourthNumber, setThird)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={fourthNumber}
          value={fourth}
          onChange={(e) => handleInputChange(e, 1, null, setFourth)}
        />
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={() => {
          numberSave();
          handleNextPage();
        }}
      >
        다음
      </Button>
    </>
  );
}
