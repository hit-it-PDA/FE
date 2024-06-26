import React, { useState, useRef } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";
// apis
import { postAuthNumber, postNumber } from "../../../lib/apis/mydataApi";
export default function AccountNumber({ handleNextPage, phone }) {
  const navigate = useNavigate();

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState("");

  const firstNumber = useRef(null);
  const secondNumber = useRef(null);
  const thirdNumber = useRef(null);
  const fourthNumber = useRef(null);

  const fetchPostAuthNumber = async () => {
    try {
      const authNum = numberSave();
      console.log(authNum);
      const reqBody = { phone: phone, certificationNumber: authNum };
      const response = await postAuthNumber(reqBody);
      if (response) setIsLoading(false);
      console.log(response.status);
      if (response.status === 500) {
        window.alert("번호를 다시 입력하세요");
      } else {
        handleNextPage();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPostNumber = async (phone) => {
    try {
      const reqBody = { phone: phone };
      const response = await postNumber(reqBody);
      console.log(response);
      if (response.data.success === false) {
        window.alert("번호를 다시 입력하세요.");
      } else {
        console.log(response);
        window.alert("재발송되었습니다.");
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

  const numberSave = () => {
    const number = `${first}${second}${third}${fourth}`;
    console.log(number);
    setNumber(number);
    return number;
  };
  return (
    <>
      {isLoading ? (
        <div className="absolute flex w-full h-full opacity-90">
          <div className="w-full h-[90vh] flex items-center justify-center">
            <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
          </div>
        </div>
      ) : null}
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

      <div className="fixed flex flex-col bottom-5">
        <div className="mx-auto flex flex-row justify-center w-[50vw] gap-2">
          <p className="font-bold text-input_color">번호가 안왔나요?</p>
          <button className="underline" onClick={() => fetchPostNumber(phone)}>
            재발송
          </button>
        </div>
        <Button
          className={"w-[90vw] mt-[4vh] "}
          onClick={() => {
            fetchPostAuthNumber();
            setIsLoading(true);
          }}
        >
          다음
        </Button>
      </div>
    </>
  );
}
