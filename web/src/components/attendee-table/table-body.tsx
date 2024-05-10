import { attendees } from "@/data/attendees";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { For, createEffect, createSignal } from "solid-js";
import type { TableProps } from ".";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { TableBody, TableCell, TableRow } from "../ui/table";

dayjs.extend(relativeTime);

export function AttendeeTableBody(props: TableProps) {
  const [attendeeList, setAttendeeList] = createSignal(attendees.slice(0, 10));

  createEffect(() => {
    setAttendeeList(attendees.slice((props.currentPage - 1) * 10, props.currentPage * 10));
  });

  return (
    <TableBody>
      <For each={attendeeList()} fallback={<div>Loading...</div>}>
        {(item) => (
          <TableRow class="border-b">
            <TableCell>
              <Checkbox id="select-item" />
            </TableCell>
            <TableCell>{item.id}</TableCell>
            <TableCell>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-zinc-50">{item.name}</span>
                <span>{item.email.toLocaleLowerCase()}</span>
              </div>
            </TableCell>
            <TableCell>{dayjs().to(item.createdAt)}</TableCell>
            <TableCell>{dayjs().to(item.checkedInAt)}</TableCell>
            <TableCell>
              <Button variant={"outline"} size={"icon"}>
                <Icons.dots size={16} class="text-foreground" />
              </Button>
            </TableCell>
          </TableRow>
        )}
      </For>
    </TableBody>
  );
}
