import React from "react";

const TabComponent = ({ type, isSelected, setSelected }) => {
  return (
    <div className="flex items-center justify-center flex-1 h-full">
      <div
        className={`h-full w-10/12 flex justify-center items-center hover:cursor-pointer ${
          isSelected ? "border-b border-main font-bold" : null
        }`}
        onClick={() => setSelected(type)}
      >
        {type ? "개인화" : "전체"}
      </div>
    </div>
  );
};

const Tab = React.memo(TabComponent);

export default Tab;
