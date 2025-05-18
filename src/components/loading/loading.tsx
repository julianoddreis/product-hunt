import { LoadingComponent, Spinner } from "./loading.styles";

export function Loading() {
  return (
    <LoadingComponent>
      <Spinner data-testid="loading" />
    </LoadingComponent>
  );
}
