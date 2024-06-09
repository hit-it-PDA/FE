import React from "react";
import { Outlet } from "react-router-dom";

export default function ManageLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
