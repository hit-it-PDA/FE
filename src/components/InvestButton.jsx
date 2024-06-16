import React from "react";

export default function InvestButton({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-main rounded-[3vw] text-white bg-opacity-80 font-bold h-[5vh] ${className}`}
    >
      {children}
    </button>
  );
}
