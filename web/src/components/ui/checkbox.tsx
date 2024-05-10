import { Icons } from "../icons";

export type Props = {
  disabled?: boolean;
  defaultChecked?: boolean;
  id: string;
};

export function Checkbox(props: Props) {
  return (
    <div class="relative">
      <input
        class="relative peer appearance-none size-4 border cursor-pointer rounded-sm focus:outline-none focus:ring-offset-0 checked:bg-foreground disabled:bg-foreground/70"
        type="checkbox"
        {...props}
      />
      <Icons.checked
        size={14}
        class="text-secondary hidden peer-checked:block absolute pointer-events-none top-[1px] left-[1px]"
      />
    </div>
  );
}
