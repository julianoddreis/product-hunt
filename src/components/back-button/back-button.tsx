import { Link, type LinkProps } from "@tanstack/react-router";

import { ChevronLeft } from "./back-button.styles";

interface BackButtonProps extends LinkProps {
  readonly children?: never;
}

export function BackButton(props: BackButtonProps) {
  return (
    <Link {...props}>
      <ChevronLeft />
    </Link>
  );
}
