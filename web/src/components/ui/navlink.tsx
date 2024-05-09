import { cn } from "@/lib/cn";
import type { ComponentProps } from "solid-js";

type Props = {
  active?: boolean;
} & ComponentProps<"a">;

export function NavLink({ active = false, ...props }: Props) {
  return <a href="#index" class={cn("font-medium text-sm", active && "text-muted-foreground")} {...props} />;
}
