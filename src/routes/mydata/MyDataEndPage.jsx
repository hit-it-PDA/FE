import React from "react";
import logo from "../../assets/check-circle.svg";
import Button from "../../components/Button";

export default function MyDataEndPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center mt-[30vh]">
        <img src={logo} alt="logo" />
        <p className="text-2xl font-bold">마이데이터 연동 완료!</p>
        <p className="text-gray-400">
          마이데이터를 연동해서 내 자산을 모두 확인할 수 있어요.
        </p>
      </div>
      <Button className={"fixed bottom-5 w-[90vw]"}>계좌 개설하기</Button>
    </div>
  );
}
