import { ListFilter } from "lucide-react";

export function Filter() {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Busque por cards, assuntos ou responsáveis..."
        className="w-full rounded-md pl-6"
      />

      <button className="flex items-center gap-2 rounded-md bg-violet-700 px-8 py-3 text-white hover:bg-violet-800">
        <ListFilter className="h-6 w-6" />
        Filtrar
      </button>
    </div>
  );
}
