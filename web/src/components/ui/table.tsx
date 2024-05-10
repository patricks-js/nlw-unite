import { cn } from "@/lib/cn";
import { type ComponentProps, splitProps } from "solid-js";

export const Table = (props: ComponentProps<"table">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <div class="w-full mt-4 border border-border rounded-md overflow-auto">
      <table class={cn("w-full text-sm", local.class)} {...rest} />
    </div>
  );
};

export const TableHeader = (props: ComponentProps<"thead">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <thead class={cn("[&_tr]:border-b", local.class)} {...rest} />;
};

// TODO
export const TableBody = (props: ComponentProps<"tbody">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <tbody class={cn("[&_tr:last-child]:border-0", local.class)} {...rest} />;
};

export const TableFooter = (props: ComponentProps<"tfoot">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <tbody class={cn("[&_tr]:border-t font-medium", local.class)} {...rest} />;
};

// TODO
export const TableRow = (props: ComponentProps<"tr">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <tr class={cn("transition-colors data-[state=selected]:bg-muted", local.class)} {...rest} />;
};

export const TableHead = (props: ComponentProps<"th">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <th class={cn("py-3 text-sm font-medium h-10 px-4 text-left text-foreground", local.class)} {...rest} />;
};

export const TableCell = (props: ComponentProps<"td">) => {
  const [local, rest] = splitProps(props, ["class"]);
  return <td class={cn("px-4 py-3 text-muted-foreground", local.class)} {...rest} />;
};
