import React from "react";
import { useNavigate } from "react-router-dom";

// logo
import logo from "../../../assets/logo.svg";
import noti from "../../../assets/icons/notification.svg";
import backArrow from "../../../assets/icons/backArrow.svg";
import setting from "../../../assets/icons/setting.svg";

export const LogoWithNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-row items-center justify-between h-[7vh] bg-white">
      <img
        src={logo}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
      <img
        src={noti}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate("/notification")}
      />
    </div>
  );
};

export const BackArrowWithNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-row items-center justify-between h-[7vh] bg-white">
      <img
        src={backArrow}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <img
        src={noti}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate("/notification")}
      />
    </div>
  );
};

export const NotificationWithSetting = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 flex flex-row items-center justify-end h-[7vh] bg-white gap-2">
      <img
        src={noti}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate("/notification")}
      />
      <img
        src={setting}
        className="w-[10vw] max-w-10 hover:cursor-pointer"
        onClick={() => navigate("/setting")}
      />
    </div>
  );
};

export const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <div className="p-3 flex items-center h-7[vh] bg-white">
      <img
        src={backArrow}
        className="w-[9vw] max-w-9 hover:cursor-pointer"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};
