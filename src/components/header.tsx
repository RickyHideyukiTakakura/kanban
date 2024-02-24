import { Pencil } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-slate-900">Meu Kanban</h1>

        <button>
          <Pencil className="h-6 w-6 text-slate-500" />
        </button>
      </div>

      <img
        src="https://github.com/rickyhideyukitakakura.png"
        alt=""
        className="h-16 w-16 rounded-full"
      />
    </header>
  );
}
