import { useSearch } from "@/providers/search";

import { Avatar, Input, NavBarComponent } from "./nav-bar.styles";

export function NavBar() {
  const { search, onChange } = useSearch();

  return (
    <NavBarComponent>
      <Avatar />
      <Input
        placeholder="Topic name"
        type="text"
        value={search}
        onChange={e => onChange(e.target.value)}
      />
    </NavBarComponent>
  );
}
