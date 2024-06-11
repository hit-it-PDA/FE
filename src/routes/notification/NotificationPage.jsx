import React from "react";
import { useState } from "react";

// components
import TopBar from "../../components/common/topBar/TopBar";
import NotificationListComponent from "../../components/notification/NotificationListComponent";

export default function NotificationPage() {
  return (
    <div>
      <TopBar type={2} />
      <div className="flex flex-col mt-5">
        <NotificationListComponent
          date="05.21"
          content="리밸런싱 레포트가 도착했어요!"
        />
        <NotificationListComponent
          date="05.21"
          content="리밸런싱 레포트가 도착했어요!"
        />
        <NotificationListComponent
          date="05.21"
          content="리밸런싱 레포트가 도착했어요!"
        />
      </div>
    </div>
  );
}
