import { useSearch } from "@/providers/search";

export function NavBar() {
  const { search, onChange } = useSearch();

  return (
    <div>
      <input type="text" value={search} onChange={e => onChange(e.target.value)} />
    </div>
  );
}
