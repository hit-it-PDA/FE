import React from "react";
import { useNavigate } from "react-router-dom";
// assets
import logo from "../../assets/logos/logo.svg";
import kakao from "../../assets/logos/kakao.svg";
// components
import Button from "../../components/Button";
import Input from "../../components/Input";
// hooks
import useInput from "../../hooks/useInput";
//apis
import { login } from "../../lib/apis/userApi";
import { getAllAssets, getMydata } from "../../lib/apis/mydataApi";
// store
import useUserStore from "../../store/userStore";

export default function LoginPage() {
  const [email, onChangeEmail] = useInput("");
  const [pwd, onChangePwd] = useInput("");
  const navigate = useNavigate();

  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const setUser = useUserStore((state) => state.setUser);
  const { setAsset } = useUserStore();

  const fetchGetAllAssets = async () => {
    try {
      const response = await getAllAssets();
      setAsset(response.response);
    } catch (error) {
      console.log(error);
    }
  };

  const LoginClick = async (e) => {
    const reqBody = {
      email,
      password: pwd,
    };
    const response = await login(reqBody);
    console.log(response);
    const status_code = response.status;

    if (status_code === 400) {
      window.alert("이메일 혹은 비밀번호를 확인하세요.");
    } else if (status_code === 200) {
      const userInfo = response.data.response.userInfo;
      setUser(userInfo);
      fetchGetAllAssets();
      navigate("/");
    }
  };
  const user = useUserStore((state) => state.user);
  const SignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <img className="mx-auto mt-[10vh] mb-[10vh]" src={logo} alt="logo" />
      <div className="flex flex-col items-center mt-[3vh] mb-[2vh]">
        <div>
          <Input type={"text"} onChange={onChangeEmail}>
            이메일
          </Input>
        </div>
        <div>
          <Input type={"password"} onChange={onChangePwd}>
            비밀번호
          </Input>
        </div>
        <Button onClick={(e) => LoginClick(e)} className={"w-[90vw] mt-[4vh]"}>
          로그인
        </Button>
      </div>
      <div className="mx-auto w-[90vw] bg-input_color h-[0.2vh]"></div>
      <div className="flex flex-row justify-center mx-auto w-[80vw] py-[0.5vh] my-[2vh] gap-8 text-center border border-gray-300">
        <img src={kakao} alt="kakao" />
        <a
          className="my-auto"
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}`}
        >
          카카오톡 로그인
        </a>
      </div>
      <div className="flex flex-row justify-center w-full gap-2 mx-auto">
        <p className="px-2 font-bold text-input_color">회원이 아니라면?</p>
        <button className="px-2 underline" onClick={SignUpClick}>
          회원가입
        </button>
      </div>
    </div>
  );
}
