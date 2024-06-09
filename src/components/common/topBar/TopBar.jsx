import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BackArrow,
  BackArrowWithNotification,
  LogoWithNotification,
  NotificationWithSetting,
} from "./TopBarComponents";

export default function TopBar({ type }) {
  const renderTopBar = () => {
    switch (type) {
      case 0:
        return <LogoWithNotification />;
      case 1:
        return <NotificationWithSetting />;
      case 2:
        return <BackArrow />;
      default:
        return <BackArrowWithNotification />;
    }
  };
  return <>{renderTopBar()}</>;
}
