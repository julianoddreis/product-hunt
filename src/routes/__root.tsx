import { createRootRoute, Outlet } from "@tanstack/react-router";

import { NavBar } from "@/components/nav-bar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
});
