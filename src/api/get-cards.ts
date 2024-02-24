import { api } from "../lib/axios";

export interface GetCardsResponse {
  id: string;
  title: string;
  description: string;
  status: "do" | "doing" | "done";
  tags: {
    name: string;
  }[];
}

export async function getCards() {
  const response = await api.get<GetCardsResponse[]>("/cards");

  return response.data;
}
