import { createContext, use } from "react";

export interface ISearchContextValue {
  readonly search: string;
  readonly debouncedSearch: string;
  readonly onChange: (value: string) => void;
}

export const SearchContext = createContext<ISearchContextValue | null>(null);

export function useSearch(): ISearchContextValue {
  const value = use(SearchContext);

  if (value === null) {
    throw new Error("Attempted to use search context value when it is not available");
  }

  return value;
}
