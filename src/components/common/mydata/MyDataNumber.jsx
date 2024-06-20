import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";

export default function MyDataNumber({ sendMydata }) {
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

  const numberInputChange = (e, nextInputRef, setValue) => {
    if (e.target.value.length >= 1 && nextInputRef) {
      setValue(e.target.value);
      nextInputRef.current.focus();
    }
  };

  const numberSave = () => {
    const number = `${first}${second}${third}${fourth}`;
    console.log(number);
    setNumber(number);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 4.</p>
        <p className="text-2xl">
          <span className="font-bold">SMS로 전송된</span>
          <br />
          <span className="font-bold">인증번호를 입력</span>해주세요.
        </p>
      </div>
      <div className="w-[88vw] mt-[25vh] flex flex-row justify-center gap-4">
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={firstNumber}
          onChange={(e) => numberInputChange(e, secondNumber, setFirst)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={secondNumber}
          onChange={(e) => numberInputChange(e, thirdNumber, setSecond)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={thirdNumber}
          onChange={(e) => numberInputChange(e, fourthNumber, setThird)}
        />
        <input
          type="number"
          className="w-[20vw] border-gray-200 border-b-2 text-center text-2xl"
          ref={fourthNumber}
          onChange={(e) => numberInputChange(e, fourthNumber, setFourth)}
        />
      </div>

      <div className="fixed flex flex-col bottom-5">
        <div className="mx-auto flex flex-row justify-center w-[50vw] gap-2">
          <p className="font-bold text-input_color">번호가 안왔나요?</p>
          <button className="underline">재발송</button>
        </div>

        <Button
          className={"w-[90vw] mt-[4vh] "}
          onClick={() => {
            numberSave();
            sendMydata();
            navigate("/mydata/end");
          }}
        >
          입력 완료
        </Button>
      </div>
    </div>
  );
}
