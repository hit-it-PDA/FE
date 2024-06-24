import React, { useState, useRef } from "react";
import Button from "../../Button";

// apis
import { postNumber } from "../../../lib/apis/mydataApi";

export default function AccountPhone({ handleNextPage, setPhone }) {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  const fetchPostNumber = async () => {
    try {
      const phone = phoneNumberSave();
      const reqBody = { phone: phone };
      console.log(reqBody);
      const response = await postNumber(reqBody);
      if (response.data.success === false) {
        window.alert("번호를 다시 입력하세요.");
      } else {
        console.log(response);
        handleNextPage();
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  const phoneNumberSave = () => {
    const phoneNumber = `${first}${second}${third}`;
    console.log(phoneNumber);
    setPhone(phoneNumber);
    return phoneNumber;
  };

  return (
    <>
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
          value={first}
          onChange={(e) => handleInputChange(e, 3, secondRef, setFirst)}
        />
        <p className="font-black text-gray-300">─</p>
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={secondRef}
          value={second}
          onChange={(e) => handleInputChange(e, 4, thirdRef, setSecond)}
        />
        <p className="font-black text-gray-300">─</p>
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={thirdRef}
          value={third}
          onChange={(e) => handleInputChange(e, 4, null, setThird)}
        />
      </div>
      <Button
        className={"w-[90vw] mt-[4vh] fixed bottom-5"}
        onClick={fetchPostNumber}
      >
        다음
      </Button>
    </>
  );
}
