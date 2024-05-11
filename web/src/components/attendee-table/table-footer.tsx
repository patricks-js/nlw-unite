import { usePagination } from "@/shared/pagination";
import { TableCell, TableFooter, TableRow } from "../ui/table";
import { AttendeeTableNavigation } from "./table-navigation";

export function AttendeeTableFooter() {
  const { pagination } = usePagination();

  return (
    <TableFooter>
      <TableRow>
        <TableCell class="py-3 px-4 text-sm font-semibold" colSpan={3}>
          Showing {pagination.endEntry} of {pagination.numberOfEntries} items
        </TableCell>
        <TableCell class="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
          <div class="inline-flex items-center gap-8">
            <span>
              Page {pagination.pageIndex} of {pagination.numberOfPages}
            </span>
            <AttendeeTableNavigation />
          </div>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
