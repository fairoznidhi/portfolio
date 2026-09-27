import { createRootRoute, useLocation } from "@tanstack/react-router";
import SidebarLayout from "../components/layouts/SidebarLayout";
import FullLayout from "../components/layouts/FullLayout";
import ScrollToTop from "../components/ScrollToTop";
import SiteFooter from "../components/SiteFooter";
import NotFound from "../pages/NotFound";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const { pathname } = useLocation();
  const withSidebar = !pathname.startsWith("/blog/");

  return (
    <>
      <ScrollToTop />
      {withSidebar ? <SidebarLayout /> : <FullLayout />}
      <SiteFooter withSidebar={withSidebar} />
    </>
  );
}
