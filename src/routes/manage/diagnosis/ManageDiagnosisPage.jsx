import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import TopBar from "../../../components/common/topBar/TopBar";
import DiagnosisFirst from "../../../components/manage/diagnosis/DiagnosisFirst";
import DiagnosisSecond from "../../../components/manage/diagnosis/DiagnosisSecond";

export default function ManageDiagnosisPage() {
  const navigate = useNavigate();
  const [seq, setSeq] = useState(0);

  // for first page
  const [age, setAge] = useState("");
  const [effort, setEffort] = useState(-1);
  const [livingExpenses, setLivingExpenses] = useState("");

  // for second page
  const [receive, setReceive] = useState("");
  const [estate, setEstate] = useState("");
  const [asset, setAsset] = useState("");
  const [returns, setReturns] = useState("");

  // result
  const result = {
    retirement_age: Number(age),
    career_effort_score: effort,
    monthly_living_expenses: Number(livingExpenses),
    expected_national_pension: Number(receive),
    total_financial_assets: Number(asset),
    expected_investment_return: Number(returns),
    total_real_estate_value: Number(estate),
  };

  const handleChange = (e, setValue) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    } else {
      alert("숫자만 입력해주세요!");
      setValue("");
    }
  };

  const handleBlur = (below, above, value, setValue) => {
    const numericValue = Number(value);
    if (value !== "" && (numericValue < below || numericValue > above)) {
      alert(`${below} 이상 ${above} 이하의 숫자만 입력해주세요!`);
      setValue("");
    }
  };

  const firstPageStates = {
    age,
    setAge,
    effort,
    setEffort,
    livingExpenses,
    setLivingExpenses,
    handleChange,
    handleBlur,
  };

  const secondPageStates = {
    receive,
    setReceive,
    estate,
    setEstate,
    asset,
    setAsset,
    returns,
    setReturns,
    handleChange,
    handleBlur,
  };

  const nextButtonHandler = () => {
    if (seq === 0) {
      if (age !== "" && effort !== -1 && livingExpenses !== "") {
        setSeq(seq + 1);
      } else {
        alert("모든 항목에 빠짐없이 답변해주세요 :)");
      }
    } else if (seq === 1) {
      if (receive !== "" && estate !== "" && asset !== "" && returns !== "") {
        navigate("../result");
      } else {
        alert("모든 항목에 빠짐없이 답변해주세요 :)");
      }
    }
  };
  return (
    <div>
      <TopBar type={2} />
      <div className="w-full h-[80vh] px-5">
        <div className="flex flex-col items-center justify-between w-full h-full">
          {renderDiagnosis(seq, firstPageStates, secondPageStates)}
          {seq === 2 ? null : (
            <div className="w-[90vw] flex justify-end">
              <button
                className="w-[30vw] bg-main px-5 py-3 rounded-[10px] text-white font-bold"
                onClick={() => nextButtonHandler()}
              >
                {seq === 0 ? "다음" : "완료"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const renderDiagnosis = (seq, firstPageStates, secondPageStates) => {
  switch (seq) {
    case 0:
      return <DiagnosisFirst {...firstPageStates} />;
    case 1:
      return <DiagnosisSecond {...secondPageStates} />;
  }
};
