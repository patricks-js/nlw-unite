import { type Setter, createSignal } from "solid-js";
import { Table } from "../ui/table";
import { AttendeeTableBody } from "./table-body";
import { AttendeeTableFooter } from "./table-footer";
import { AttendeeTableHeader } from "./table-header";

export type TableProps = {
  currentPage: number;
  setCurrentPage: Setter<number>;
  maxPage?: number;
};

export function AttendeeTable() {
  const [pageIndex, setPageIndex] = createSignal(1);

  return (
    <Table>
      <AttendeeTableHeader />
      <AttendeeTableBody currentPage={pageIndex()} setCurrentPage={setPageIndex} />
      <AttendeeTableFooter currentPage={pageIndex()} setCurrentPage={setPageIndex} />
    </Table>
  );
}
