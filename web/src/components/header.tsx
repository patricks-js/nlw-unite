import { Icon } from "./icons";

export function Header() {
  return (
    <header class="py-7 flex items-center gap-5 px-8 max-w-[1440px] mx-auto">
      <Icon.logo />
      <nav class="flex items-center gap-5">
        <a href="#index" class="font-medium text-sm text-muted-foreground">
          Events
        </a>
        <a href="#index" class="font-medium text-sm text-zinc-50">
          Participants
        </a>
      </nav>
    </header>
  );
}
