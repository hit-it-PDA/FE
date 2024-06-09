import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BackArrowWithNotification,
  LogoWithNotification,
  NotificationWithSetting,
} from "./TopBarComponents";

export default function TopBar() {
  const location = useLocation();

  const path = location.pathname;

  const renderTopBar = () => {
    switch (path) {
      case "/home":
      case "/asset":
      case "/manage":
        return <LogoWithNotification />;
      case "/more":
        return <NotificationWithSetting />;
      default:
        return <BackArrowWithNotification />;
    }
  };
  return <>{renderTopBar()}</>;
}
