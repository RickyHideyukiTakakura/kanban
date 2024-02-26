import { DropdownMenuCard } from "./dropdown-menu-card";

export interface CardProps {
  card: {
    id: string;
    title: string;
    description: string;
    status: "do" | "doing" | "done";
    tags: {
      name: string;
    }[];
  };
}

export function Card({ card }: CardProps) {
  return (
    <div className="relative space-y-3 rounded-lg bg-white p-6 shadow-md ">
      <div className="absolute -right-4 -top-4">
        <DropdownMenuCard id={card.id} />
      </div>

      <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
      <p className="line-clamp-2 text-sm font-medium text-slate-700">
        {card.description}
      </p>
      <ul className="flex flex-wrap items-center gap-2">
        {card.tags.map((tag) => (
          <li
            key={tag.name}
            className="rounded-lg bg-violet-200 px-2 py-1 text-xs font-medium text-violet-700"
          >
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
