import { Icons } from "./icons";

export function Header() {
  return (
    <header>
      <nav class="container py-5 flex items-center gap-5">
        <Icons.logo />
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
