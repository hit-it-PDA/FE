import React from "react";

const Input = ({ children, className, type, onChange, placeholder }) => {
  return (
    <div className="flex flex-col items-start">
      <p className="mb-[1vh]">{children}</p>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-white w-[90vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh] ${className}`}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
