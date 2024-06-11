import React from "react";

export default function InvestButton({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-main_yellow rounded-[3vw] text-invest_text bg-opacity-70 font-bold h-[5vh] ${className}`}
    >
      {children}
    </button>
  );
}
