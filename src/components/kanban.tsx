import { useQuery } from "@tanstack/react-query";
import { GetCardsResponse, getCards } from "../api/get-cards";
import { Card } from "./card";

export type Status = "do" | "doing" | "done";

interface KanbanProps {
  status: Status;
}

const statusMap: Record<Status, string> = {
  do: "A fazer",
  doing: "Fazendo",
  done: "Feito",
};

export function Kanban({ status }: KanbanProps) {
  const { data: cards } = useQuery<GetCardsResponse[]>({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900">{statusMap[status]}</h2>

      {cards &&
        cards.map(
          (card) =>
            card.status === status && <Card key={card.id} card={card} />,
        )}
    </div>
  );
}
