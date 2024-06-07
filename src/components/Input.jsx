import React from "react";

const Input = ({ children, className, type, onChange }) => {
  return (
    <input
      onChange={onChange}
      className={`bg-white w-[90vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh] ${className}`}
      type={type}
    ></input>
  );
};

export default Input;
