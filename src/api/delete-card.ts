import { api } from "../lib/axios";

export interface DeleteCardParams {
  id: string;
}

export async function deleteCard({ id }: DeleteCardParams) {
  await api.delete(`/cards/${id}`);
}
