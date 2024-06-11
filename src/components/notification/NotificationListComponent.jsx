import React, { useState } from "react";

export default function NotificationListComponent({ date, content }) {
  const [isRead, setIsRead] = useState(false);
  return (
    <div
      className={`${
        isRead ? "bg-white" : "bg-[#FFF9E6]"
      } border-b px-[8vw] py-3 h-[8vh] w-full flex items-center justify-around hover:cursor-pointer`}
      onClick={() => setIsRead(true)}
    >
      <span>{date}</span>
      <span className="flex-1 flex justify-center">{content}</span>
    </div>
  );
}
