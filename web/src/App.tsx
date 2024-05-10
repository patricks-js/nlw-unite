import { AttendeeTable } from "./components/attendee-table";
import { Header } from "./components/header";
import { SearchAttendee } from "./components/search-attendee";

export function App() {
  return (
    <>
      <Header />
      <main class="container px-8 mt-5 pb-5">
        <div class="flex items-center gap-3">
          <h2 class="font-bold text-2xl">Participants</h2>
          <SearchAttendee />
        </div>

        <AttendeeTable />
      </main>
    </>
  );
}
