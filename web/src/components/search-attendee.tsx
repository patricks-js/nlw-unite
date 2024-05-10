import { createSignal } from "solid-js";
import { emerald } from "tailwindcss/colors";
import { Icons } from "./icons";

export function SearchAttendee() {
  const [, setSearch] = createSignal("");

  return (
    <fieldset class="flex items-center gap-3 border border-border px-3 py-1.5 rounded-md text-sm">
      <label for="search" class="sr-only">
        Search
      </label>
      <Icons.search size={16} color={emerald[300]} />
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="search"
        type="text"
        placeholder="Search for participants..."
        class="bg-transparent flex-1 outline-none"
      />
    </fieldset>
  );
}
