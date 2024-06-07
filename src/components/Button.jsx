import React, { useState } from "react";

const Button = ({ children, onClick, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-main_yellow ${
        isHovered ? "bg-yellow-400" : ""
      } text-black font-bold py-[1.8vh] rounded-[1vh] ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
