import { useMutation, useQuery } from "@tanstack/react-query";
import { useDrop } from "react-dnd";
import { getCards } from "../api/get-cards";
import {
  UpdateStatusCardParams,
  updateStatusCard,
} from "../api/update-status-card";
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
  const { mutateAsync: updateStatusCardFn } = useMutation({
    mutationFn: updateStatusCard,
  });

  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item: UpdateStatusCardParams) => {
      updateStatusCardFn({ id: item.id, status });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      className={`space-y-6 ${isOver ? "rounded bg-slate-200" : ""}`}
      ref={drop}
    >
      <h2 className="text-xl font-bold text-slate-900">{statusMap[status]}</h2>

      {cards &&
        cards.map(
          (card) =>
            card.status === status && (
              <Card
                key={card.id}
                card={card}
                onDrop={() => updateStatusCardFn({ id: card.id, status })}
              />
            ),
        )}
    </div>
  );
}
