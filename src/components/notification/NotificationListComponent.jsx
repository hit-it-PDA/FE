import React, { useEffect, useState } from "react";
import { patchNotification } from "../../lib/apis/notificationApi";

export default function NotificationListComponent({
  id,
  date,
  content,
  check,
}) {
  const [isRead, setIsRead] = useState(check);
  const fetchPatchNotification = async (notificationId) => {
    try {
      const response = await patchNotification(notificationId);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`${
        isRead ? "bg-white" : "bg-[#FAFAFA] border-gray-200 border-y-[0.001px]"
      } px-[8vw] py-3 h-[8vh] w-full flex items-center justify-between hover:cursor-pointer `}
      onClick={() => {
        setIsRead(true);
        fetchPatchNotification(id);
      }}
    >
      <p className="text-[15px]">리밸런싱 리포트</p>
      <div className="flex flex-col items-end">
        <span className="flex justify-center flex-1 text-[12px]">{content}</span>
        <span className="text-[11px]">{date}</span>
      </div>
    </div>
  );
}
