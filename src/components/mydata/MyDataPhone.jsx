import React, { useRef, useState } from "react";
import Button from "../Button";

export default function MyDataPhone({ handleButtonClick }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [phone, setPhone] = useState("");

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const threeInputChange = (e, nextInputRef, setValue) => {
    if (e.target.value.length >= 3 && nextInputRef) {
      setValue(e.target.value);
      nextInputRef.current.focus();
    }
  };

  const fourInputChange = (e, nextInputRef, setValue) => {
    if (e.target.value.length >= 4 && nextInputRef) {
      setValue(e.target.value);
      nextInputRef.current.focus();
    }
  };

  const phoneNumberSave = () => {
    const phoneNumber = `${first}-${second}-${third}`;
    console.log(phoneNumber);
    setPhone(phoneNumber);
    // handleButtonClick(phoneNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 3.</p>
        <p className="text-2xl">
          <span className="font-bold">SMS 인증</span>을 위해
          <br />
          <span className="font-bold">휴대폰 번호를 입력</span>해주세요.
        </p>
      </div>
      <div className="w-[88vw] mt-[25vh] flex flex-row justify-center gap-4">
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={firstRef}
          onChange={(e) => threeInputChange(e, secondRef, setFirst)}
        />
        <p className="font-black text-gray-300">─</p>
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={secondRef}
          onChange={(e) => fourInputChange(e, thirdRef, setSecond)}
        />
        <p className="font-black text-gray-300">─</p>
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={thirdRef}
          onChange={(e) => fourInputChange(e, thirdRef, setThird)}
        />
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={() => {
          phoneNumberSave();
          handleButtonClick();
        }}
      >
        다음
      </Button>
    </div>
  );
}
