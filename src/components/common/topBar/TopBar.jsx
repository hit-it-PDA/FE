import React from "react";

// logo
import logo from "../../../assets/logo.svg";

// icons
import noti from "../../../assets/icons/notification.svg";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="m-3 flex flex-row items-center justify-between h-[6vh]">
      <img
        src={logo}
        className="w-[12vw] hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <img
        src={noti}
        className="w-[11vw] hover:cursor-pointer"
        onClick={() => navigate("/notification")}
      />
    </div>
  );
}
