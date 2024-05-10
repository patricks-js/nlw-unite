import { attendees } from "@/data/attendees";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { For, createSignal } from "solid-js";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

const [pageIndex, setPageIndex] = createSignal(1);

dayjs.extend(relativeTime);

export function AttendeeTable() {
  return (
    <Table>
      <AttendeeTableHeader />
      <AttendeeTableBody />
      <AttendeeTableFooter />
    </Table>
  );
}

function AttendeeTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead class="w-12">
          <Checkbox id="select-items" />
        </TableHead>
        <TableHead>Code</TableHead>
        <TableHead>Participant</TableHead>
        <TableHead>Subscription</TableHead>
        <TableHead>Check-in</TableHead>
        <TableHead class="w-16">{""}</TableHead>
      </TableRow>
    </TableHeader>
  );
}

function AttendeeTableBody() {
  return (
    <TableBody>
      <For each={attendees.slice((pageIndex() - 1) * 10, pageIndex() * 10)} fallback={<div>Loading</div>}>
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

function AttendeeTableFooter() {
  const maxPages = Math.ceil(attendees.length / 10);

  function goToNextPage() {
    if (pageIndex() < maxPages) {
      setPageIndex((prev) => prev + 1);
    }
  }

  function goToPrevPage() {
    if (pageIndex() > 1) {
      setPageIndex((prev) => prev - 1);
    }
  }

  return (
    <TableFooter>
      <TableRow>
        <TableCell class="py-3 px-4 text-sm font-semibold" colSpan={3}>
          Showing 10 of {attendees.length} items
        </TableCell>
        <TableCell class="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
          <div class="inline-flex items-center gap-8">
            <span>
              Page {pageIndex()} of {maxPages}
            </span>
            <div class="flex gap-1.5">
              <Button onClick={() => setPageIndex(1)} variant={"secondary"} size={"icon"}>
                <Icons.cvsLeft size={16} />
              </Button>
              <Button onClick={goToPrevPage} variant={"secondary"} size={"icon"}>
                <Icons.cvLeft size={16} />
              </Button>
              <Button onClick={goToNextPage} variant={"secondary"} size={"icon"}>
                <Icons.cvRight size={16} />
              </Button>
              <Button onClick={() => setPageIndex(maxPages)} variant={"secondary"} size={"icon"}>
                <Icons.cvsRight size={16} />
              </Button>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
