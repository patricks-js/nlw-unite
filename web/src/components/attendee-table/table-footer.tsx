import { attendees } from "@/data/attendees";
import { createEffect } from "solid-js";
import { createSignal } from "solid-js";
import type { TableProps } from ".";
import { TableCell, TableFooter, TableRow } from "../ui/table";
import { AttendeeTableNavigation } from "./table-navigation";

export function AttendeeTableFooter(props: TableProps) {
  const maxPages = Math.ceil(attendees.length / 10);
  const [countItems, setCountItems] = createSignal(props.currentPage === maxPages ? attendees.length % 10 : 10);

  createEffect(() => {
    setCountItems(props.currentPage === maxPages ? attendees.length % 10 : 10);
  });

  return (
    <TableFooter>
      <TableRow>
        <TableCell class="py-3 px-4 text-sm font-semibold" colSpan={3}>
          Showing {countItems()} of {attendees.length} items
        </TableCell>
        <TableCell class="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
          <div class="inline-flex items-center gap-8">
            <span>
              Page {props.currentPage} of {maxPages}
            </span>
            <AttendeeTableNavigation
              currentPage={props.currentPage}
              setCurrentPage={props.setCurrentPage}
              maxPage={maxPages}
            />
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
