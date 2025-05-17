import type { ReactNode } from "react";

import { PageWrapperComponent } from "./page-wrapper.styles";

interface PageWrapperProps {
  readonly children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return <PageWrapperComponent>{children}</PageWrapperComponent>;
}
