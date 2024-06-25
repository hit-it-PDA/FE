import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";

// components
import TopBar from "../../components/common/topBar/TopBar";
import RecommendComponent from "../../components/home/RecommendComponent";
import Tab from "../../components/home/TabComponent";
import Button from "../../components/Button";

// modal
import { Sheet } from "react-modal-sheet";

// apis
import {
  getAllPortfolio,
  getMyDataPortfolio,
  changePortfolio,
  changeMyDataPortfolio,
} from "../../lib/apis/portfolioApi";

export default function HomePage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState({});
  const [isAllDataLoading, setIsAllDataLoading] = useState(true);
  const [isMyDataLoading, setIsMyDataLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState([]);
  const [myDataPortfolioData, setMyDataPortfolioData] = useState([]);
  const [isSelected, setSelected] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [isTestFinished, setIsTestFinished] = useState(false);
  const { clearUser } = useUserStore();
  const user = useUserStore((state) => state.user);

  const handleLogout = () => {
    clearUser(); // 유저 정보 초기화
    localStorage.removeItem("accessToken"); // localStorage에서 accessToken 제거
  };

  const getPortfolioData = async () => {
    const data = await getAllPortfolio();
    setPortfolioData(data.response);
    if (data) setIsAllDataLoading(false);
  };

  const getMyDataPortfolioData = async (body) => {
    const data = await getMyDataPortfolio(body);
    setMyDataPortfolioData(data.response);
    if (data) setIsMyDataLoading(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    getPortfolioData();
    getMyDataPortfolioData({ user_id: 2, level: 5 });
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
          <SelectModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectedPortfolio={selectedPortfolio}
            name={user.name}
          />
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
              // 로그인 한 상태의 개인화 탭
              isMyDataLoading ? (
                <div className="absolute flex w-full h-full bg-gray-200 opacity-90">
                  <div className="w-full h-[80vh] flex items-center justify-center">
                    <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-5">
                  {myDataPortfolioData.map((elem, index) => (
                    <RecommendComponent
                      key={index}
                      type={0}
                      data={elem}
                      isLogin={isLogin}
                      setOpenModal={setOpenModal}
                      setSelectedPortfolio={setSelectedPortfolio}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="relative overflow-y-hidden">
                <div className="flex h-[70vh] flex-col justify-center items-center gap-5 blur">
                  {portfolioData.map((elem, index) => (
                    <RecommendComponent
                      key={index}
                      type={0}
                      data={elem}
                      isLogin={isLogin}
                      setOpenModal={setOpenModal}
                      setSelectedPortfolio={setSelectedPortfolio}
                    />
                  ))}
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
          ) : isAllDataLoading ? (
            <div className="absolute flex w-full h-full bg-gray-200 opacity-90">
              <div className="w-full h-[80vh] flex items-center justify-center">
                <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-5">
              {portfolioData.map((elem, index) => (
                <RecommendComponent
                  key={index}
                  type={0}
                  data={elem}
                  isLogin={isLogin}
                  setOpenModal={setOpenModal}
                  setSelectedPortfolio={setSelectedPortfolio}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const SelectModal = ({ openModal, setOpenModal, selectedPortfolio, name }) => {
  const [result, setResult] = useState("");
  const changePortfolioFunc = async (id) => {
    if (selectedPortfolio.funds) {
      const data = await changeMyDataPortfolio(selectedPortfolio);
      setResult(data.response);
    } else {
      const data = await changePortfolio(id);
      setResult(data.response);
    }
  };
  useEffect(() => {
    setResult("");
  }, [selectedPortfolio]);
  return (
    <Sheet
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      detent={"content-height"}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <div className="flex flex-col items-center w-full h-full px-5 bg-white">
            <span className="w-full text-center font-bold text-[25px] my-[1.5vh] pb-[1.5vh] border-b">
              {`포트폴리오 선택`}
            </span>
            <div className="w-full px-2 my-[2vh] text-center ">
              {result ? (
                <>
                  <span className="text-[18px]">{result}</span>
                  <div className="flex justify-center w-full mt-[3vh]">
                    <Button
                      className="w-5/12 h-[6vh] flex justify-center items-center"
                      onClick={() => setOpenModal(false)}
                    >
                      완료
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span className="text-[18px] whitespace-pre-line">
                      {`${name}님의 포트폴리오를`}
                      <br />
                      <span className="font-bold text-main text-[22px]">
                        {selectedPortfolio.name}
                      </span>
                      <br />
                      {`포트폴리오로 선택합니다.`}
                    </span>
                  </div>
                  <div className="flex justify-around w-full mt-[3vh]">
                    <Button
                      className="w-5/12 h-[6vh] flex justify-center items-center"
                      onClick={() => {
                        changePortfolioFunc(selectedPortfolio.id);
                      }}
                    >
                      {`선택하기`}
                    </Button>
                    <Button
                      className="w-5/12 h-[6vh] flex justify-center items-center"
                      onClick={() => setOpenModal(false)}
                    >
                      취소하기
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
};
