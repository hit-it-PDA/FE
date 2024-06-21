import React from "react";

const Input = ({
  children,
  className,
  type,
  onChange,
  onBlur,
  placeholder,
  value,
}) => {
  return (
    <div className="flex flex-col items-start">
      <p className="mb-[1vh]">{children}</p>
      <input
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`bg-white w-[90vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh] ${className}`}
        type={type}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
