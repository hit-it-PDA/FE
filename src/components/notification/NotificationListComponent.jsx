import React, { useState } from "react";

export default function NotificationListComponent({ date, content }) {
  const [isRead, setIsRead] = useState(false);
  return (
    <div
      className={`${
        isRead ? "bg-white" : "bg-sub"
      } border-b px-[8vw] py-3 h-[8vh] w-full flex items-center justify-around hover:cursor-pointer`}
      onClick={() => setIsRead(true)}
    >
      <span>{date}</span>
      <span className="flex justify-center flex-1">{content}</span>
    </div>
  );
}
