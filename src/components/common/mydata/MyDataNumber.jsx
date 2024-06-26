import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import Button from "../../Button";
// apis
import { getAllAssets } from "../../../lib/apis/mydataApi";
import {
  postMydata,
  postAuthNumber,
  postNumber,
} from "../../../lib/apis/mydataApi";
// store
import useUserStore from "../../../store/userStore";

export default function MyDataNumber({ selectedItemsByType, phone }) {
  const navigate = useNavigate();

  const { setAsset } = useUserStore();
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

  const fetchGetAllAssets = async () => {
    try {
      const response = await getAllAssets();
      setAsset(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPostAuthNumber = async () => {
    try {
      const authNum = numberSave();
      console.log(authNum);
      const reqBody = { phone: phone, certificationNumber: authNum };
      const response = await postAuthNumber(reqBody);
      console.log(response.status);
      if (response) setIsLoading(false);
      if (response.status === 500) {
        window.alert("번호를 다시 입력하세요");
      } else {
        await fetchPostData();
        navigate("/mydata/end");
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
  const fetchPostData = async () => {
    try {
      const response = await postMydata(selectedItemsByType);
      console.log(response);
      await fetchGetAllAssets(); // fetchPostData 후에 fetchGetAllAssets 호출
    } catch (error) {
      console.log(error);
    }
  };

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
    return number;
  };

  return (
    <div className="flex flex-col items-center">
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
          <button className="underline" onClick={() => fetchPostNumber(phone)}>
            재발송
          </button>
        </div>

        <Button
          className={"w-[90vw] mt-[4vh] "}
          onClick={() => {
            window.alert("잠시만 기다려주세요!");
            numberSave();
            setIsLoading(true);
            fetchPostAuthNumber();
          }}
        >
          입력 완료
        </Button>
      </div>
    </div>
  );
}
