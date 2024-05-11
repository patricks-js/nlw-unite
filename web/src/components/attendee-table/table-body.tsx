import { attendees } from "@/data/attendees";
import { usePagination } from "@/shared/pagination";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { For, createEffect } from "solid-js";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { TableBody, TableCell, TableRow } from "../ui/table";

dayjs.extend(relativeTime);

export function AttendeeTableBody() {
  const { pagination, setPagination } = usePagination();

  createEffect(() => {
    setPagination({
      ...pagination,
      endEntry: pagination.pageIndex === pagination.numberOfPages ? pagination.numberOfEntries % 10 : 10,
    });
  });

  return (
    <TableBody>
      <For
        each={attendees.slice((pagination.pageIndex - 1) * 10, pagination.pageIndex * 10)}
        fallback={<div>Loading...</div>}
      >
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
