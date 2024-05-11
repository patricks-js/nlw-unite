import { usePagination } from "@/shared/pagination";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export function AttendeeTableNavigation() {
  const { pagination, setPagination } = usePagination();

  function goToPrev() {
    if (pagination.pageIndex > 1) {
      setPagination("pageIndex", pagination.pageIndex - 1);
    }
  }

  function goToFirst() {
    if (pagination.pageIndex > 1) {
      setPagination("pageIndex", 1);
    }
  }

  function goToNext() {
    if (pagination.pageIndex < pagination.numberOfPages) {
      setPagination("pageIndex", pagination.pageIndex + 1);
    }
  }

  function goToLast() {
    if (pagination.pageIndex < pagination.numberOfPages) {
      setPagination("pageIndex", pagination.numberOfPages);
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
