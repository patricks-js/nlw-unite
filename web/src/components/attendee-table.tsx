import { For } from "solid-js";
import { Checkbox } from "./ui/checkbox";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";

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
      <For each={Array.from({ length: 10 })} fallback={<div>Loading</div>}>
        {() => (
          <TableRow class="border-b">
            <TableCell>
              <Checkbox id="select-item" />
            </TableCell>
            <TableCell>12315</TableCell>
            <TableCell>
              <div class="flex flex-col gap-1">
                <span class="font-semibold text-zinc-50">Lucas Patrick</span>
                <span>lucas@gmail.com</span>
              </div>
            </TableCell>
            <TableCell>7 days ago</TableCell>
            <TableCell>7 days ago</TableCell>
            <TableCell>
              {/* <Button size={"icon"} variant={"outline"} class="border-zinc-800 hover:border-border">
                <Icon.dots size={16} />
              </Button> */}
            </TableCell>
          </TableRow>
        )}
      </For>
    </TableBody>
  );
}

function AttendeeTableFooter() {
  return (
    <TableFooter>
      <TableRow>
        <TableCell class="py-3 px-4 text-sm font-semibold" colSpan={3}>
          Showing 10 of 220 items
        </TableCell>
        <TableCell class="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
          <div class="inline-flex items-center gap-8">
            <span>Page 1 of 10</span>
            <div class="flex gap-1.5">
              {/* <Button size={"icon"} class="border border-zinc-800">
              <Icon.cvsLeft size={16} />
            </Button>
            <Button size={"icon"} class="border border-zinc-800">
              <Icon.cvLeft size={16} />
            </Button>
            <Button size={"icon"} class="border border-zinc-800">
              <Icon.cvRight size={16} />
            </Button>
            <Button size={"icon"} class="border border-zinc-800">
              <Icon.cvsRight size={16} />
            </Button> */}
            </div>
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
