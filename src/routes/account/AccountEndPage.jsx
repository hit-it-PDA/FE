import React from "react";
import logo from "../../assets/check-circle.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function AccountEndPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-[30vh]">
        <img src={logo} alt="logo" />
        <p className="text-2xl font-bold">계좌 개설 완료!</p>
        <p className="font-bold text-center text-gray-400 mt-[1vh]">
          계좌 개설을 축하드려요!
          <br />
          Hit It과 함께 퇴직연금 투자를 시작해봐요!
        </p>
      </div>
      <Button
        className={"fixed bottom-5 w-[90vw]"}
        onClick={() => navigate("/")}
      >
        홈으로 가기
      </Button>
    </div>
  );
}
