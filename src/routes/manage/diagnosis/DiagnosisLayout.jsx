import React from "react";
import { Outlet } from "react-router-dom";

export default function DiagnosisLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
