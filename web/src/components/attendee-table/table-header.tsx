import { Checkbox } from "../ui/checkbox";
import { TableHead, TableHeader, TableRow } from "../ui/table";

export function AttendeeTableHeader() {
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
