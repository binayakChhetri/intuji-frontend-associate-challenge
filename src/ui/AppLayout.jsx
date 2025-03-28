import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router";

import "../styles/ui/AppLayout.css";

const AppLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
