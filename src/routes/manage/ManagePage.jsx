import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import LineChartComponent from "../../components/common/chart/LineChartComponent";
import TopBar from "../../components/common/topBar/TopBar";
import ManageTitleComponent from "../../components/manage/ManageTitleComponent";
import MoreServiceComponent from "../../components/manage/MoreServiceComponent";
import { getRates } from "../../lib/apis/manageApi";

// store
import useUserStore from "../../store/userStore";

export default function ManagePage() {
  const navigate = useNavigate();
  const user = useUserStore((store) => store.user);
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);
  const [rates, setRates] = useState([]);

  const getData = async () => {
    const data = await getRates();
    console.log(data.response);
    if (data.response === "내 포트폴리오가 존재하지 않습니다.") {
      setRates([]);
    } else {
      setRates(data.response);
      const newDates = [];
      const newValues = [];
      if (rates.length > 0) {
        data.response.forEach((item) => {
          const date = Object.keys(item)[0];
          const value = item[date];
          newDates.push(date?.slice(0, 10));
          newValues.push(value);
        });
        setDates(newDates);
        setValues(newValues);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <TopBar type={0} />
      <div className="flex flex-col w-full h-full gap-10 p-5">
        <span className="text-[23px] font-bold">📌 포트폴리오 수익률</span>
        {user?.name === "방문자" ? (
          <div className="relative w-full h-full">
            <div className="absolute z-20 flex flex-col text-[20px] items-center justify-center w-full h-full">
              <span className="p-2 font-bold">로그인 후 이용 가능합니다.</span>
              <button
                className="bg-main px-10 py-2 rounded-[20px] mt-5 text-[15px] text-white font-bold"
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
            </div>
            <div className="w-full h-full blur-sm">
              <ManageTitleComponent stockReturns="???" />
              <LineChartComponent
                dates={[
                  "2024-06-14",
                  "2024-06-27",
                  "2024-06-10",
                  "2024-06-25",
                  "2024-06-03",
                  "2024-06-20",
                  "2024-06-02",
                  "2024-06-28",
                  "2024-06-04",
                  "2024-06-18",
                  "2024-06-30",
                  "2024-06-12",
                  "2024-06-23",
                ]}
                values={[
                  1435.1128, 829.7963, 1201.6307, 710.853, 1101.6415, 714.453,
                  1322.442, 716.811, 819.4015, 1402.418, 1120.0811, 714.888,
                  934.3496,
                ]}
              />
            </div>
          </div>
        ) : rates?.length > 0 ? (
          <>
            <ManageTitleComponent
              stockReturns={(
                ((values[values.length - 1] - values[0]) / values[0]) *
                100
              ).toFixed(2)}
            />
            <LineChartComponent dates={dates} values={values} />
          </>
        ) : rates?.length === 0 ? (
          <div className="flex justify-center w-full">
            <span>아직 수익률 정보가 없어요!</span>
          </div>
        ) : null}

        <div className="w-full h-[30vh] flex flex-col">
          <span className="text-[23px] font-bold">📌 부가 서비스</span>
          <div className="flex flex-col justify-around flex-1 mt-2">
            <MoreServiceComponent
              title="노후 준비 종합 진단"
              detail={`나는 노후를 잘 준비하고 있을까?
              노후에 생활비를 얼마나 쓸 수 있을까?`}
            />
            <MoreServiceComponent
              title="미청구 퇴직연금 조회"
              detail={`퇴사 후, 청구하지 못한 퇴직연금이 있다면
              히릿이 찾아드려요!`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
