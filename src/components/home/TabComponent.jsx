import React from "react";

const TabComponent = ({ type, isSelected, setSelected }) => {
  return (
    <div className="h-full flex-1 flex justify-center items-center">
      <div
        className={`h-full w-10/12 flex justify-center items-center hover:cursor-pointer ${
          isSelected ? "border-b border-main_yellow font-bold" : null
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
