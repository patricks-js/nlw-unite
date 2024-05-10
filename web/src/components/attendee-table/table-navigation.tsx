import type { TableProps } from ".";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function AttendeeTableNavigation(props: TableProps) {
  function goToPrev() {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  }

  function goToFirst() {
    if (props.currentPage > 1) {
      props.setCurrentPage(1);
    }
  }

  function goToNext() {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (props.currentPage < props.maxPage!) {
      props.setCurrentPage(props.currentPage + 1);
    }
  }

  function goToLast() {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    if (props.currentPage < props.maxPage!) {
      props.setCurrentPage(props.maxPage ?? 1);
    }
  }

  return (
    <div class="flex gap-1.5">
      <Button onClick={goToFirst} variant="secondary" size="icon">
        <Icons.cvsLeft size={18} />
      </Button>
      <Button onClick={goToPrev} variant="secondary" size="icon">
        <Icons.cvLeft size={18} />
      </Button>
      <Button onClick={goToNext} variant="secondary" size="icon">
        <Icons.cvRight size={18} />
      </Button>
      <Button onClick={goToLast} variant="secondary" size="icon">
        <Icons.cvsRight size={18} />
      </Button>
    </div>
  );
}
