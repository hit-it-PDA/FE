import React from "react";
import { Outlet } from "react-router-dom";
import BottomTab from "../components/common/bottomTab/BottomTab";
import TopBar from "../components/common/topBar/TopBar";

export default function MainLayout() {
  return (
    <div className="w-screen h-screen">
      <TopBar />
      <Outlet />
      <BottomTab />
    </div>
  );
}
