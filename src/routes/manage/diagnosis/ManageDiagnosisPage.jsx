import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import TopBar from "../../../components/common/topBar/TopBar";
import DiagnosisFirst from "../../../components/manage/diagnosis/DiagnosisFirst";
import DiagnosisSecond from "../../../components/manage/diagnosis/DiagnosisSecond";
import DiagnosisThird from "../../../components/manage/diagnosis/DiagnosisThird";

export default function ManageDiagnosisPage() {
  const navigate = useNavigate();
  const [seq, setSeq] = useState(0);
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState(0);
  const [retirementAge, setRetirementAge] = useState(0);
  const [pensionExpAmount, setPensionExpAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [returnExp, setReturnExp] = useState(0);
  const [livingExpenses, setLivingExpenses] = useState(0);
  const [manageScore, setManageScore] = useState(0);
  const [hasIncome, setHasIncome] = useState(0);
  const [isYoung, setIsYoung] = useState(0);
  const [isCalculate, setIsCalculate] = useState(0);
  const [manageAsset, setManageAsset] = useState("");
  const [pensionAmount, setPensionAmount] = useState("");
  const [estateAmount, setEstateAmount] = useState("");
  const nextButtonHandler = () => {
    if (seq < 2) setSeq(seq + 1);
    else navigate("../diagnosis-result");
  };
  const firstPageStatesAndSetters = {
    age,
    setAge,
    retirementAge,
    setRetirementAge,
    sex,
    setSex,
    pensionExpAmount,
    setPensionExpAmount,
  };
  const secondPageStatesAndSetters = {
    incomeAmount,
    setIncomeAmount,
    returnExp,
    setReturnExp,
    livingExpenses,
    setLivingExpenses,
    manageScore,
    setManageScore,
  };
  const thirdPageStatesAndSetters = {
    hasIncome,
    setHasIncome,
    isYoung,
    setIsYoung,
    isCalculate,
    setIsCalculate,
    manageAsset,
    setManageAsset,
    pensionAmount,
    setPensionAmount,
    estateAmount,
    setEstateAmount,
  };
  return (
    <div>
      <TopBar type={2} />
      <div className="w-full h-[80vh] px-5">
        <div className="flex flex-col items-center justify-between w-full h-full">
          {renderDiagnosis(
            seq,
            firstPageStatesAndSetters,
            secondPageStatesAndSetters,
            thirdPageStatesAndSetters
          )}
          <div className="w-[90vw] flex justify-end">
            <button
              className="w-[30vw] bg-main px-5 py-3 rounded-[10px] text-white font-bold"
              onClick={() => nextButtonHandler()}
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderDiagnosis = (
  seq,
  firstPageStatesAndSetters,
  secondPageStatesAndSetters,
  thirdPageStatesAndSetters
) => {
  switch (seq) {
    case 0:
      return <DiagnosisFirst {...firstPageStatesAndSetters} />;
    case 1:
      return <DiagnosisSecond {...secondPageStatesAndSetters} />;
    case 2:
      return <DiagnosisThird {...thirdPageStatesAndSetters} />;
  }
};
