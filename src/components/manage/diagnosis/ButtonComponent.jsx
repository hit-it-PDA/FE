import React from "react";

export default function ButtonComponent({ question, state, func, className }) {
  return (
    <div className={className}>
      <p className="mb-[1vh]">{question}</p>
      <div className="flex items-center justify-between">
        <Button
          className={`bg-${state === 1 ? "main" : "[#f6f6f6]"}`}
          func={func}
        >
          예
        </Button>
        <Button
          className={`bg-${state === 2 ? "main" : "[#f6f6f6]"}`}
          func={func}
        >
          아니오
        </Button>
      </div>
    </div>
  );
}

const Button = ({ children, className, func }) => {
  return (
    <button
      className={`w-[43vw] h-[5vh] rounded-[10px] ${className}`}
      onClick={() => {
        func(children === "예" ? 1 : 2);
      }}
    >
      {children}
    </button>
  );
};
