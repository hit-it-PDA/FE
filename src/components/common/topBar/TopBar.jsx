import React from "react";
import { useCallback } from "react";
import {
  BackArrow,
  BackArrowWithNotification,
  LogoWithNotification,
  NotificationWithSetting,
} from "./TopBarComponents";

function TopBarComponent({ type }) {
  const renderTopBar = useCallback(() => {
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
  }, [type]);

  return <>{renderTopBar()}</>;
}

const TopBar = React.memo(
  TopBarComponent,
  (prevProps, nextProps) => prevProps.type === nextProps.type
);

export default TopBar;
