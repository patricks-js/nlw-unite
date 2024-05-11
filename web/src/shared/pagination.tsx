import { attendees } from "@/data/attendees";
import { type JSX, createContext, onMount, useContext } from "solid-js";
import { type SetStoreFunction, createStore } from "solid-js/store";

export type Attendee = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  checkedInAt: Date;
};

export type PaginationProps = {
  pageData: Attendee[];
  pageSize: number;
  pageIndex: number;
  startEntry: number;
  endEntry: number;
  numberOfPages: number;
  numberOfEntries: number;
};

type InitialState = {
  pagination: PaginationProps;
  setPagination: SetStoreFunction<PaginationProps>;
};

export const PaginationContext = createContext({} as InitialState);

export function PaginationProvider(props: { children: JSX.Element }) {
  const [pagination, setPagination] = createStore<PaginationProps>({
    pageData: [],
    pageIndex: 1,
    numberOfPages: 0,
    numberOfEntries: 0,
    endEntry: 10,
    pageSize: 10,
    startEntry: 1,
  });

  onMount(() => {
    const numberOfEntries = attendees.length;
    const numberOfPages = Math.ceil(numberOfEntries / pagination.pageSize);
    const pageData = attendees.slice((pagination.startEntry - 1) * 10, pagination.pageIndex * 10);

    if (attendees.length > 0) {
      setPagination({
        ...pagination,
        numberOfPages,
        numberOfEntries,
        pageData,
      });
    }
  });

  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>{props.children}</PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination: cannot find a CounterContext");
  }
  return context;
}
