import React, { useEffect, useState } from "react";
import TopBar from "../../components/common/topBar/TopBar";
import DoughnutChartComponent from "../../components/common/chart/DoughnutChartComponent";
import green_logo from "../../assets/logos/green_logo.png";
import blue_logo from "../../assets/logos/blue_logo.png";
import yellow_logo from "../../assets/logos/yellow_logo.png";
import red_logo from "../../assets/logos/red_logo.png";
import orange_logo from "../../assets/logos/orange_logo.png";
import go from "../../assets/icons/cheveron-right.svg";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";

export default function AssetPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState("");
  const token = localStorage.getItem("accessToken");
  const user = useUserStore((state) => state.user);
  console.log(user);
  console.log(token);
  console.log(isLogin);

  useEffect(() => {
    token ? setIsLogin(token) : setIsLogin("");
    console.log(isLogin);
  }, [token]);

  const renderImage = () => {
    switch (user.type) {
      case "안정형":
        return (
          <img src={green_logo} alt="logo" className="w-[100px] h-[78px]" />
        );
      case "안정추구형":
        return (
          <img src={blue_logo} alt="logo" className="w-[100px] h-[78px]" />
        );
      case "위험중립형":
        return (
          <img src={yellow_logo} alt="logo" className="w-[100px] h-[78px]" />
        );
      case "적극투자형":
        return (
          <img src={orange_logo} alt="logo" className="w-[100px] h-[78px]" />
        );
      case "공격투자형":
        return <img src={red_logo} alt="logo" className="w-[100px] h-[78px]" />;
      default:
        return (
          <img src={blue_logo} alt="logo" className="w-[100px] h-[78px]" />
        );
    }
  };
  return (
    <>
      <TopBar type={0} />

      <div className="flex flex-col items-center bg-white">
        {/* <p className="w-[88vw] text-2xl font-bold">MY 자산</p> */}
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <div className="flex flex-row items-center justify-between">
            <span className="text-[23px] font-bold">📌 포트폴리오</span>
            <p
              className="text-sm font-bold text-gray-500"
              onClick={() => navigate("portfolio")}
            >
              더 보기
            </p>
          </div>
          <div className="flex flex-row justify-center my-10 w-[88vw] h-[30vh]">
            {isLogin ? (
              <DoughnutChartComponent
                type="stock"
                ratio={[70, 30]}
                className={"w-[60vw] h-[30vh]"}
              />
            ) : (
              <DoughnutChartComponent
                type="stock"
                ratio={[100]}
                className={"w-[60vw] h-[30vh]"}
              />
            )}
          </div>
          <div className="flex justify-center">
            <div className="flex justify-center w-[30vw] gap-3">
              <div className="bg-[#6D87FF] w-[24px] h-[24px]" />
              <span className="font-bold">국내 주식</span>
            </div>
            <div className="flex justify-center w-[30vw] gap-3">
              <div className="bg-[#FF8F8F] w-[24px] h-[24px]" />
              <span className="font-bold">국내 채권</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <span className="text-[23px] font-bold">📌 총 자산</span>
          <div className=" flex flex-col justify-center items-center bg-white shadow-lg h-[10vh] rounded-[3vh]">
            <div className="flex flex-col justify-center w-[75vw]">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">
                  {isLogin ? user.name : "Guest"}님의 총 자산
                </p>
                <img
                  src={go}
                  alt="go"
                  onClick={() => {
                    isLogin
                      ? navigate("all")
                      : window.alert("로그인 후 이용 가능해요!");
                  }}
                />
              </div>
              <p className="text-2xl font-bold">
                {isLogin ? `${user.asset.toLocaleString()}원` : "???원"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-4 w-[88vw]">
          <span className="text-[23px] font-bold">✅ 나의 투자 성향</span>
          <div className=" flex flex-row justify-between items-center w-[88vw] h-[10vh] rounded-[3vh] mt-3">
            {renderImage()}
            {isLogin ? (
              <div className="flex flex-col w-[63vw] items-center gap-3">
                {user.type ? (
                  <>
                    <p className="text-[18px]">
                      {user.name.slice(0, 5)}님은&nbsp;
                      <span className="font-bold text-main">{user.type}</span>
                      입니다.
                    </p>
                    <button
                      className="bg-main text-white w-[40vw] h-[4vh] rounded-[2vh] font-bold"
                      onClick={() => navigate("/invest-test/user-result")}
                    >
                      더 알아보기
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-[17px]">
                      {user.name}님은{" "}
                      <span className="font-bold text-main">미실시자</span>
                      입니다.
                    </p>
                    <button
                      className="bg-sub w-[50vw] h-[4vh] rounded-[2vh] font-semibold"
                      onClick={() => navigate("/invest-test")}
                    >
                      투자 성향 테스트 하러가기
                    </button>
                  </>
                )}
              </div>
            ) : (
              <div className="flex flex-col w-[63vw] items-center gap-1">
                <p className="text-sm text-center">
                  투자 성향 테스트를 해보지 않았다면
                  <br />
                  <span className="font-bold text-main">
                    로그인 후 진행해보세요!
                  </span>
                </p>
                <button
                  className="bg-sub w-[40vw] h-[4vh] rounded-[2vh] flex flex-col items-center justify-center"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <span className="font-semibold">투자 성향 테스트</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
