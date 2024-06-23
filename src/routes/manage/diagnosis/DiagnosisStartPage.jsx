import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import characters from "../../../assets/icons/diagnosis-main.svg";
import Button from "../../../components/Button";
import TopBar from "../../../components/common/topBar/TopBar";

export default function DiagnosisStartPage() {
  const navigate = useNavigate();
  return (
    <>
      <TopBar type={2} />
      <div className="flex flex-col items-center justify-between h-[83vh] px-5 py-10">
        <div className="flex flex-col items-center">
          <img src={characters} className="w-full" />
          <p className="text-[25px] font-bold">노후 준비 종합 진단</p>
          <span className="mt-2 text-center whitespace-pre-line">
            {`체계적이고 건강한 노후 생활을 위해 
          재무 상태와 자산 수명을 진단해보세요! `}
          </span>
        </div>
        <div className="flex flex-col w-full gap-3">
          <Button onClick={() => navigate("test")}>테스트 하러가기</Button>
          <Button onClick={() => navigate("result")}>이전 결과 보기</Button>
        </div>
      </div>
    </>
  );
}
