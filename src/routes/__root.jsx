import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";
import SiteFooter from "../components/SiteFooter";
import NotFound from "../pages/NotFound";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="shell">
        <Sidebar />
        <div className="layout">
          <Navbar />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
