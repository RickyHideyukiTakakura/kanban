import { api } from "../lib/axios";

export interface UpdateStatusCardParams {
  id: string;
  status: "do" | "doing" | "done";
}

export async function updateStatusCard({ id, status }: UpdateStatusCardParams) {
  await api.patch(`/cards/${id}`, {
    status,
  });
}
