import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
// icons
import downArrow from "../../assets/icons/downArrow.svg";

// components
import TopBar from "../../components/common/topBar/TopBar";
import RecommendComponent from "../../components/home/RecommendComponent";
import Tab from "../../components/home/TabComponent";
import RobotAnalyzing from "../../components/home/RobotAnalyzing";

export default function HomePage() {
  const navigate = useNavigate();
  const [isSelected, setSelected] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const { clearUser } = useUserStore();

  const handleLogout = () => {
    clearUser(); // 유저 정보 초기화
    localStorage.removeItem("accessToken"); // localStorage에서 accessToken 제거
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) setIsLogin(true);
  }, []);

  return (
    <div>
      <TopBar type={0} />
      <button onClick={handleLogout}>로그아웃</button>
      <div className="flex flex-col items-center justify-center w-screen">
        {/** 전체/개인화 탭 */}
        <div className="h-[5vh] w-11/12 bg-white flex flex-row items-center border-b">
          <Tab
            type={0}
            isSelected={isSelected === 0}
            setSelected={setSelected}
          />
          <Tab
            type={1}
            isSelected={isSelected === 1}
            setSelected={setSelected}
          />
        </div>
        <div className="flex flex-col w-full">
          {/** 로그인 O, 투자 성향 진단 테스트 X -> 투자 성향 진단 테스트 버튼 */}
          {isLogin && !isTestFinished ? (
            <div className="flex flex-row items-center justify-center w-full pt-2">
              <div className="flex items-center justify-center w-11/12 gap-5">
                <div className="text-[12px] whitespace-pre-line text-[#868686]">
                  <span className="font-bold">
                    투자 성향 진단 테스트를 진행
                  </span>
                  하면{"\n"}
                  <span className="font-bold">초개인화 포트폴리오를 추천</span>
                  받을 수 있어요!
                </div>
                <button
                  className="bg-main text-white font-bold rounded-[20px] box-content px-5 py-1 ml-2 text-[10px]"
                  onClick={() => navigate("/invest-test")}
                >
                  테스트 하러가기
                </button>
              </div>
            </div>
          ) : null}
          <div className="flex flex-row justify-between items-center py-2 px-[7vw] h-[5vh] box-content">
            {isSelected ? (
              <span className="font-bold text-[20px]">
                📌 Hit it! 개인화 포트폴리오 추천 상품
              </span>
            ) : (
              <>
                <span className="font-bold text-[20px]">
                  📌 Hit it! 테마별 상품
                </span>
              </>
            )}
          </div>
          {/** 포트폴리오 추천 리스트 */}
          {isSelected ? (
            isLogin ? (
              <div className="flex flex-col items-center justify-center gap-5">
                <RecommendComponent type={0} />
                <RecommendComponent type={0} />
                <RecommendComponent type={0} />
                <RecommendComponent type={0} />
                <RecommendComponent type={0} />
              </div>
            ) : (
              <div className="relative overflow-y-hidden">
                <div className="flex h-[70vh] flex-col justify-center items-center gap-5 blur">
                  <RecommendComponent type={0} />
                  <RecommendComponent type={0} />
                  <RecommendComponent type={0} />
                </div>
                <div className="absolute inset-0 flex justify-center items-center flex-col text-[20px] font-bold">
                  로그인 후 이용 가능합니다.
                  <button
                    className="bg-main px-10 py-2 rounded-[20px] mt-5 text-[15px] text-white font-bold"
                    onClick={() => navigate("/login")}
                  >
                    로그인
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="flex flex-col items-center justify-center gap-5">
              <RecommendComponent type={0} />
              <RecommendComponent type={0} />
              <RecommendComponent type={0} />
              <RecommendComponent type={0} />
              <RecommendComponent type={0} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
