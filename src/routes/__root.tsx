import { createRootRoute, Outlet } from "@tanstack/react-router";

import { PageWrapper } from "@/components/page-wrapper";

export const Route = createRootRoute({
  component: () => (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  ),
});
