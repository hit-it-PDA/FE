import React, { useState } from "react";

// components
import FundChartComponent from "../../components/common/chart/FundChartComponent";
import TopBar from "../../components/common/topBar/TopBar";
import FundListComponent from "../../components/common/rebalnacing/FundListComponent";
import ReportModal from "../../components/common/rebalnacing/ReportModal";

// icons
import rightArrow from "../../assets/icons/rightArrow.svg";
import { getReport } from "../../lib/apis/rebalancingApi";
import { useEffect } from "react";

export default function RebalancingReportPage() {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [reportData, setReportData] = useState({});
  const [isSelected, setIsSelected] = useState({});
  const getData = async () => {
    try {
      const data = await getReport();
      setReportData(data.response.response);
    } catch (error) {
      console.error("데이터를 가져오는 중 오류 발생:", error);
    } finally {
      setLoading(false); // 데이터 로딩 완료 후 로딩 상태를 false로 설정
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <TopBar type={2} />
      {loading ? (
        <div className="absolute flex w-full h-full bg-white-200 opacity-90">
          <div className="w-full h-[80vh] flex items-center justify-center">
            <div className="fixed w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
          </div>
        </div>
      ) : (
        <>
          <ReportModal
            isOpen={isOpen}
            setOpen={setOpen}
            data={isSelected}
            before={reportData.before_weights}
            after={reportData.weights}
          />
          <div className="px-5">
            <div className="flex justify-center w-full border-b">
              <span className="text-[25px] font-bold py-3">
                리밸런싱 리포트
              </span>
            </div>
            <div className="flex flex-col w-full py-3">
              {/** 한 눈에 보기 */}
              <div className="flex flex-col px-2">
                <span className="text-[20px] font-bold">📌 한 눈에 보기</span>
                <p className="px-5 text-[14px] whitespace-pre-line">
                  {`네이버 뉴스를 기준으로 감정 분석을 진행하고 
              분석 결과를 기반으로 펀드 비율을 조정했어요!`}
                </p>
                <div className="flex justify-between my-[4vh]">
                  <FundChartComponent
                    type="stock"
                    ratio={reportData?.before_weights}
                    className={"w-[30vw] h-full"}
                  />
                  <img src={rightArrow} alt="화살표" />
                  <FundChartComponent
                    type="stock"
                    ratio={reportData?.weights}
                    className={"w-[30vw] h-full"}
                  />
                </div>
              </div>
              {/** 자세히 보기 */}
              <div className="flex flex-col px-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-[20px] font-bold">📌 자세히 보기</span>
                  {/* <span className="text-[13px] text-[#616161]">
                ※ 2024.05.30 기준
              </span> */}
                </div>
                <p className="px-5 text-[14px] whitespace-pre-line">
                  {`감정 분석을 통해 위험 주식이라고 판단된 주식들과 
              감정 분석에 사용된 네이버 뉴스 기사를 볼 수 있어요!`}
                </p>
                <div className="my-[2vh] flex flex-col w-full items-center gap-4">
                  {reportData.funds?.length > 0 ? (
                    reportData.funds?.map((elem, index) => (
                      <FundListComponent
                        key={index}
                        index={index}
                        data={elem}
                        weight={reportData.weights}
                        setOpen={setOpen}
                        setIsSelected={setIsSelected}
                      />
                    ))
                  ) : (
                    <span>포트폴리오가 변경되지 않았어요!</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
