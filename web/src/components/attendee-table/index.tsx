import { PaginationProvider } from "@/shared/pagination";
import { Table } from "../ui/table";
import { AttendeeTableBody } from "./table-body";
import { AttendeeTableFooter } from "./table-footer";
import { AttendeeTableHeader } from "./table-header";

export function AttendeeTable() {
  return (
    <Table>
      <PaginationProvider>
        <AttendeeTableHeader />
        <AttendeeTableBody />
        <AttendeeTableFooter />
      </PaginationProvider>
    </Table>
  );
}
