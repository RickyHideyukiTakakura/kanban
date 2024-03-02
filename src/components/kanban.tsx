import { useMutation, useQuery } from "@tanstack/react-query";
import { useDrop } from "react-dnd";
import { GetCardResponse, getCards } from "../api/get-cards";
import {
  UpdateStatusCardParams,
  updateStatusCard,
} from "../api/update-status-card";
import { queryClient } from "../lib/react-query";
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
  const { data: cards } = useQuery({
    queryKey: ["cards"],
    queryFn: getCards,
  });

  function updateCardStatusCache({ id, status }: UpdateStatusCardParams) {
    const cardsListCached = queryClient.getQueriesData<GetCardResponse>({
      queryKey: ["cards"],
    });

    cardsListCached.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return;
      }

      queryClient.setQueryData<GetCardResponse[]>(cacheKey, (cacheData) =>
        cacheData?.map((card) => (card.id === id ? { ...card, status } : card)),
      );
    });
  }

  const { mutateAsync: updateStatusCardFn } = useMutation({
    mutationFn: updateStatusCard,
    async onSuccess(_, { id }) {
      updateCardStatusCache({ id, status });
    },
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
