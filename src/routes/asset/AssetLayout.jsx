import React from "react";
import { Outlet } from "react-router-dom";

export default function AssetLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
