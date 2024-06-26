import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import characters from "../../../assets/icons/diagnosis-main.svg";
import Button from "../../../components/Button";
import TopBar from "../../../components/common/topBar/TopBar";
import useUserStore from "../../../store/userStore";

export default function DiagnosisStartPage() {
  const navigate = useNavigate();
  const user = useUserStore((store) => store.user);
  const alertFunc = () => {
    alert("로그인 후 이용해주세요!");
    navigate("/login");
  };
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
          <Button
            onClick={() => {
              user?.name === "방문자" ? alertFunc() : navigate("test");
            }}
          >
            테스트 하러가기
          </Button>
          {user?.name === "방문자" ? null : (
            <Button onClick={() => navigate("result")}>이전 결과 보기</Button>
          )}
        </div>
      </div>
    </>
  );
}
