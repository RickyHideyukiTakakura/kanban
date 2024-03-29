import { QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Aside } from "./components/aside";
import { Filter } from "./components/filter";
import { Header } from "./components/header";
import { Kanban } from "./components/kanban";
import { NewCardDialog } from "./components/new-card-dialog";
import { queryClient } from "./lib/react-query";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <div className="flex min-h-screen bg-violet-700">
          <Aside />

          <main className="w-full space-y-8 rounded-tl-3xl bg-slate-100 px-14 py-12">
            <Header />

            <Filter />

            <NewCardDialog />

            <div className="grid grid-cols-3 gap-16">
              <Kanban status="do" />

              <Kanban status="doing" />

              <Kanban status="done" />
            </div>
          </main>
        </div>
      </DndProvider>
    </QueryClientProvider>
  );
}
