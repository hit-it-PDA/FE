import React from "react";

export default function ProgressBar({ page, totalPages, className }) {
  const progress = (page / totalPages) * 100;
  return (
    <div className="relative bg-progress_color w-[90vw] h-[4vh] rounded-[5vh]">
      <div
        className={`bg-main_yellow absolute top-0 left-0 rounded-[5vh] ${className}`}
        style={{ width: `${progress}%`, transition: "width 0.5s" }}
      ></div>
    </div>
  );
}