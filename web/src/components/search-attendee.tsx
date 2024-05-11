import { createSignal } from "solid-js";
import { emerald } from "tailwindcss/colors";
import { Icons } from "./icons";

export function SearchAttendee() {
  const [search, setSearch] = createSignal("");

  return (
    <fieldset class="flex items-center gap-3 border border-border px-3 py-1.5 rounded-md text-sm">
      <label for="search" class="sr-only">
        Search
      </label>
      <Icons.search size={16} color={emerald[300]} />
      <input
        type="text"
        id="search"
        onInput={(e) => setSearch(e.target.value)}
        value={search()}
        placeholder="Search for participants..."
        class="bg-transparent flex-1 outline-none"
      />
    </fieldset>
  );
}
