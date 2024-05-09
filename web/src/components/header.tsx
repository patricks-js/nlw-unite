import { Icons } from "./icons";
import { NavLink } from "./ui/navlink";

export function Header() {
  return (
    <header>
      <nav class="container py-5 flex items-center gap-5">
        <Icons.logo />
        <NavLink active={true}>Events</NavLink>
        <NavLink>Participants</NavLink>
      </nav>
    </header>
  );
}
