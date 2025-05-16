import { useState, type ReactNode } from "react";
import { useDebouncedValue } from "@tanstack/react-pacer/debouncer";

import { SearchContext } from "./search-context";

interface SearchProviderProps {
  readonly children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebouncedValue(search, {
    wait: 500,
  });

  return (
    <SearchContext.Provider value={{ search, debouncedSearch, onChange: setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
