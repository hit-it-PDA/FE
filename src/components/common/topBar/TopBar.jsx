import React from "react";

// logo
import logo from "../../../assets/logo.svg";

// icons
import noti from "../../../assets/icons/notification.svg";

export default function TopBar() {
  return (
    <div className="m-3 flex flex-row items-center justify-between h-[6vh]">
      <img src={logo} className="w-[12vw]" />
      <img src={noti} className="w-[11vw]" />
    </div>
  );
}
