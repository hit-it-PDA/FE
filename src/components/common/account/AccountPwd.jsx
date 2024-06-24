import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Button";
// store
import useUserStore from "../../../store/userStore";
// apis
import { postAccount } from "../../../lib/apis/accountApi";

export default function AccountPwd({ handleNextPage, name, balance }) {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const [pwd, setPwd] = useState("");

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

  const fetchPostAccount = async () => {
    try {
      const pwd = pwdSave();
      console.log(pwd);
      const reqBody = {
        name: user.name,
        ssn: user.birthdate,
        password: pwd,
        balance: balance,
      };
      const response = await postAccount(reqBody);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const pwdSave = () => {
    const pwd = `${first}${second}${third}${fourth}`;
    console.log(pwd);
    setPwd(pwd);
    return pwd;
  };
  return (
    <>
      <div className="w-[88vw] mt-[3vh]">
        <p>STEP 5.</p>
        <p className="text-2xl">
          <span className="font-bold">계좌 비밀번호를</span>입력해주세요.
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
          fetchPostAccount().then(() => navigate("/account-create/end"));
        }}
      >
        다음
      </Button>
    </>
  );
}
