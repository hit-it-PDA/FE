import React from "react";
import { Outlet } from "react-router-dom";
import BottomTab from "../components/common/bottomTab/BottomTab";

export default function MainLayout() {
  return (
    <div className="w-screen h-full mb-[10vh]">
      <Outlet />
      <BottomTab />
    </div>
  );
}
