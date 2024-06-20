import React from "react";
import { useNavigate } from "react-router-dom";
// assets
import logo from "../../assets/logos/invest_logo.jpg";
//components
import Button from "../../components/Button";
import TopBar from "../../components/common/topBar/TopBar";

export default function InvestTestMainPage() {
  const navigate = useNavigate();

  return (
    <>
      <TopBar type={2} />

      <div className="flex flex-col items-center mt-[10vh]">
        <img src={logo} alt="logo" />
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">투자 성향 진단 테스트</p>

          <p className="text-center mt-[1vh] text-gray-400">
            내 <span className="font-bold">투자 성향</span>을 솔직하게
            답변하거나
            <br />
            추천 받고 싶은 <span className="font-bold">포트폴리오 성향</span>
            으로 답변해도 좋아요!
          </p>
          <p className="text-center text-gray-400">
            정확한 <span className="font-bold">포트폴리오 추천</span>을 위해
            투자 성향을 알아볼게요.
          </p>
        </div>

        <div className="fixed flex flex-col text-gray-400 bottom-5">
          <p className="text-sm text-center">
            더보기 탭에서 <span className="font-bold">재진단</span>이 가능하니
            부담없이 진단해주세요 :)
          </p>
          <Button
            className={"w-[90vw] mt-[2vh]"}
            onClick={() => navigate("start")}
          >
            테스트 시작
          </Button>
        </div>
      </div>
    </>
  );
}
