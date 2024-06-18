import React from "react";
import logo from "../../assets/logos/check-circle.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function MyDataEndPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-[30vh]">
        <img src={logo} alt="logo" />
        <p className="text-2xl font-bold">마이데이터 연동 완료!</p>
        <p className="text-gray-400">
          마이데이터를 연동해서 내 자산을 모두 확인할 수 있어요.
        </p>
      </div>
      <Button
        className={"fixed bottom-5 w-[90vw]"}
        onClick={() => navigate("/account-create")}
      >
        계좌 개설하기
      </Button>
    </div>
  );
}
