import React from "react";

// components
import TopBar from "../../components/common/topBar/TopBar";
import NotificationListComponent from "../../components/notification/NotificationListComponent";

export default function RebalancingListPage() {
  return (
    <div>
      <TopBar type={2} />
      <div className="flex flex-col mt-5">
        <NotificationListComponent date="06.20" content="#3 리밸런싱 레포트" />
        <NotificationListComponent date="04.21" content="#2 리밸런싱 레포트" />
        <NotificationListComponent date="03.18" content="#1 리밸런싱 레포트" />
        <NotificationListComponent date="06.20" content="#3 리밸런싱 레포트" />
        <NotificationListComponent date="04.21" content="#2 리밸런싱 레포트" />
        <NotificationListComponent date="03.18" content="#1 리밸런싱 레포트" />
        <NotificationListComponent date="06.20" content="#3 리밸런싱 레포트" />
        <NotificationListComponent date="04.21" content="#2 리밸런싱 레포트" />
        <NotificationListComponent date="03.18" content="#1 리밸런싱 레포트" />
        <NotificationListComponent date="06.20" content="#3 리밸런싱 레포트" />
        <NotificationListComponent date="04.21" content="#2 리밸런싱 레포트" />
        <NotificationListComponent date="03.18" content="#1 리밸런싱 레포트" />
      </div>
    </div>
  );
}
