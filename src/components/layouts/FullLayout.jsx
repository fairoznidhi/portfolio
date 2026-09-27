import { Outlet } from "@tanstack/react-router";
import Navbar from "../Navbar";

export default function FullLayout() {
  return (
    <div className="shell">
      <div className="layout layout-full">
        <Navbar withSidebar={false} />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
