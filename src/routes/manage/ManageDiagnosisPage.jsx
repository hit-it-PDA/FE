import React, { useState } from "react";

// components
import TopBar from "../../components/common/topBar/TopBar";
import DiagnosisFirst from "../../components/manage/diagnosis/DiagnosisFirst";
import DiagnosisSecond from "../../components/manage/diagnosis/DiagnosisSecond";

export default function ManageDiagnosisPage() {
  const [seq, setSeq] = useState(0);
  return (
    <div>
      <TopBar type={2} />
      <div className="w-full h-[80vh] px-5">
        <div className="flex flex-col w-full h-full justify-between items-center mt-3">
          {renderDiagnosis(seq)}
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

const renderDiagnosis = (seq) => {
  switch (seq) {
    case 0:
      return <DiagnosisFirst />;
    case 1:
      return <DiagnosisSecond />;
    default:
      break;
  }
};
