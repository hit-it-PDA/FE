import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logos/logo.svg";
import kakao from "../../assets/logos/kakao.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const LoginClick = () => {
    if (email && pwd) alert(`${email}입니다.`);
    else alert("이메일 또는 비밀번호 입력하세요.");
  };
  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  };
  const onPwdchange = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
    console.log(pwd);
  };
  const SignUpClick = () => {
    navigate("/signup");
  };
  const KakaoClick = () => {
    alert("카카오 로그인입니다!");
  };
  return (
    <div>
      <img className="mx-auto mt-[10vh] mb-[10vh]" src={logo} alt="logo" />
      <div className="flex flex-col items-center mt-[3vh] mb-[2vh]">
        <div>
          <Input type={"text"} onChange={onEmailChange}>
            이메일
          </Input>
        </div>
        <div>
          <Input type={"password"} onChange={onPwdchange}>
            비밀번호
          </Input>
        </div>
        <Button onClick={LoginClick} className={"w-[90vw] mt-[4vh]"}>
          로그인
        </Button>
      </div>
      <div className="mx-auto w-[90vw] bg-input_color h-[0.2vh]"></div>
      <div className="flex flex-row justify-center mx-auto w-[80vw] py-[0.5vh] my-[2vh] gap-8 text-center border border-gray-300">
        <img src={kakao} alt="kakao" />
        <div className="my-auto" onClick={KakaoClick}>
          카카오톡 로그인
        </div>
      </div>
      <div className="mx-auto flex flex-row justify-center w-[50vw] gap-2">
        <p className="font-bold text-input_color">회원이 아니라면?</p>
        <button className="underline" onClick={SignUpClick}>
          회원가입
        </button>
      </div>
    </div>
  );
}
