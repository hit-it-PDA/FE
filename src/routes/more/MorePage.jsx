import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import TopBar from "../../components/common/topBar/TopBar";
// store
import useUserStore from "../../store/userStore";
// apis
import { getAccount } from "../../lib/apis/accountApi";

export default function MorePage() {
  const [isChecked, setIsChecked] = useState(true);
  const [isLogin, setIsLogin] = useState("");
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const token = localStorage.getItem("accessToken");
  const [account, setAccount] = useState({});

  const fetchGetAccount = async () => {
    try {
      const response = await getAccount();
      console.log(response);
      setAccount(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLogin(token);
    fetchGetAccount();
  }, []);
  return (
    <div>
      <TopBar type={3} />
      <div className="flex flex-col w-[88vw] mx-auto">
        <span className="text-[27px] font-bold">{user.name}님</span>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            나의 계좌
          </div>
          <div className="flex flex-row items-center justify-center h-[7vh] mb-[2.5vh] bg-sub shadow-lg mt-[1vh] gap-2 rounded-[3vh] py-[10vw]">
            <p className="w-[30vw] h-[5vh] ml-4 font-bold">
              {isLogin ? account?.company_name : "신한투자증권"}
            </p>
            <div className="flex flex-col justify-center items-end w-[45vw] h-[5vh] mr-5">
              <p className="h-[2.5vh] text-[#3A3A3A] font-medium">
                {isLogin ? account?.account_no : "???-???-???-??-???"}
              </p>
              <p className="h-[2.5vh] font-bold">
                {isLogin ? `${account?.balance?.toLocaleString()}원` : "???원"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[15px] pb-[6px] border-gray-300 font-bold">
            나의 투자 성향
          </div>
          <div className="flex flex-col justify-center">
            <div
              className="py-[0.5vh]"
              onClick={() => {
                isLogin ? navigate("/invest-test") : navigate("/login");
              }}
            >
              투자 성향 테스트
            </div>
            <div
              className="py-[0.5vh]"
              onClick={() => {
                isLogin ? navigate("/asset/portfolio") : navigate("/login");
              }}
            >
              포트폴리오 조회
            </div>
            <div className="py-[0.5vh]">리스크 관리</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[15px] pb-[6px] border-gray-300 font-bold">
            자산 관리
          </div>
          <div className="flex flex-col justify-center">
            <div
              className="py-[0.5vh]"
              onClick={() =>
                isLogin ? navigate("/asset/all") : navigate("/login")
              }
            >
              자산 조회
            </div>
            <div className="py-[0.5vh]" onClick={() => navigate("/mydata")}>
              마이데이터 자산 연결(추후 삭제)
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <div className="text-[18px] border-b-[1px] mt-[15px] pb-[6px] border-gray-300 font-bold">
              노후 준비
            </div>
            <div
              className="py-[0.5vh]"
              onClick={() =>
                isLogin ? navigate("/manage/diagnosis") : navigate("/login")
              }
            >
              노후 준비 종합 진단
            </div>
            <div
              className="py-[0.5vh]"
              onClick={() =>
                isLogin ? navigate("/manage/pension") : navigate("/login")
              }
            >
              미청구 퇴직 연금 조회
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[18px] border-b-[1px] mt-[10px] pb-[6px] mb-[10px] border-gray-300 font-bold">
            설정
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-between">
              <div className="py-[0.5vh]">알림</div>
              {isChecked ? (
                <button
                  className="px-2 py-1 text-[15px] mr-2 border-2 border-main text-main rounded-[15px] font-bold text-justify"
                  onClick={() => setIsChecked(false)}
                >
                  ON
                </button>
              ) : (
                <button
                  className="px-2 py-1 text-[15px] mr-2 border-2 border-[#FF0000] text-[#FF0000] rounded-[15px] font-bold text-justify"
                  onClick={() => setIsChecked(true)}
                >
                  OFF
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
