import { useSearch } from "@/providers/search";

import { Input, NavBarComponent } from "./nav-bar.styles";

export function NavBar() {
  const { search, onChange } = useSearch();

  return (
    <NavBarComponent>
      <Input
        placeholder="Topic name"
        type="text"
        value={search}
        onChange={e => onChange(e.target.value)}
      />
    </NavBarComponent>
  );
}
