import { ClipboardList, Users, ScrollText, Settings } from "lucide-react";
import { Logo } from "./logo";

export function Aside() {
  return (
    <aside className="p-8">
      <Logo />

      <nav className="mt-14 space-y-9">
        <a
          href="/"
          className="flex items-center gap-4 text-slate-300 hover:text-slate-50"
        >
          <ClipboardList className="h-5 w-5 " />
          Boards
        </a>
        <a
          href="/"
          className="flex items-center gap-4 text-slate-300 hover:text-slate-50"
        >
          <Users className="h-5 w-5 " />
          Equipes
        </a>
        <a
          href="/"
          className="flex items-center gap-4 text-slate-300 hover:text-slate-50"
        >
          <ScrollText className="h-5 w-5 " />
          Relatórios
        </a>
        <a
          href="/"
          className="flex items-center gap-4 text-slate-300 hover:text-slate-50"
        >
          <Settings className="h-5 w-5 " />
          Ajustes
        </a>
      </nav>
    </aside>
  );
}
