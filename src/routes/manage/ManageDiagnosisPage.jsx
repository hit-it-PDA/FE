import React, { useState } from "react";

// components
import TopBar from "../../components/common/topBar/TopBar";
import DiagnosisFirst from "../../components/manage/diagnosis/DiagnosisFirst";
import DiagnosisSecond from "../../components/manage/diagnosis/DiagnosisSecond";
import DiagnosisThird from "../../components/manage/diagnosis/DiagnosisThird";

export default function ManageDiagnosisPage() {
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
        <div className="flex flex-col w-full h-full justify-between items-center">
          {renderDiagnosis(
            seq,
            firstPageStatesAndSetters,
            secondPageStatesAndSetters,
            thirdPageStatesAndSetters
          )}
          <div className="w-[90vw] flex justify-end">
            <button
              className="w-[30vw] bg-main_yellow px-5 py-3 rounded-[10px]"
              onClick={() => setSeq((prev) => prev + 1)}
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
    default:
      break;
  }
};
