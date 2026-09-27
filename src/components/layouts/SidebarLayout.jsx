import { Outlet } from "@tanstack/react-router";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function SidebarLayout() {
  return (
    <div className="shell">
      <Sidebar />
      <div className="layout">
        <Navbar withSidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
