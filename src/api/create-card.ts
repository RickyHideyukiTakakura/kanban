import { api } from "../lib/axios";

export interface CreateCardBody {
  title: string;
  description: string;
  status: "do" | "doing" | "done";
  tags: {
    name: string;
  }[];
}

export async function createCard({
  title,
  description,
  status,
  tags,
}: CreateCardBody) {
  await api.post("/cards", {
    title,
    description,
    status,
    tags,
  });
}
