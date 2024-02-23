import {
  ClipboardList,
  ListFilter,
  Pencil,
  ScrollText,
  Settings,
  Users,
} from "lucide-react";
import { Logo } from "./components/logo";

export function App() {
  return (
    <div className="flex bg-violet-700">
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

      <main className="h-screen w-full space-y-8 rounded-tl-3xl bg-slate-100 px-14 pt-12">
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

        <div className="grid grid-cols-3 gap-16">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">A fazer</h2>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Fazendo</h2>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Feito</h2>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-lg bg-white p-6 shadow-md">
              <h3 className="text-sm font-bold text-slate-900">
                Fazer um kanban
              </h3>
              <p className="line-clamp-2 text-sm font-medium text-slate-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                quasi laboriosam dolor beatae illum fugit molestiae odio
                sapiente recusandae consequatur saepe dolorum, dolores laborum
                delectus dolorem, fuga nobis tempore repellendus.
              </p>
              <ul className="flex flex-wrap items-center gap-2">
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  Rocketseat
                </li>
                <li className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700">
                  React
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
