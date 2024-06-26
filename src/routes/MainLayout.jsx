import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import BottomTab from "../components/common/bottomTab/BottomTab";

export default function MainLayout() {
  return (
    <div className="w-screen h-full mb-[10vh]">
      <ScrollRestoration />
      <Outlet />
      <BottomTab />
    </div>
  );
}
