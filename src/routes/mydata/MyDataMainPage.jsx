import React from "react";
import logo from "../../assets/mydata_logo.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function MyDataMainPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-[15vh] gap-1">
        <p className="text-2xl font-bold">정찬진님 환영합니다!</p>
        <img src={logo} alt="logo" className="mt-[9vh]" />
        <p className="text-xl font-bold text-center">
          마이데이터 연동을 통해
          <br />
          모든 자산을 조회하고 관리해요!
        </p>
        <p className="text-sm text-gray-400">
          다양한 분야의 데이터를 활용해 맞춤형 서비스를 받아보세요!
        </p>
      </div>
      <div className="flex flex-col items-center mt-[5vh]">
        <button className="text-gray-400 underline">
          [필수]마이데이터 이용약관
        </button>
        <Button
          className={"w-[90vw] mt-[1.5vh]"}
          onClick={() => navigate("start")}
        >
          마이데이터 연동하기
        </Button>
      </div>
    </div>
  );
}
