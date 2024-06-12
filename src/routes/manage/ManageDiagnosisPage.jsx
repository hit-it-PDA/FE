import React, { useState } from "react";

// components
import TopBar from "../../components/common/topBar/TopBar";
import DiagnosisFirst from "../../components/manage/diagnosis/DiagnosisFirst";

export default function ManageDiagnosisPage() {
  const [seq, setSeq] = useState(0);
  return (
    <div>
      <TopBar type={2} />
      <div className="w-full h-[80vh] px-5">
        <div className="flex flex-col w-full h-full justify-between">
          {renderDiagnosis(seq)}
          <button
            className="w-[30vw] self-end bg-main_yellow px-5 py-3 rounded-[10px]"
            onClick={() => setSeq((prev) => prev + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

const renderDiagnosis = (seq) => {
  switch (seq) {
    case 0:
      return <DiagnosisFirst />;

    default:
      break;
  }
};
